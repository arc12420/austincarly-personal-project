const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const user = await db.getUser(email);
    if (!user[0]) {
      return res.status(401).send("Incorrect credentials");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          firstName: user[0].firstname,
          lastName: user[0].lastname,
          email: user[0].email,
          profilePic: user[0].profilepic,
        };
        console.log(user[0]);
        console.log(req.session.user);
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Email or password incorrect");
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  user: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(200);
    }
  },

  getAllUsers: (req, res) => {
    const db = req.app.get("db");

    db.getAllUsers()
      .then((users) => res.status(200).send(users))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  // getPostAuthor: (req, res) => {
  //   const db = req.app.get("db");

  //   db.getPostAuthor()
  //     .then((firstName, lastName) => res.status(200).send(firstName, lastName))
  //     .catch((err) => {
  //       res.status(500).send({
  //         errorMessage:
  //           "Oops! Something went wrong. Our engineers have been informed!",
  //       });
  //       console.log(err);
  //     });
  // },

  getAllPosts: (req, res) => {
    const db = req.app.get("db");

    db.getAllPosts()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getAllPhotosFromAlbum: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.getAllPhotosFromAlbum(id)
      .then((photos) => res.status(200).send(photos))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getPost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.getPost(id)
      .then((posts) => res.status(200).send(posts[0]))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getAlbum: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.getAlbum(id)
      .then((albums) => res.status(200).send(albums[0]))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getAllAlbums: (req, res) => {
    const db = req.app.get("db");

    db.getAllAlbums()
      .then((albums) => res.status(200).send(albums))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  register: async (req, res) => {
    const db = req.app.get("db");
    const transporter = req.app.get("transporter");
    const { firstName, lastName, email, password, profilePic } = req.body;
    const existingUser = await db.getUser(email);
    if (existingUser[0]) {
      return res.status(409).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.register([
      firstName,
      lastName,
      email,
      hash,
      profilePic,
    ]);
    const mailOptions = {
      from: "howsyourbrood@gmail.com",
      to: email,
      subject: `Welcome ${firstName} ${lastName}`,
      text: `Welcome ${firstName} ${lastName}! We are so happy you have joined us today!`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully!");
      }
    });

    console.log(newUser);
    req.session.user = {
      userId: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    };
    res.status(200).send(req.session.user);
  },

  addPost: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("body", req.body);
    console.log("session", req.session.user);
    const { title, img, post } = req.body;
    const { userId } = req.session.user;

    dbInstance
      .addPost([title, img, post, userId])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  addPhoto: (req, res) => {
    const dbInstance = req.app.get("db");
    const { title, img } = req.body;
    const { album } = req.params;
    const { userId } = req.session.user;
    console.log(album);
    console.log(userId);

    dbInstance
      .addPhoto([title, img, userId, album])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  addAlbum: (req, res) => {
    const dbInstance = req.app.get("db");
    const { title } = req.body;

    dbInstance
      .addAlbum([title])
      .then((albums) => res.status(200).send(albums))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  // updateUser: (req, res) => {
  //   const dbInstance = req.app.get("db");
  //   const { params, body } = req;

  //   dbInstance
  //     .updateUser([
  //       params.id,
  //       body.firstName,
  //       body.lastName,
  //       body.email,
  //       body.password,
  //       body.profilePic,
  //     ])
  //     .then(() => res.sendStatus(200))
  //     .catch((err) => {
  //       res
  //         .status(500)
  //         .send({
  //           errorMessage:
  //             "Oops! Something went wrong. Our engineers have been informed!",
  //         });
  //       console.log(err);
  //     });
  // },

  updatePost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params, body } = req;
    const { userId } = req.session.user;

    dbInstance
      .updatePost([params.id, body.title, body.img, body.post, userId])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  deletePost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .deletePost(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  deletePhoto: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .deletePhoto(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  deleteAlbum: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .deleteAlbum(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },
};

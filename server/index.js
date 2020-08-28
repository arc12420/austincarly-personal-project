require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const controller = require("./controller");
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log(`Database is connected.`);
});

app.get("/api/users", controller.getAllUsers);
app.get("/api/posts", controller.getAllPosts);
app.get("/api/photos/:id", controller.getAllPhotosFromAlbum);
app.get("/api/albums", controller.getAllAlbums);
app.post("/api/user", controller.login);
app.post("/api/addUser", controller.register);
app.post("/api/addPost", controller.addPost);
app.post("/api/addPhoto", controller.addPhoto);
app.post("/api/addAlbum", controller.addAlbum);
// app.put("/api/updateUser/:id", controller.updateUser);
app.put("/api/updatePost/:id", controller.updatePost);
app.delete("/api/deletePost/:id", controller.deletePost);
app.delete("/api/deletePhoto/:id", controller.deletePhoto);

app.listen(SERVER_PORT, () =>
  console.log(`You are connected to port ${SERVER_PORT}.`)
);

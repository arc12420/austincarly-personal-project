INSERT INTO users
(firstName, lastName, email, password, profilePic)
VALUES
($1, $2, $3, $4, $5) returning firstName, lastName, id;
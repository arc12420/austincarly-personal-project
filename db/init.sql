-----------------------------------------Tables------------------------------
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    Email VARCHAR(30),
    password VARCHAR(80),
    profilePic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    post TEXT,
    author INTEGER REFERENCES users(id)
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45)
);

create table photos (
    id serial primary key,
    img text,
    album_id integer references albums(id)
)

--------------------------------------------------Dummy Data------------------------
INSERT INTO users (firstname, lastname, email, password, profilePic)
VALUES ('Spongebob', 'Squarepants', 'ImReady@krustyKrab.com', 'GoofyGoober', 'https://static.wikia.nocookie.net/0a120a4b-6cd1-4bf1-97af-7e94dc913e1a');

INSERT INTO posts (title, img, post, author)
VALUES ('JellyFishing', 'https://i.pinimg.com/originals/57/83/cd/5783cd5bc824af6cdca5575e2e343d26.jpg', 'Went jellyfishing with Patrick today', 1);

INSERT INTO photos (title, img, author)
VALUES ('Gary', 'https://i.pinimg.com/originals/74/43/01/744301c88535a31c590af529cb8b37ab.jpg', 1);


SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM photos;




















CREATE TABLE ($1) (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    author INTEGER REFERENCES users(id),
    album INTEGER REFERENCES albums(id)
);

INSERT INTO (albums)
(title)
VALUES ($1);

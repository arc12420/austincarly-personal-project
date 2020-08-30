DELETE FROM albums
WHERE id = $1;

DELETE FROM photos
WHERE album = $1;
UPDATE posts 
SET (title, img, post, author) = ($2, $3, $4, $5) 
WHERE id = $1;
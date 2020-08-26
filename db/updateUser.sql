UPDATE users
SET (firstName, lastName, email, password, profilePic) = ($1, $2, $3, $4, $5)
WHERE id = $1 
returning firstName, lastName, id;
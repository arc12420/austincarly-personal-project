UPDATE users
SET (firstName, lastName, email, password, profilePic) = ($2, $3, $4, $5, $6)
WHERE id = $1 
returning firstName, lastName, id;
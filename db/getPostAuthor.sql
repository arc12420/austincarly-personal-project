SELECT u.firstName, u.lastName
FROM users u
JOIN posts p ON p.author = u.id
WHERE p.author = ($1);
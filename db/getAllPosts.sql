SELECT u.profilePic, u.firstName, u.lastName, p.id, p.title, p.img, p.post, p.author 
FROM posts p JOIN users u ON u.id = p.author;
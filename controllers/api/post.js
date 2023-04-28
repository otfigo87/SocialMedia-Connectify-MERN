const Post = require('../../models/post');

//setPosts === Post
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Add a message! Thank you" });
  }

  const post = await Post.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

//getPosts === Get

//editPost === Put (update)

//deletePost === delete

//like & dislike
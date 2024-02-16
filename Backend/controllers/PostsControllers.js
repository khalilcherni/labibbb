const Post = require('../models/post');


exports.createPost = (req, res) => {
  const { title, description, img1, img2 } = req.body;
  Post.createPost(title, description, img1, img2, (err, postId) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Post created successfully', postId });
  });
};


exports.getAllPosts = (req, res) => {
  Post.getAllPosts((err, posts) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(posts);
  });
};


exports.getPostById = (req, res) => {
  const postId = req.params.id;
  Post.getPostById(postId, (err, post) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  });
};


exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const { title, description, img1, img2 } = req.body;
  Post.updatePost(postId, title, description, img1, img2, err => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Post updated successfully' });
  });
};


exports.deletePost = (req, res) => {
  const postId = req.params.id;
  Post.deletePost(postId, err => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Post deleted successfully' });
  });
};
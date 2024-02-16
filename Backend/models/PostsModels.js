const db = require('../database/index');

// Create a post
exports.createPost = (title, description, img1, img2, callback) => {
  db.query(
    'INSERT INTO posts (title, description, img1, img2) VALUES (?, ?, ?, ?)',
    [title, description, img1, img2],
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result.insertId);
    }
  );
};

// Read all posts
exports.getAllPosts = callback => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// Read a single post by id
exports.getPostById = (id, callback) => {
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) {
      return callback(err);
    }
    if (results.length === 0) {
      return callback(null, null); // No post found with that id
    }
    callback(null, results[0]);
  });
};

// Update a post
exports.updatePost = (id, title, description, img1, img2, callback) => {
  db.query(
    'UPDATE posts SET title = ?, description = ?, img1 = ?, img2 = ? WHERE id = ?',
    [title, description, img1, img2, id],
    err => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

// Delete a post
exports.deletePost = (id, callback) => {
  db.query('DELETE FROM posts WHERE id = ?', [id], err => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostsControllers');


router.post('/create', postController.createPost);
router.get('/get', postController.getAllPosts);
router.get('/get/:id', postController.getPostById);
router.put('/update/:id', postController.updatePost);
router.delete('/delete/:id', postController.deletePost);

module.exports = router;

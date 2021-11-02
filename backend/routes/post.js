const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require ('../middleware/auth');



//Routes
router.post('/post/new',auth, postCtrl.createPost);
router.get('/post', auth, postCtrl.listPost);
router.put('/post/:id', auth, postCtrl.modifyPost)
router.delete('/post/:id', auth , postCtrl.deletePost);


module.exports = router;

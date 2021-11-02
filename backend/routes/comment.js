const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require ('../middleware/auth');

//Routes
router.post('/comment/new', auth, commentCtrl.createComment);
router.get('/comment', auth, commentCtrl.listComment);
router.put('/comment/:id', auth, commentCtrl.modifyComment)
router.delete('/:id', auth, commentCtrl.deleteComment);


module.exports = router;

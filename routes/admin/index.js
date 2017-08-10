let express = require('express');

let router = express.Router();

let userRouter = require('./user');
let roleRouter = require('./role');
let postRouter = require('./post');
let categoryRouter = require('./category');

router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/posts', postRouter);
router.use('/categories', categoryRouter);

module.exports = router;
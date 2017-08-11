let express = require('express');

let router = express.Router();

let userRouter = require('./user');
let roleRouter = require('./role');
let postRouter = require('./post');
let categoryRouter = require('./category');
let pageRouter = require('./page');

router.get('/', (req, res) => {
    res.redirect('/admin/posts');
});
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/posts', postRouter);
router.use('/categories', categoryRouter);
router.use('/pages', pageRouter);

module.exports = router;
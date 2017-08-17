let express = require('express');

let router = express.Router();

let userRouter = require('./user');
let roleRouter = require('./role');
let postRouter = require('./post');
let categoryRouter = require('./category');
let pageRouter = require('./page');
let statisticRouter = require('./statistic');
let dashboardRouter = require('./dashboard');
let loginRouter = require('./login');
router.get('/', (req, res) => {
    res.redirect('/admin/dashboard');
});

router.use('/', dashboardRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/posts', postRouter);
router.use('/categories', categoryRouter);
router.use('/pages', pageRouter);
router.use('/statistics', statisticRouter);
router.use('/login', loginRouter);

module.exports = router;
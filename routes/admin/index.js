let express = require('express');

let router = express.Router();

let userRouter = require('./user');
let roleRouter = require('./role');

router.use('/users', userRouter);
router.use('/roles', roleRouter);

module.exports = router;
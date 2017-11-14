let express = require('express');

let apiController = require('../../app/controllers/api');

let router = express.Router();

let middleware = require('../../app/middlewares/passport');

router.use(middleware.authenticated());

router.get('/login', apiController.login);


module.exports = router;
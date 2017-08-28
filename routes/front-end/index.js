let express = require('express');

let path = require('path');
let FrontEndController = require(path.join(__dirname, '../../app/controllers/front-end'));

let router = express.Router();

let frontEndMiddleware = require('../../app/middlewares/front-end');

router.get('/',frontEndMiddleware.index(), FrontEndController.index);
router.get('/upload',frontEndMiddleware.index(), FrontEndController.upload);

module.exports = router;

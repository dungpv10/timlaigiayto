let express = require('express');

let path = require('path');
let FrontEndController = require(path.join(__dirname, '../../app/controllers/front-end'));

let router = express.Router();


router.get('/', FrontEndController.index);

module.exports = router;

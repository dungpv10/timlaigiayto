let express = require('express');


let router = express.Router();

let LoginController = require('../../app/controllers/login');
router.get('/', LoginController.index);
router.post('/', LoginController.postLogin);

module.exports = router;
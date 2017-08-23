const express = require('express');


let router = express.Router();

let EmailController = require('../../app/controllers/email_register');
router.get('/', EmailController.index);

module.exports = router;
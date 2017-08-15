let express = require('express');

let router = express.Router();
let dashboardController = require('../../app/controllers/dashboard');

router.get('/dashboard', dashboardController.index);
router.post('/send-mail', dashboardController.sendMail);

module.exports = router;
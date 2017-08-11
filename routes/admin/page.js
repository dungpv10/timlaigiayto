
let express = require('express');


let router = express.Router();

let PageController = require('../../app/controllers/page');
router.get('/', PageController.index);
router.get('/create', PageController.getCreate);
router.post('/create', PageController.postCreate);
module.exports = router;
let express = require('express');

let router = express.Router();

let UserController = require('../../app/controllers/user');
router.get('/', UserController.index);
router.get('/create', UserController.getCreate);
router.post('/create', UserController.postCreate);
router.get('/:id', UserController.getEdit);
router.post('/update', UserController.postUpdate);

module.exports = router;
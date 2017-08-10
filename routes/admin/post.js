let express = require('express');

let router = express.Router();

let PostController = require('../../app/controllers/post');

router.get('/', PostController.index);
router.get('/create', PostController.getCreate);
router.get('/:id', PostController.getEdit);

module.exports = router;
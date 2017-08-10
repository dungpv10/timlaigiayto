let express = require('express');


let router = express.Router();

let CategoryController = require('../../app/controllers/category');

router.get('/', CategoryController.index);
router.get('/create', CategoryController.getCreate);
router.post('/create', CategoryController.postCreate);
router.post('/', CategoryController.destroy);
router.get('/:id', CategoryController.getEdit);
router.post('/update', CategoryController.postUpdate);


module.exports = router;
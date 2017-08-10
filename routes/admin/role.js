let express = require('express');

let router = express.Router();

let RoleController = require('../../app/controllers/role');
router.get('/', RoleController.index);
router.get('/create', RoleController.getCreate);
router.post('/create', RoleController.postCreate);
router.post('/', RoleController.destroy);
router.get('/:id', RoleController.getEdit);
router.post('/update', RoleController.postUpdate);

module.exports = router;
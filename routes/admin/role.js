let express = require('express');

let router = express.Router();

let RoleController = require('../../app/controllers/role');
router.get('/', RoleController.index);

module.exports = router;
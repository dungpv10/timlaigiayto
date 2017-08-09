let express = require('express');

let path = require('path');
let router = express.Router();




router.get('/', (req, res) => {
    res.render('admin/user/index');
});


module.exports = router;
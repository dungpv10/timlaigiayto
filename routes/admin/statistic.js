let express = require('express');

let router = express.Router();

let StatisticController = require('../../app/controllers/statistic');

router.get('/', StatisticController.index);

module.exports = router;
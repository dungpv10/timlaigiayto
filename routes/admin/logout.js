let logoutRouter = require('express').Router();

let logoutController = require('../../app/controllers/logout');

logoutRouter.get('/', logoutController.logout);

module.exports = logoutRouter;
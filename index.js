'use strict';
/**
* Require all module
*/
let express = require('express');
let path = require('path');
let app = express();

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/timlaigiayto');

const bodyParser = require('body-parser');
bodyParser.json({limit : '1000kb'});
app.use(bodyParser.urlencoded({extended : true}));
require('dotenv').config();
app.use(express.static('public'));

app.set('view engine', 'pug');



/**
* middleware for router
*/
let routerFrontEnd = require(path.join(__dirname, 'routes/front-end/index'));
let routerAdmin = require(path.join(__dirname, 'routes/admin/index'));

app.use('/', routerFrontEnd);
app.use('/admin', routerAdmin);


/**
* Connect to database
*/
app.listen(process.env.PORT, function(err) {
	if(err) console.log(err);
	else console.log('Connect to server on port ' + process.env.PORT);
});


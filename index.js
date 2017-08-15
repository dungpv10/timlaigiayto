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

let Mailer = require('./app/libs/Mailer');
app.get('/test', (req, res) => {
	let mailer = new Mailer({from : 'dungpv20@gmail.com', to : 'dungpv20@gmail.com', subject : 'Test node send mail', text : 'Content node send mail', html : ''});
	mailer.sendMail().then(info => {
        res.send('okkkk');
    }).catch(err => console.log(err));
});

/**
* Connect to database
*/
app.listen(process.env.PORT || 3000, function(err) {
	if(err) console.log(err);
	else console.log('Connect to server on port ' + process.env.PORT || 3000);
});


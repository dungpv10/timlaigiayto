'use strict';
/**
* Require all module
*/

let connection = require('./app/libs/database/connection');
connection.init().then(connection => {
    let express = require('express');
    let path = require('path');
    let app = express();

    const bodyParser = require('body-parser');
    bodyParser.json({limit : '1000kb'});
    app.use(bodyParser.urlencoded({extended : true}));
    require('dotenv').config();
    app.use(express.static('public'));

    app.set('view engine', 'pug');



    const cookieParser = require('cookie-parser');
    app.use(cookieParser());

    const session = require('express-session');
    app.use(session({
        secret: 'Timlaigiayto',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));

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
    app.listen(process.env.PORT || 3000, function(err) {
        if(err) console.log(err);
        else console.log('Connect to server on port ' + process.env.PORT || 3000);
    });
}).catch((err) => console.log(err));



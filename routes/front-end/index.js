'use strict';
let express = require('express');

let path = require('path');

let cheerio = require('cheerio');
let request = require('request');

let FrontEndController = require(path.join(__dirname, '../../app/controllers/front-end'));

let router = express.Router();

let frontEndMiddleware = require('../../app/middlewares/front-end');

router.get('/',frontEndMiddleware.index(), FrontEndController.index);
router.get('/upload',frontEndMiddleware.index(), FrontEndController.upload);
router.post('/upload',frontEndMiddleware.index(), FrontEndController.postUpload);

router.get('/scrape', (req, res) => {
    const url = 'http://timgiayto.com.vn/';

    request.get(url, (err, response, body) => {
        if(err) return console.log(err);
        let $ = cheerio.load(body);
        $('tbl').filter(function() {
            let data = $(this);
            let title = data.find('h5').text();
            console.log(title);
        });
    });

});

module.exports = router;

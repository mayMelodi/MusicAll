var express     = require('express');
var path        = require('path');
var fs          = require('fs');
var router      = express.Router();


router.get('/', function (req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/dist') });
});
router.get('/favicon.ico', function (req, res, next) {
    res.sendFile('favicon.ico', {root: path.join(__dirname, '../public/dist') });
});

module.exports  = router;
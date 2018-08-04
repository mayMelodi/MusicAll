var express = require('express');
var router  = express.Router();
var db      = require('../core/db');

router.get('/all', function (req, res, next) {
    db.select('users')
    .then((data) => {
        res.json(data);
    }).catch((err) => { 
        res.json({'code': -1, 'status': 'error', 'data': err});
    });
});

router.get('/:email', function (req, res, next) {
    db.select('users', {"email": req.params.email})
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log('[DB Error]: ' + err);
        res.json({'code': -1, 'status': 'error', 'data': err.message});
    });
});

router.post('/', function (req, res, next) {
    db.insert('users', req.body)
    .then((data) => res.json(data))
    .catch((err) => {
        console.log('[DB Error]: ' + err);
        res.json({'code': -1, 'status': 'error', 'data': err.message});
    });
});

router.put('/:email', function (req, res, next) {
    db.update('users', { "email": req.params.email}, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
        console.log('[DB Error]: ' + err);
        res.json({'code': -1, 'status': 'error', 'data': err.message});
    });
});

router.delete('/:email', function (req, res, next) {
    db.delete('users', {"email": req.params.email })
    .then((data) => res.json(data))
    .catch((err) => {
        console.log('[DB Error]: ' + err);
        res.json({'code': -1, 'status': 'error', 'data': err.message});
    });
});

module.exports  = router;
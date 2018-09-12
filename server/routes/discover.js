var express = require('express');
var router  = express.Router();
var db      = require('../core/db');

router.put('/', (req, res) => {
    if (!req.body) { return res.status(400).json({"code": 400, "status": "Invalid arguments", "data": null}); } 
    
    db.insert('discover', req.body)
        .then((value) => { return res.json({"code": 200, "status": "Success", "data": value }); })
        .catch((err) =>  { return res.status(500).json({"code": 500, "status": "Error", "data": err }); });
});

router.get('/', (req, res) => {
    if (!req.body) { return res.status(400).json({"code": 400, "status": "Invalid arguments", "data": null }); } 
    
    db.select('discover')
        .then((value) => { return res.json({"code": 200, "status": "Success", "data": value }); })
        .catch((err) =>  { return res.status(500).json({"code": 500, "status": "Error", "data": err }); });
});

module.exports  = router;

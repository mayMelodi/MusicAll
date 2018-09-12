var express   = require('express');
var validator = require('validator');
var crypto    = require('crypto');
var jwt       = require('jsonwebtoken');
var uniqid    = require('uniqid'); 
var db        = require('../core/db');

var router    = express.Router();

router.post('/register', function (req, res) {
    try {
        let params = req.body;
        if (!params.email)     throw Error('ERR_INVALID_INPUT');
        if (!params.firstname) throw Error('ERR_INVALID_INPUT');
        if (!params.lastname)  throw Error('ERR_INVALID_INPUT');
        if (!params.password)  throw Error('ERR_INVALID_INPUT');

        if (!validator.isEmail(params.email))                             throw new Error('ERR_INVAILD_EMAIL');
        if (!validator.isByteLength(params.firstname, {min: 2, max: 30})) throw new Error('ERR_INVALID_FIRST');
        if (!validator.isByteLength(params.lastname, {min: 2, max: 30}))  throw new Error('ERR_INVALID_LAST');

        params["salt"] = uniqid();
        let hash = crypto.createHash('sha256');
        hash.update(params["salt"] + params["password"]);
        params["password"] = hash.digest('hex');

        //Internal params
        params["privileges"] = ["viewer"];
        db.insert('users', [params])
           .then(() => {
                db.select('users', params)
                    .then((data) => {
                        delete data[0].password;
                        delete data[0].salt;
                        let token = jwt.sign(data[0], require('../configuration').authentication.secret, {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        res.json({"code": 200, "status": "Success", "data": { "token" : token, "privileges": params["privileges"] }});
                    }).catch(err => { 
                        res.status(500).json({"code": 500, "status": "Error", "data": err}); 
                        console.log(err);
                    });
            })
            .catch(err => { 
                res.status(500).json({"code": 500, "status": "Error", "data": err}); 
                console.log(err);
            });
    } catch (err) {
        res.status(400).json({"code": 400, "status": "Error", "data": err});
    }
});

router.post('/login', function (req, res) {
    try{
        if (!req.body.email)                      throw new Error('ERR_INVALID_INPUT');
        if (!validator.isEmail(req.body.email))   throw new Error('ERR_INVAILD_EMAIL');
        if (!req.body.password)                   throw new Error('ERR_INVALID_INPUT');

        db.select('users', {"email": req.body.email})
            .then((userData => {
                let hash = crypto.createHash('sha256');
                hash.update(userData[0]["salt"] + req.body.password);
                if (hash.digest('hex') === userData[0]["password"]) {
                    delete userData[0].password;
                    delete userData[0].salt;
                    let token = jwt.sign(userData[0], require('../configuration').authentication.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.json({"code": 200, "status": "Success", "data": { "token" : token, "privileges": userData[0].privileges }});
                }
                else { res.status(401).json({"code": 403, "status": "Error", "data": "User or password not match"}) }
            })).catch (err => res.status(401).json({"code": 401, "status": "Error", "data": "User not exist"}));
    } catch (err) {
        res.status(400).json({"code": 400, "status": "Error", "data": err});
    }
});

router.get('/logout', function (req, res) {
    res.json({"code": 200, "status": "Success", "data": undefined });
});

router.post('/contact-us', function(req, res) {
    if (!req.body) { return res.status(400).json({"code": 400, "status": "Error", "data": "No data been sent"}); }
    db.insert('contact', [ req.body ])
        .then(value => res.json({"code": 200, "status": "Success", "data": value}))
        .catch(err => res.status(500).json({"code": 500, "status": "Error", "data": err}));
});
router.get('/contact-us', function(req, res) {
    db.insert('contact')
        .then(value => res.json({"code": 200, "status": "Success", "data": value}))
        .catch(err => res.status(500).json({"code": 500, "status": "Error", "data": err}));
});

module.exports  = router;
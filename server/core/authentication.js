
var { authentication } = require('../configuration');
var jsonwebtoken       = require('jsonwebtoken');


class Authentication {
    constructor(excludes) {
        this.excludes = excludes || [];
    }
}

Authentication.prototype.verify = function(req, res, next) {
    if (this.excludes.indexOf(req.path) > -1)
        return next();
    try {
        jsonwebtoken.verify(req.headers['x-auth-token'], authentication.secret, (err, token) => {
            if (err) { throw err; }
            else { next(); }
        });
    } catch (err) {
        res.status(403).json({"code": 403, "status": err.message, "data": err});
    } 
}

module.exports.Authentication = Authentication;
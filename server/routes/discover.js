var express = require('express');
var router  = express.Router();

router.put('/', (req, res) => {
    if (!req.body) { return res.status(400).json({"code": 400, "status": "Invalid arguments", "data": null}); } 

    global.classifier.predict(json.body)
        .then((value) => { return res.json({"code": 200, "status": "Success", "data": value }); })
        .catch((err) => { return res.json({"code": 500, "status": "Error", "data": err });})
});

module.exports  = router;

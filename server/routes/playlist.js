var express     = require('express');
var router      = express.Router();

router.get('/next', function (req, res) {
    var result = playlist.dequeue();
    if (result) res.json({"code": 200, "status": "Success", "data": result });
    else res.status(500).json({"code": 500, "status": "Playlist is empty", "data": null});
});
router.post('/add', function (req, res) {
    if (!req.body.url) res.status(400).json({"code": 400, "status": "Invalid arguments", "data": null});
    playlist.enqueue(req.body.url);
    res.json({"code": 200, "status": "Success", "data": null})
});
router.get('/all', function (req, res) {
    playlist.list().
        then((values) => {res.json({"code": 200, "status": "Success", "data": values }); })
        .catch ((err) => { res.status(500).json({"code": 500, "status": err.message, "data": err}); });
});
module.exports  = router;
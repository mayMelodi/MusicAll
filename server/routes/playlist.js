var express     = require('express');
var Playlist    = require("../controllers/playlistController");
var router      = express.Router();
var playlist = new Playlist();

router.get('/', function (req, res) {
    var result = playlist.dequeue();
    if (result) res.json({"code": 200, "status": "Success", "data": result });
    else res.status(500).json({"code": 500, "status": "Playlist is empty", "data": null});
});
router.post('/', function (req, res) {
    if (!req.body.url) res.status(400).json({"code": 400, "status": "Invalid arguments", "data": null});
    playlist.enqueue(req.body.url);
    res.json({"code": 200, "status": "Success", "data": req.body.url})
});
module.exports  = router;
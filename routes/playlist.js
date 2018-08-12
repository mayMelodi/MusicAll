var express     = require('express');
var Playlist    = require("../controllers/playlistController");
var router      = express.Router();
var playlist = new Playlist();

router.get('/', function (req, res) {
    res.json({"code": 200, "status": "Success", "data": { "data" : playlist.dequeue() }});
});
router.post('/', function (req, res) {
    playlist.enqueue(req.body);
    res.json({"code": 200, "status": "Success", "data": "null"})
});
module.exports  = router;
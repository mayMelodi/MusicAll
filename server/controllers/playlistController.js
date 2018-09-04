var Playlist = require('../core/Playlist');
var youtube = require('../core/YoutubeAPI');

function PlaylistConstroller () {
    this.playlist = new Playlist;
}

PlaylistConstroller.prototype.enqueue = function (url) {
    youtube.GetVideo(url)
        .then((song) => {
            try {
                let element = {
                    "id": song.id,
                    "title": song.snippet.title,
                    "picture":  song.snippet.thumbnails.default,
                    "duration": song.contentDetails.duration
                };
                this.playlist.dataStore.push(element);
                ws.update('add', element);
            } catch (err) {
                console.log("[Playlist] Error while trying to insert value [" + err + "]");
            }
        }).catch((err) => {
            console.log("[Playlist] Error while trying to insert value [" + err + "]");
        });
}

PlaylistConstroller.prototype.dequeue = function() {
    if (this.playlist.dataStore.length > 0) {
        ws.update('remove', null);
        return this.playlist.dataStore.shift();
    }
    else
        return null;
}

PlaylistConstroller.prototype.peak = function() {
    if (this.playlist.dataStore.length)
        return this.dataStore[0];
    else
        return null;
}

PlaylistConstroller.prototype.list = function () {
    return new Promise((resolve, reject) => {
        try {
            let result = [];
            this.playlist.dataStore.forEach(song => {
                result.push(song);
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = PlaylistConstroller;


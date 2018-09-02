var db = require('../core/db');
var youtube = require('../core/YoutubeAPI');

class Playlist {

    constructor() {
        this.dataStore = null;

        var load = setInterval(function() {
            if (db.isConnected)
            {
                db.select('playlist')
                    .then(function(result) {
                        this.dataStore = result;

                        var backup = setInterval(function(){
                            if (db.isConnected)
                            {
                                console.log("[Playlist] Start to backup playlist...");
                                db.delete('playlist')
                                    .then(function() {
                                        db.insert('playlist', this.dataStore)
                                            .then(() => { console.log("[Playlist] Successfully backup.") })
                                            .catch(err => { console.log("[Playlist] Failed to backup playlist [" +err + "]")});
                                    }.bind(this))
                                    .catch(err => { console.log("[Playlist] Failed to backup playlist [" +err + "]")});
                            } else {
                                clearInterval(backup);
                                console.log("[Playlist] Can't backup playlist. Connection to DB is down.");
                            }
                        }.bind(this), 1000*60*5);
                        clearInterval(load);
                        console.log("[Playlist] Successfuly load playlist.");
                    }.bind(this))
                    .catch(function(err) {
                        console.log("[Playlist] failed to load playlist [" + err + "]");
                        this.dataStore = [];
                    }.bind(this));
            }
        }.bind(this),1000);
    }
}

Playlist.prototype.enqueue = function (url) {
    youtube.GetVideo(url)
        .then((value) => {
            try {
                this.dataStore.push(value);
            } catch (err) {
                console.log("[Playlist] Error while trying to insert value [" + err + "]");
            }
        }).catch((err) => {
            console.log("[Playlist] Error while trying to insert value [" + err + "]");
        });
}

Playlist.prototype.dequeue = function() {
    if (this.dataStore.length > 0)
        return this.dataStore.shift();
    else
        return null;
}

Playlist.prototype.peak = function() {
    if (this.dataStore.length)
        return this.dataStore[0];
    else
        return null;
}

Playlist.prototype.list = function () {
    return new Promise((resolve, reject) => {
        try {
            let result = [];
            this.dataStore.forEach(song => {
                result.push({
                    "title": song.snippet.title,
                    "picture":  song.snippet.thumbnails.default,
                    "duration": song.contentDetails.duration
                });
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = Playlist;


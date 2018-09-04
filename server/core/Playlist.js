var db = require('../core/db');

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

module.exports = Playlist;
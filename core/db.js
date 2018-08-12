
var MongoClient = require('mongodb').MongoClient;
var mongoData   = require('../configuration').mongoData;

function DataBase () {
        let url = 'mongodb://' + mongoData.username + ':' + mongoData.password + '@' + mongoData.url + ':' + mongoData.port + '/' + mongoData.db;
        let connection = MongoClient.connect(url, { useNewUrlParser: true });

        connection.then((value) => {
            this.database = value;
            this.isConnected = true;
            console.log('[MongoDB]: Connection have open.');
        }).catch((err) => {
            this.database = null;
            this.isConnected = false;
            console.log('[MongoDB]: Error while trying to open connection.');
            console.log(err);
        });
}

DataBase.prototype.close = function() {
    if (this.isConnected) {
        this.database.close();
        this.isConnected = false;
        console.log('DB: Connection been closed.');
    }
}
DataBase.prototype.select = function (table, query=null) {
    return new Promise((resolve, reject) => {
        if (!this.isConnected) {
            reject(new Error('CONNECTION_ERROR'));
        }
        else {
            try {
                let collection = this.database.db(mongoData.db).collection(table);
                if (!query) query = {};
                collection.find(query).toArray()
                    .then(data => resolve(data))
                    .catch(err => reject(err));
                
            } catch (err) {
                reject(err);
            }
        }
    });
}
DataBase.prototype.insert = function(table, data) {
    return new Promise((resolve, reject) => {
        if (!this.isConnected) {
            reject(new Error('CONNECTION_ERROR'));
        }
        else {
            try {
                console.log("[MongoDB] Insert: " + data);
                let collection = this.database.db(mongoData.db).collection(table);
                collection.insert(data)
                    .then(res => resolve(res))
                    .catch(err => reject(err));
            } catch (err) {
                reject(err);
            }
        }
    });
}
DataBase.prototype.update = function(table, query, values) {
    return new Promise((resolve, reject) => {
        if (!this.isConnected) {
            reject(new Error('CONNECTION_ERROR'));
        } else {
            try {
                let collection = this.database.db(mongoData.db).collection(table);
                collection.update(query, {$set: values}, (err, data) => {
                    if (err) reject(err);
                    else if (data.result.nModified < 1) reject(new Error('OBJECT_NOT_FOUND'));
                    else resolve(data);
                });
            } catch (err) {
                reject(err);
            }
        }
    });
}
DataBase.prototype.delete = function(table, query) {
    return new Promise((resolve, reject) => {
        if (!this.isConnected) {
            reject(new Error('CONNECTION_ERROR'));
        } else {
            try {
                let collection = this.database.db(mongoData.db).collection(table);
                collection.deleteMany(query, (err, data) => {
                    if (err) reject(err);
                    else if (data.result.nModified < 1) reject(new Error('OBJECT_NOT_FOUND'));
                    else resolve(data);
                });
            } catch (err) {
                reject(err);
            }
        }
    });
}
DataBase.prototype.pop = function() {
    return new Promise((resolve, reject) => {
        if (!this.isConnected) {
            reject(new Error('CONNECTION_ERROR'));
        }
        else {
            try {
                let collection = this.database.db(mongoData.db).collection(table);
                if (!query) query = {};
                collection.findOneAndDelete(query).toArray()
                    .then(data => resolve(data))
                    .catch(err => reject(err));
                
            } catch (err) {
                reject(err);
            }
        }
    });
}
module.exports = new DataBase();
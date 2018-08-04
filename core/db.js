
var MongoClient = require('mongodb').MongoClient;
var ObjectID    = require('mongodb').ObjectID;
var mongoData   = require('../configuration').mongoData;

class DataBase {
    constructor () {
        let url = 'mongodb://' + mongoData.username + ':' + mongoData.password + '@' + mongoData.url + ':' + mongoData.port + '/' + mongoData.db;
        let connection = MongoClient.connect(url);
        connection.then((_db) => {
            this.database = _db.db(mongoData.db);
            this.isConnected = true;
            console.log('DB: Connection have open.');
        }).catch((err) => {
            this.error = err;
            console.log('DB: Error while trying to open connection.');
            console.log(this.error);
        });
    }
    close() {
        if (this.isConnected) {
            this.database.close();
            this.isConnected = false;
            console.log('DB: Connection been closed.');
        }
    }

    select(table, query=null) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('CONNECTION_ERROR'));
            }
            else {
                try {
                    let collection = this.database.collection(table);
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
    insert(table, data) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('CONNECTION_ERROR'));
            }
            else {
                try {
                    let collection = this.database.collection(table);
                    collection.insertOne(data)
                        .then(data => resolve(data))
                        .catch(err => reject(err));
                } catch (err) {
                    reject(err);
                }
                
            }
        });
    }
    update(table, query, values) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('CONNECTION_ERROR'));
            } else {
                try {
                    let collection = this.database.collection(table);
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
    delete(table, query) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('CONNECTION_ERROR'));
            } else {
                try {
                    let collection = this.database.collection(table);
                    let result = collection.deleteMany(query, (err, data) => {
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
}


module.exports = new DataBase;
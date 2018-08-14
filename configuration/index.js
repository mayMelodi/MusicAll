module.exports = {
    server: {
        name: 'MusicAll',
        port: 3000
    },
    mongoData: {
        url: "ds263571.mlab.com",
        port: 63571,
        db: 'musicall',
        username: 'root',
        password: 'MDB1234'
    },
    authentication: {
        secret: 'MusicForAllThePPL',
        algo: 'sha256'
    }
}
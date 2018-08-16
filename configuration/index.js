module.exports = {
    server: {
        name: 'MusicAll',
        port: 80
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
    },
    youtube: {
        installed: {
            client_id: "478702066109-cpc189i5gheck0h6qr1e7rl55drq3i3a.apps.googleusercontent.com",
            project_id: "decisive-scion-211811",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://www.googleapis.com/oauth2/v3/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_secret: "sZkbMwM-9uSiUnO47ttGgO4l",
            redirect_uris: ["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
        }
    }
}
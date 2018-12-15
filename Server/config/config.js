var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'WeddingApp'
        },
        port: 5000,
        db: 'mongodb://127.0.0.1/WeddingApp-dev',
        secret: "cayennedlikedhistreats"

    },
    
    test: {
        root: rootPath,
        app: { name: 'WeddingApp' },
        port: 4000,
        db: 'mongodb://127.0.0.1/WeddingApp-test',
        secret: "cayennedlikedhistreats"

    },

    production: {
        root: rootPath,
        app: { name: 'WeddingApp' },
        port: 80,
        db: 'mongodb://127.0.0.1/WeddingApp',
        secret: "cayennedlikedhistreats"

    }
};

module.exports = config[env];

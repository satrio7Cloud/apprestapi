'use strict';

module.exports = function(app) {
    const myJson = require('./controllers');

    app.route('/')
        .get(myJson.index);
}
'use strict';

module.exports = function(app) {
    const myJson = require('./controllers');

    app.route('/')
        .get(myJson.index);

        app.route('/show')
            .get(myJson.showAllData);

        app.route('/show/:id')
            .get(myJson.showAllByIdData)
}
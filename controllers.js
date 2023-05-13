"use strict";

let response = require('./res');
let connection = require('./connect');

exports.index = function(req, res) {
    response.ok("Application run success", res)
};

// Show data all 
exports.showAllData = function(req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};


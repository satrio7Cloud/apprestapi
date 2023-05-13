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
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};


// showing all data by id

exports.showAllByIdData = function (req, res) {
    const id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function (error, rows, fileds) {
            if(error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};
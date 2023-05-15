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

// add data to database

exports.addData = function(req, res) {
    let id_mahasiswa = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (id_mahasiswa, nim, nama, jurusan) VALUES (?,?,?,?)', 
    [id_mahasiswa, nim, nama, jurusan],
    function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Success add Data!", res);
        }
    });
};

// changes data based on Id

exports.changeData = function(req, res) {
    let id = req.body.id_mahasiswa;
    let id_mahasiswa = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET id_mahasiswa=?, nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
     [id_mahasiswa, nim, nama, jurusan, id],
     function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("Success change data based on ID", res)
        }
    }
 )};

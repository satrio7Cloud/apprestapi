"use strict";

let response = require('./res');
let connection = require('./connect');

exports.index = function(req, res) {
    response.ok("Application run success")
};
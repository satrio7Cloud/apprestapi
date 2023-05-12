let mysql = require('mysql');

// create connected database

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbrestapi"
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Mysql Connected")
})

module.exports = conn;
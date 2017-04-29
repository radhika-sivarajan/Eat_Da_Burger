// MYSQL connection set up, create and exporting
var mysql = require("mysql");

// **************   LOCALHOST connection ************** 
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.error("Connected to : " + connection.threadId);
});

// **************   HEROKU connection ************** 
// var connection = mysql.createPool({
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'b9ecb81df6a0a5',
//     password: '0abf8695',
//     database: 'heroku_d34adf4f865feb9',
//     connectionLimit: 5
// });

// connection.getConnection(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.error("Connected to : " + connection.threadId);
// });

module.exports = connection;
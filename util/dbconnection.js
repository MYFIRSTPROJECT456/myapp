// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'shri',
    database : 'student',
    debug    :  false
});    
module.exports = pool;
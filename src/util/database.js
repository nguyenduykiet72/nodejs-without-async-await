const mysql  = require('mysql2');
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:'node-complete',
    passwordL:'123456789kiet',
});

module.exports = pool.promise();
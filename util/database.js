const mysql = require('mysql2');


const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'printstop',
    password:'deep70'
})

module.exports = pool.promise();
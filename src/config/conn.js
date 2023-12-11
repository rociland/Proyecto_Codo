const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: process.env.DBPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = {
    conn: pool.promise()
};
const mysql = require('mysql/promise');

const connection = mysql.createpool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'sakila',
});

module.exports = connection;
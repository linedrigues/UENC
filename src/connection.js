const mysql = require('mysql2/promise');
console.log(this.mysql);

var mysql2 = require('mysql2');
var connection2 = mysql2.createConnection({
  host     : 'http://br818.teste.website/~uniaoe08',
  user     : 'admin',
  password : 'x2YgWvDNV3bD4uQ',
  database : 'uniaoe08_UENC',
});



const connection = mysql.createPool({
    host: 'http://br818.teste.website/~uniaoe08',
    port: 3306,
    user: 'admin',
    password: 'x2YgWvDNV3bD4uQ',
    database: 'uniaoe08_UENC',
});
console.log(this.connection);
module.exports = connection;
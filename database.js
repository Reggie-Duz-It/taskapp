
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'database-1.csxl7q0hnhab.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'j9g5RAGt7n37XpK8S1rl',
    database: 'Task_Manager'
});


/*
const mysql = require('mysql2');
const dbConfig = require("../config/db.config.js")

var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
*/

/*
function keepAlive() { 
    pool.getConnection(function(err, connection){
      if(err) { console.error('mysql keepAlive err', err); return; }
      console.log('ping db')
      connection.ping();     // this is what you want
      connection.release();
    });
  }
  setInterval(keepAlive, 1000);
*/


conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});


module.exports = conn;
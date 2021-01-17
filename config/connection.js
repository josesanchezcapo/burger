var mysql = require("mysql");
var connection;

if(process.env.JAWSOB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else
{
  connection =mysql.createConnection({
    host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "sfau1efsruujbzck",
    password: "z04fj23w29difwz7",
    database: "kkwi64n1pic92l0y"
  })
}
/*var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sql01!!??",
  database: "burgers_db"
});
*/


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.connect();
module.exports = connection;
//setup MYSQL connection
const mysql = require("mysql");

// const connection = mysql.createConnection({
//   //need to check initialized connection
//   //using local and need to get a global
//   //check proceess.env
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Daphne77",
//   database: "burgers_db",
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.eventNames.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Daphne77",
    database: "burgers_db",
  });
}

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for ORM
module.exports = connection;

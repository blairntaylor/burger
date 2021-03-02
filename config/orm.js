// Import (require) `connection.js` into `orm.js`
const connection = require("./connection.js");

//In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//print ??
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


//  * `selectAll()` -- read
const orm = {
    all(table, cb){
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
    //  * `insertOne()` -- create
    create(table, cols, vals, cb){
        const queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        });
    }
    //  * `updateOne()` -- update
    update(table, cols, vals, cb){
        const queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(cols);
        queryString += ' WHERE ';
        queryString += vals;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result)
        });
    };

};


// Export the ORM object in `module.exports`.
module.exports = orm;

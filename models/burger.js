// Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js");

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//selectAll, insert, update
// Export at the end of the `burger.js` file.
const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  insertOne(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },
  updateOne(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;

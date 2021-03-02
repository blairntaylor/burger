// Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js");

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//selectAll, insert, update
// Export at the end of the `burger.js` file.
const burger = {
  all(cb) {
    orm.all('burgers', (res) => cb(res));
  },
  create(cols, vals, cb){
      orm.create('burgers', cols, vals, (res) => cb(res)s)
  },
  update(objColVals, condition, cb){
      orm.update('burgers', objColVals, condition, (res) => cb(res))
  }
};

module.exports = burger;
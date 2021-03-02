// import the following: Express and `burger.js`
const express = require("express");
const router = express.Router();
//import the model burger.js
const burger = require("../models/burger.js");

//routes
router.get("/", (req, res) => {
  cat.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Create the `router` for the app, and export the `router` at the end of your file.
module.exports = router;

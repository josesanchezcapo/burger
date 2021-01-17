// Import dependencies
var express = require("express"); 
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition;

  burger.updateOne(condition,req.params.id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end(); // if id don't exists
    } else {
      res.status(200).end(); // Okay
    }
  });
});

// Export routes
module.exports = router;

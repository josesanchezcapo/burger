var orm = require("../config/orm.js");

var burger = {
    selectAll: function(valOfCol) {
        orm.selectAll("burgers", function(res) {
          valOfCol(res);
        });
      },
      insertOne: function( col, valOfCol) {
          orm.insertOne("burgers", col, valOfCol, function(res) {
          valOfCol(res);
        });
      },
      updateOne: function(col , condition, valOfCol) {
        orm.updateOne("burgers", col , condition, function(res) {
          valOfCol(res);
        });
      },
    };
  
  module.exports = burger;
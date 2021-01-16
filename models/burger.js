var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (value, cb) {
        orm.insertOne("burgers", value, function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, id, cb) {
        condition = "devoured = true"
        orm.updateOne("burgers", condition, id, function (res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;

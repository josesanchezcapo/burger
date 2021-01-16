var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function (tableInput, valOfCol) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            valOfCol(result);
        });
    },
    insertOne: function (tableInput, col, valOfCol) {
        var queryString = "INSERT INTO " + tableInput + "(" + col + ") VALUES (" + valOfCol + ");";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            valOfCol(result);
        });
    },
    updateOne: function (tableInput, col, condition, valOfCol) {
        var queryString = "UPDATE " + tableInput + " SET " + col + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            valOfCol(result);
        });
    }
};

module.exports = orm;
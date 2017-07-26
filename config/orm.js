var connection = require('./connection');

var tablename = "burgers";

var orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM " + tablename, function(err, result) {
            if (err) throw err;

            callback(result)
        })
    },
    insertOne: function(burg, callback) {
        var i = "INSERT INTO " + tablename + " (burger_name, date) VALUES (?, NOW())";

        connection.query(i, burg.name, function(results) {
            callback(results);
        })
    },
    updateOne: function(burg, callback) {
        //var u = "UPDATE " + tablename + " SET "
    }
}

module.exports = orm;
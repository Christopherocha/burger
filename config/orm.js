var connection = require('./connection');

var tablename = "burgers";

var orm = {
    all: function(callback) {
        connection.query("SELECT * FROM " + tablename, function(err, res) {
            if (err) throw err;

            callback(res)
        })
    },
    insert: function(burg, callback) {
        var i = "INSERT INTO " + tablename + " (burger_name, date) VALUES (?, ?)";

        connection.query(i, [burg.name, 'NOW()'], function(err, res) {
            if (err) throw err;

            callback(res);
        })
    },
    update: function(id, callback) {
        var u = "UPDATE burgers SET devoured = true WHERE id = ?"
        
        connection.query(u, id, function(err, res) {
            if (err) throw err;

            callback(res)
        })
    },
    delete: function(id, callback) {
        var d = "DELETE FROM " + tablename + " WHERE ID= ?"

        connection.query(d, id, function(err, res){
            if (err) throw err;

            callback(res)
        })
    }
}

module.exports = orm;
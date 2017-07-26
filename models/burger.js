var orm = require('./../config/orm');

var burger = {
    all: function(data) {
        orm.selectAll(function(res) {

        })
    },
    create: function(burger, cb) {
        orm.insertOne(burger, function(res) {
            cb(res);
        })
    },
    update: function(burger, cb) {
        orm.updateOne(burger, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;
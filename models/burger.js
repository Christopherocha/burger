var orm = require('./../config/orm');

var burger = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res)
        })
    },
    create: function(burger, cb) {
        orm.insert(burger, function(res) {
            cb(res);
        })
    },
    update: function(id, cb) {
        orm.update(id, function(res) {
            cb(res);
        })
    },
    delete: function(id, cb) {
        orm.delete(id, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;
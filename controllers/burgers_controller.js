var express = require("express");
var burger = require("./../models/burger");

var router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("../views/index", hbsObject);
    })
})

router.post('/', function(req, res) {
    burger.create(req.body, function() {
        res.redirect('/');
    })
})

router.put("/", function(req, res) {
    burger.updateOne(req.body, function() {
        res.redirect('/');
    })
})

module.exports = router;
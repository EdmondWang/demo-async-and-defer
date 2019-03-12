var express = require('express');
var router = express.Router();

var cars = [{
  "name": "Honda Accord",
  "image": "/images/honda-accord-2007-black.jpg"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cars: cars });
});

module.exports = router;

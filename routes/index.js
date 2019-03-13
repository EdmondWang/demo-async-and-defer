var express = require('express');
var router = express.Router();

var cars = [{
  "name": "Honda Accord",
  "image": "/images/honda-accord-2007-black.jpg"
}, {
  "name": "BMW 3",
  "image": "/images/bmw3.png"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cars: cars });
});

module.exports = router;

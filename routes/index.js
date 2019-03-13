var express = require('express');
var router = express.Router();

var cars = [{
  "name": "Honda Accord",
  "image": "/images/honda-accord-2007-black.jpg"
}, {
  "name": "BMW 3",
  "image": "/images/bmw3.png"
}];

var dummylist = [];
for (var i = 0; i < 10000; i++) {
  dummylist.push({
    name: 'Auto #' + i,
    code: '&#' + i + ';'
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cars: cars, dummylist: dummylist });
});

module.exports = router;

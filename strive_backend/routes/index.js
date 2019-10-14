var express = require('express');
var router = express.Router();
const quotes = require('../models/quotes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendStatus(200);
});


//GET a single quote each time we login
router.get('/quote', function (req, res, next) {
  var rand_id = Math.floor(Math.random() * 51) + 1;
  quotes.Quote.findOne({ where: { id: rand_id } }).then(quote => {
    res.json(quote);
  })
});


//register
router.post('/register', function (req, res, next) {
  console.log(req.body);
  // users.User.create({
  //     first_name: request.body.first_name,
  //     last_name: request.body.last_name,
  //     email: request.body.email,
  //     username: request.body.username,
  //     password: request.body.password
  // })
  //     .then(() => {
  //         res.sendStatus(201).end()
  //     });
});

module.exports = router;


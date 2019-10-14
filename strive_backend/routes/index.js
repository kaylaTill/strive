var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const quotes = require('../models/quotes.js');
const users = require('../models/users.js');

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


//register=> post new user
router.post('/register', function (req, res, next) {
  users.User.findAll({ 
    where: Sequelize.or(
      {email: req.body.email},
      {username: req.body.first_name}
    )
  })
  .then((results) => {
    if (results.length === 0) {
      users.User.create({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password
      })
    }
  })
  .then((response) => {
    response.sendStatus(201).end()
  })
  .catch((err) => {
    res.send('Sorry UserName or Email is already taken!, Try Loging in!');
  });
});

module.exports = router;
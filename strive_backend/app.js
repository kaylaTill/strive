var express = require('express');
var path = require('path');
// var session = require('express-session')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var registerRouter = require('./routes/register');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../strive_frontend/dist/')));

app.use('/', indexRouter);
app.use('/register', indexRouter);
app.use('/login', indexRouter);


app.listen(3000)


module.exports = app;

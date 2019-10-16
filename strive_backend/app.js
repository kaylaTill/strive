var express = require('express');
var path = require('path');
var session = require('express-session')
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const secret = '_my_Secret_String_394324';

var app = express();
app.use(logger('dev'));
app.use(session({
    secret: secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 3600000
    }
}));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../strive_frontend/dist/')));

app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/register', indexRouter);
app.use('/login', indexRouter);
app.use('/quote', indexRouter);
app.use('/home', indexRouter);
app.use('/dashboard', indexRouter);





app.listen(3000)

module.exports = app;

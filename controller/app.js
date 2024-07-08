var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var { MongoInit, MongoTerminate } = require('./model/index');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

MongoInit();
process.on('SIGINT', MongoTerminate)
process.on('SIGTERM', MongoTerminate)
process.on('SIGQUIT', MongoTerminate)

module.exports = app;

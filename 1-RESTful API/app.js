var express = require('express');
var app = express();
var db = require('./db'); // link to Database
var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
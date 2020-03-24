var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var usersRouter = require('./routes/users').default;
var projectsRouter = require('./routes/projects').default;

let namespace = 'api';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(`/${namespace}/users`, usersRouter);
app.use(`/${namespace}/projects`, projectsRouter);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

module.exports = app;

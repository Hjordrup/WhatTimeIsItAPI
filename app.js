const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const connectDB = require('./db/connect');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dateRouter = require('./routes/dato');
const timeRouter = require('./routes/klokkeslet');
const timeGrafikRouter = require('./routes/time');
const alarmRouter = require('./routes/alarm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dato', dateRouter);
app.use('/klokkeslet', timeRouter);
app.use('/time', timeGrafikRouter);
app.use('/alarm', alarmRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let start = () => {
  try {
    connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var config = require('./configs/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/'+config.database);
mongoose.connection.once('open', ()=> {
  console.log('connect successfully');
}).on('error', (error)=>{
  console.log(error);
});

app.use('/api/v1', require("./routes/index"));


var ItemModel = require("./schemas/items");

var datas = new ItemModel({
  name: 'NNPTUNGM',
  status: '1',
  ordering: '1',
  created: {
    userId: '1',
    userName: 'MinhCo',
    createdAt: Date.now()
  },
  modified: {
    userId: '1',
    userName: 'MinhCo',
    modifiedAt: Date.now(),
  }
});

// const result = datas.save() // Make sure to wrap this code in an async function
// console.log(result);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

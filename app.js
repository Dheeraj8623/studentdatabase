var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let studentRouter=require('./routes/student.routes');
let authRouter= require('./routes/auth.routes');
let  checktoken= require('./middelware/checktoken.middelware')
let locationRouter =require('./routes/location.routes')
let InstituteRouter=require('./routes/Instiute.routes ')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', authRouter);
app.use('/', indexRouter);
app.use('/student',studentRouter);
app.use('/location',locationRouter);
app.use('/institute',InstituteRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

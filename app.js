var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Scroll animation
// var ScrollAnim = require('rc-scroll-anim');
// var ScrollOverPack = ScrollAnim.OverPack;
// var React = require('react');

// React.render(<ScrollOverPack>
//   <QueueAnim key='queueAnim'>
//     <div key='a'>enter</div>
//     <div key='b'>enter</div>
//     <div key='b'>enter</div>
//   </QueueAnim>
//   <TweenOne key='tweenOne' vars={{x:100}}>one element</TweenOne>
//   <Animate key='rc-animate' transitionName="fade" transitionAppear>rc-animate</Animate>
// </ScrollOverPack>, container);

// var ScrollParallax = ScrollAnim.Parallax;
// React.render(<ScrollParallax animation={{x:100}}>Parallax</ScrollParallax>,container);

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
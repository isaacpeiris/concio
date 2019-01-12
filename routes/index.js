var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

router.get('/services', function(req, res, next) {
  res.render('pages/services');
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact');
});

router.get('/terms', function(req, res, next) {
  res.render('pages/terms');
});

router.get('/privacy', function(req, res, next) {
  res.render('pages/privacy');
});

module.exports = router;
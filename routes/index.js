var express = require('express');
var router = express.Router();

// index

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Concio Group' });
});

// pages

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'Concio Group | About Us' });
});

router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Concio Group | Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Concio Group | Contact Us' });
});

router.get('/terms', function(req, res, next) {
  res.render('pages/terms', { title: 'Concio Group | Terms' });
});

router.get('/privacy', function(req, res, next) {
  res.render('pages/privacy', { title: 'Concio Group | Privacy' });
});

// passion projects

router.get('/resources/mental-health', function(req, res, next) {
  res.render('pages/passion-projects/mental-health-resources', { title: 'Concio Group | Mental Health Resources' });
});

// events

router.get('/workshops/mental-health', function(req, res, next) {
  res.render('pages/events/mental-health-workshop', { title: 'Concio Group | Mental Health Resources' });
});

// other

router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Concio Group | Login' });
});

router.get('/thankyou', function(req, res, next) {
  res.render('pages/thankyou', { title: 'Concio Group | Toolkit' });
});

module.exports = router;
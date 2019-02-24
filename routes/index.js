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

// resources

router.get('/resources/mental-health', function(req, res, next) {
  res.render('pages/resources/mental-health-resources', { title: 'Concio Group | Mental Health Resources' });
});

// blog

router.get('/blog/social-enterprise', function(req, res, next) {
  res.render('blog/social-enterprise', { title: 'Concio Group' });
});

// other

router.get('/thankyou', function(req, res, next) {
  res.render('pages/thankyou', { title: 'Concio Group | Thank You' });
});

// // FORM

const axios = require('axios');

//Add header to all axios requests
axios.defaults.headers.common['Content-type'] = 'application/json';

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        company: req.body.company,
        phone: req.body.phone,
        email: req.body.email,
    };

    // Send Slack message to team
    axios.post('https://hooks.slack.com/services/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',
        {
            "text": "New contact from the website 🔥",
            "attachments": [
                {
                    "fields": [
                        {
                            "title": "First Name",
                            "value": user.firstname,
                            "short": false
                        },
                        {
                            "title": "Last Name",
                            "value": user.lastname,
                            "short": false
                        },
                        {
                            "title": "Company",
                            "value": user.company,
                            "short": false
                        },
                        {
                            "title": "Phone",
                            "value": user.phone,
                            "short": false
                        },
                        {
                            "title": "Email",
                            "value": user.email,
                            "short": false
                        }
                    ]
                }
            ]
        })
        .then(res => {

        })
        .catch(err => {
            throw new Error(err);
        });


    res.redirect('/thankyou');
});

module.exports = router;
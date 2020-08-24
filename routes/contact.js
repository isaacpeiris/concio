const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const flash = require('connect-flash');
const axios = require('axios').default;

//Add header to all axios requests
axios.defaults.headers.common['Content-type'] = 'application/json';

router.get('/', (req, res) => {
    res.render('contact');
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
            "text": "New Concio contact 🔥",
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
        .catch(err => {
            throw new Error(err);
        });
        res.redirect('/thankyou');
});

module.exports = router;
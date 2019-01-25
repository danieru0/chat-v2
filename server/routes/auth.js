const User = require('../models/user');
const jwt = require('jsonwebtoken');
const withAuth = require('../middlewares/withAuth');
const secret = require('../config/secret');

module.exports = function(app) {

    app.post('/api/register', function(req, res) {
        const { username, password } = req.body;
        const user = new User({ username, password });
        user.save(err => {
            if (err) {
                res.status(500).send("something went wrong");
            } else {
                res.status(200).send('User registered!');
            }
        })
    });

    app.post('/api/login', function(req, res) {
        const { username, password } = req.body;
        User.findOne({ username }, function(err, user) {
            if (err) {
                console.log(err);
                res.status(500).send('something went wrong');
            } else if (!user) {
                res.status(401).send('Incorrect email or password');
            } else {
                user.isCorrectPassword(password, function(err, same) {
                    if (err) {
                        res.status(500).send('something went wrong');
                    } else if (!same) {
                        res.status(401).send('Incorrect email or password');
                    } else {
                        const payload = { username };
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '1h'
                        });
                        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                    }
                });
            }
        });
    });

    app.get('/api/checkToken', withAuth, function(req, res) {
        res.sendStatus(200);
    });
}
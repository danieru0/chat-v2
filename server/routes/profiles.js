const User = require('../models/user');

const withAuth = require('../middlewares/withAuth');

module.exports = function(app, upload) {

    app.get('/api/profiles', withAuth, function(req, res) {
        if (Object.keys(req.query).length === 0) {
            User.find().select('-password').exec(function(err, profiles) {
                if (err) {
                    console.log(err);
                    res.status(500).send('something went wrong');
                } else {
                    res.status(200).send({profiles: profiles});
                }
            });
        } else {
            if (req.query.specific == 'true') {
                User.find(
                    { "username": req.query.nick }
                ).select('-password').exec(function(err, profiles) {
                    if (err) {
                        console.log(err);
                        res.status(500).send('something went wrong');
                    } else {
                        res.status(200).send({profiles: profiles, username: req.username});
                    }
                })
            } else {
                User.find(
                    { "username": { "$regex": req.query.nick, "$options": "i" } }
                ).select('-password').exec(function(err, profiles) {
                    if (err) {
                        console.log(err);
                        res.status(500).send('something went wrong');
                    } else {
                        res.status(200).send({profiles: profiles, username: req.username});
                    }
                });
            }
        }
    });

    app.post('/api/profiles/uploadAvatar', withAuth, upload.single('avatar'), function(req, res) {
        User.findOneAndUpdate({ "username": req.username }, { $set: { "avatar": `/avatars/${req.username}.png` } }, function(err, result) {
            console.log(result);
        })
    });
}
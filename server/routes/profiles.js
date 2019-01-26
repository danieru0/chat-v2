const User = require('../models/user');

module.exports = function(app) {

    app.get('/api/profiles', function(req, res) {
        //console.log(req.query.nick);
        if (Object.keys(req.query).length === 0) {
            User.find().select('-password').exec(function(err, profiles) {
                if (err) {
                    console.log(err);
                    res.status(500).send('something went wrong');
                } else {
                    res.status(200).send(profiles);
                }
            });
        } else {
            User.find(
                { "username": { "$regex": req.query.nick, "$options": "i" } }
            ).select('-password').exec(function(err, profiles) {
                if (err) {
                    console.log(err);
                    res.status(500).send('something went wrong');
                } else {
                    res.status(200).send(profiles);
                }
            });
        }
    });
}
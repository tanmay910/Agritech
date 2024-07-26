
exports.getwelcome = (req, res) => {
    res.render('welcome', {
        title: 'Welcome'
    });
    }


    exports.getprofile = (req, res) => {
        res.render('profile', {
            title: 'profile'
        });
        }
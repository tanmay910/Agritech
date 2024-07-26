
exports.getwelcome = (req, res) => {
    res.render('tabs/welcome', {
        title: 'Welcome'
    });
    }


    exports.getprofile = (req, res) => {
        res.render('tabs/profile', {
            title: 'profile'
        });
        }
exports.getwelcome = (req, res) => {
    res.render('tabs/welcome', {
        title: 'Welcome'
    });
}

exports.submit = (req, res) => {
    const { username, password } = req.body;

    const feedItems = [
        "This is the first feed item.",
        "Here's another interesting post.",
        "And one more for good measure!"
    ];
    

    if (req.url == '/farmer-submit') {
        if (password == "logme@1234") {
            const person = 'farmer';
            res.render('tabs/feed', {
                username: username,
                person: person,
                feedItems: feedItems
            })
        }
        else
            res.redirect('/farmer-login?error=true');
    }

    if (req.url == '/trader-submit') {
        if (password == "logme@1234") {
            const person = 'trader';
            res.render('tabs/feed', {
                username: username,
                person: person,
                feedItems: feedItems
            })
        }
        else
            res.redirect('/trader-login?error=true');
    }

}
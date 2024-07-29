module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.session.user) {
        console.log('hh');
        return next();
      }
      res.redirect('/node/login');
    }
  };
  
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Register Route
router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    let user = new User({ username, password, role });
    await user.save();
    res.redirect('/node/login');
  } catch (err) {
    console.error(err);
    res.redirect('/node/register');
  }
});

// Login Route
router.get('/login', (req, res) => res.render('login'));

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.redirect('/node/login');
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.redirect('/node/login');
    }
    req.session.user = user;
    console.log(req.session.user);
    console.log('hello');
    res.redirect('/node/feed');
  } catch (err) {
    console.error(err);
    res.redirect('/node/login');
  }
});

// Logout Route
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/node/login');
});

module.exports = router;

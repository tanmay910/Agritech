const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { ensureAuthenticated } = require('../config/auth');

// Create Post (Trader)
router.get('/create', ensureAuthenticated, (req, res) => res.render('createPost'));

router.post('/create', ensureAuthenticated, async (req, res) => {
  const { title, description, quantity, contactInfo } = req.body;
  try {
    let post = new Post({
      title,
      description,
      quantity,
      contactInfo,
      postedBy: req.session.user._id
    });
    await post.save();
    res.redirect('/node/feed');
  } catch (err) {
    console.error(err);
    res.redirect('/node/create');
  }
});

// View Feed
router.get('/feed', ensureAuthenticated, async (req, res) => {
    console.log('heaf')
    console.log(req.session.user);

  try {
    console.log(req.session.user);
    const posts = await Post.find().populate('postedBy', 'username');
    res.render('feed', { posts, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.redirect('/node/');
  }
});

// Express Interest (Farmer)
router.post('/interested/:id', ensureAuthenticated, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    post.interestedFarmers.push(req.session.user._id);
    await post.save();
    res.redirect('/node/feed');
  } catch (err) {
    console.error(err);
    res.redirect('/node/feed');
  }
});

// Trader's Posts and Interested Farmers
router.get('/traderPosts', ensureAuthenticated, async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: req.session.user._id }).populate('interestedFarmers', 'username');
    res.render('traderPosts', { posts });
  } catch (err) {
    console.error(err);
    res.redirect('/node/');
  }
});

// Farmer's Interests
router.get('/farmerInterests', ensureAuthenticated, async (req, res) => {
  try {
    const posts = await Post.find({ interestedFarmers: req.session.user._id }).populate('postedBy', 'username');
    res.render('farmerInterests', { posts });
  } catch (err) {
    console.error(err);
    res.redirect('/node/');
  }
});

module.exports = router;

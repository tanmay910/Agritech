exports.getwelcome = (req, res) => {
    res.render('tabs/welcome', {
        title: 'Welcome'
    });
}

exports.submit = (req, res) => {
    const { username, password } = req.body;
  
    if (req.url == '/farmer-submit') {
      if (password == "logme@1234") {
        const person = 'farmer';
        res.redirect(`/feed?username=${username}&person=${person}`);
      } else {
        res.redirect('/farmer-login?error=true');
      }
    }
  
    if (req.url == '/trader-submit') {
      if (password == "logme@1234") {
        const person = 'trader';
        res.redirect(`/feed?username=${username}&person=${person}`);
      } else {
        res.redirect('/trader-login?error=true');
      }
    }
  };



// const Post = require('../models/Post');

// exports.getFeed = async (req, res) => {
//   const { username, person } = req.query;
//   try {
//     const posts = await Post.find().sort('-createdAt');
//     res.render('tabs/feed', { 
//       username,
//       person,
//       posts
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred');
//   }
// };

// exports.createPost = async (req, res) => {
//   const { username, person, content } = req.body;
//   try {
//     const newPost = new Post({
//       author: username,
//       content
//     });
//     await newPost.save();
//     res.redirect(`/feed?username=${username}&person=${person}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred');
//   }
// };

// exports.addBid = async (req, res) => {
//   const { username, person, postId, quantity, goods, contactDetails } = req.body;
//   try {
//     await Post.findByIdAndUpdate(postId, {
//       $push: {
//         bids: {
//           trader: username,
//           quantity,
//           goods,
//           contactDetails
//         }
//       }
//     });
//     res.redirect(`/feed?username=${username}&person=${person}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred');
//   }
// };

// exports.showInterest = async (req, res) => {
//   const { username, person, postId } = req.body;
//   try {
//     await Post.findByIdAndUpdate(postId, {
//       $addToSet: { interestedFarmers: username }
//     });
//     res.redirect(`/feed?username=${username}&person=${person}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred');
//   }
// };
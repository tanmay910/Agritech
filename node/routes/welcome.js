const router = require('express').Router();
const userController = require('../controllers/welcome');


router.get('/welcome', userController.getwelcome);
router.get('/profile', userController.getprofile);

router.use('/farmer-login',(req,res)=>{
    res.render('tabs/farmer-login');
})

router.use('/trader-login',(req,res)=>{
    res.render('tabs/trader-login');
})

router.get('/feed', (req, res) => {
    const feedItems = [
        "This is the first feed item.",
        "Here's another interesting post.",
        "And one more for good measure!"
    ];
    
    res.render('tabs/feed', { feedItems: feedItems });
});

module.exports = router;
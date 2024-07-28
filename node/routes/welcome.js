const router = require('express').Router();
const userController = require('../controllers/welcome');


router.get('/welcome', userController.getwelcome);

router.use('/farmer-login',(req,res)=>{
    res.render('tabs/farmer-login');
})

router.use('/trader-login',(req,res)=>{
    res.render('tabs/trader-login');
})

router.post('/farmer-submit',userController.submit);
router.post('/trader-submit',userController.submit);

module.exports = router;
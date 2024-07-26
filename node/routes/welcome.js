const router = require('express').Router();
const userController = require('../controllers/welcome');


router.get('/welcome', userController.getwelcome);
router.get('/profile', userController.getprofile);

module.exports = router;
const router = require('express').Router();
const { register } = require('../controllers/authController');
const upload = require('./upload');

router.post('/register', upload.single('profile_image'), register);

module.exports = router;

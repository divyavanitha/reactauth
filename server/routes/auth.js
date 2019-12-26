var express = require('express');
const auth = require("../middlewares/auth");

var router = express.Router();

const authController = require('../controllers/auth');

router.post('/login', authController.login);

router.post('/register', authController.register);

module.exports = router;
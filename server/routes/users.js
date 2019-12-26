var express = require('express');
const auth = require("../middlewares/auth");

var router = express.Router();

const userController = require('../controllers/user');

router.get('/', auth, userController.index);

router.delete('/:id', auth, userController.delete);


module.exports = router;
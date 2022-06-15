const express = require('express');

const controller = require('../controller/admin');

const router = express.Router();

router.post('/sign-up', controller.postSignUp);

module.exports = router;
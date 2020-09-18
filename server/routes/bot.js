'use strict';
/* jshint node: true */
const express = require('express');
const router = express.Router();
const Bot = require('../bots/pinkyBot');

router.get('/start', Bot.pinkyStart);
router.get('/talk', Bot.pinkyTalk);

module.exports = router;

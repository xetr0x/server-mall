const { Router } = require('express');
var express = require('express');
var router = express.Router();

var indexController = require('../controller/Indexcontroller.js');

router.get('/', indexController.index);

module.exports = router;
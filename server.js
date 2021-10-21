'use strict'

const express = require('express');
const router = require('./routes/indexRouter.js');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.use('/', router);

app.listen(port)
console.log('its alive')

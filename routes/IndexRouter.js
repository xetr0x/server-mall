var express = require('express'); //ber om att hämta expressen                      
var router = express.Router();          //hämtar expressens router moduler till variabeln router

var indexController = require('../controller/Indexcontroller.js');          //ber om pathen till indexcontroller.js och lägger den i variabeln indexcontroller

router.get('/', indexController.index);                 //med hjälp av router variabeln ber vi att använda oss av indexcontroller inre function som är index när sidan är på /

module.exports = router;                                //module exporteras så  att router can nås till andra filer. 
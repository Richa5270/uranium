const express = require('express');
const loggerModule = require('../logger/logger')
const helperModule = require('../util/helper')
const formatterModule = require('../Validator/formatter')
const lodashModule = require('../lodash/lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.Massage()
    helperModule.printTodayDate()
    helperModule.printCurrentMonth()
    helperModule.printBatchInfo()
    formatterModule.trimMassage()
    formatterModule.changeMassage()
    formatterModule.changeUpMassage()
    res.send('My first ever api!')

});

router.get('/Hello', function(req, res){
    lodashModule.chunkFunctions()
    lodashModule.tailFunctions()
    lodashModule.unionFunctions()
    lodashModule.pairsFunctions()
    res.send('This is a hello part')
});

module.exports = router;
// adding this comment for no reason
const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const distric=require("../controllers/Distric")
const getWeatherofLondon = require("../controllers/weathercollection")
const getmemes=require("../controllers/axiospost")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", distric.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)


router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getdistrictVaccin", distric.getdistrictVaccin)
router.get("/getWeatherofLondon", getWeatherofLondon.getWeatherofLondon)
router.get("/getTemperature", getWeatherofLondon.getTemperature)
router.get("/getSortTemp",getWeatherofLondon.getSortTemp)
router.post("/getmemes",getmemes.getmemes)

module.exports = router;
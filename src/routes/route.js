const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.post('/post-API', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send( { msg: "My first ever API response in JSON !!"} )
});


const postapi=require('../players/postapi')
router.post('/play', postapi.postApi);



/*const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER*/



module.exports = router;

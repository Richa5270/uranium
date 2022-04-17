const { application } = require('express');
const express = require('express');

const router = express.Router();
/// solution 1
//-write an api which gives the missing number in an array of integers starting from 1.... .e.g [1,2,3,5,6,7]: 4 is missing
router.get('/soll', function (req, res) {

   // logic : sum of numbers is navigator(n+1)/2..so get sum of all number of all numbers in array.now take sum of numbers till last digit in the array
     
    let arr = [1,2,3,5,6,7] 

    let total = 0;

    for(var i in arr) {
        total +=arr [i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit+1) / 2
    let missingNumber = consecutiveSum - total


    res.send( { data: missingNumber } );
});

//solution 2
//-write an api which gives the missing number in an array of integers starting from anywhere ... .e.g [33, 34, 35, 37, 38] : 36 is missing
router.get ("/sol2", function (req, res){
    //logic : sum of n consecutive numbers is [n * (first + last) / 2] .. so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33,34,35,37,38]
    let len = arr.length

    let total = 0;
    for(var i in arr){
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum=(len +1) * (firstDigit + lastDigit)/2
    let missingNumber=consecutiveSum - total

    res.send ( { data: missingNumber } );
});

//solution 1

router.get('/movies', function (req, res) {
        let movielist = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(movielist)
});
 
//solution 2
router.get('/movies/:indexNumber', function (req, res) {

    let movieName = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    let i = req.params.indexNumber;
    if(i>movieName.length-1){
        res.send("value is above than index number")
    }
    else{
        res.send(movieName[i])
    }

});

// solution 3
router.get('/films', function (req, res) {
    let movieObject = [{id:1, name:"The Shining"},{id:2, name:"Incendies"},{id:3, name:"Rang de basanti"},{id:4, name:"Finding Nemo"}]

    res.send(movieObject)
});

// solution 4
router.get('/films/:filmId', function (req, res) {
    const filmId = req.params.filmId

    let obj=[{id:1, name: "Maa Saraswati"},{id:2, name:"Maa ganga"},{id:3, name:"3idiot"},{id:4,name:"arakshan"}]

    for(let i=0;i<obj.length;i++){
        if(obj[i].id==filmId){
            res.send(obj[i])
            break
        }
    }

    res.send( "no data match")
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});



router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});



const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER



module.exports = router;

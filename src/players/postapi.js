let postarr =function(req, res){
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
 
  // router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HER
      // res.send(  { data: players , status: true }  )
   //})
  let a =req.body.name
for(let i=0; i<players.length;i++){
    if(players[i].name=== a){
        res.send("user name alreadyexist")
        break;
    }
}

    players.push(req.body)
    res.send(players)
} 
module.exports.postApi = postarr;
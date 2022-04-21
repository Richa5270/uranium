const { headers } = require("express/lib/request")


const mid1= function ( req, res, next) {
        console.log("Hi I am a User")
    // logic
    let user = req.body
    let headers = req.headers
    let abc = headers['isFreeAppUser']
    if(!abc){
        abc = headers['isfreeappuser']
    }
    let abcFree = false
       //let loggedIn = false
    
       if (abcFree == true) {
           abc = true 
           console.log("OK LOGGED in TRUE NOW")
           next ()
         }
       else {
            res.send ({status:false, msg:"Please login or register"})
        }
     }

module.exports.mid1= mid1

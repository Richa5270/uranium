const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const MiddleWare = function (req, res, next) {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + " "
    + (currentdate.getMonth()+1) +" "
    + currentdate.getFullYear() + " " 
    + currentdate.getHours() +" "
    +currentdate.getMinutes() + ":" 
     +currentdate.getSeconds();
    let ip = req.ip
    let url = req.originalUrl
    console.log(datetime+","+ip+","+url)

    next()
}

app.use(MiddleWare)




mongoose.connect("mongodb+srv://FunctionUP:pj4Q7t49hhC0cAxi@cluster0.giu4q.mongodb.net/Richa5270?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )





app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    
    console.log('Express app running on port ' + (process.env.PORT || 3000)) 
});

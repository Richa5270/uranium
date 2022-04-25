let axios = require("axios")

/*- get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)*/

//solution 1
let getWeatherofLondon = async function (req, res) {
    try {
        let cityname = req.query.q
        let apikey = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey} `
        }
        let result = await axios(options);
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.massage })
    }

}




//then change the above to get the temperature only( of London)
//solution 2
let getTemperature = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let tempCities = [];
        for (i = 0; i < cities.length; i++) {
            let Obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d4d8d60307b7c562b9da95dbc814dd0b`
            }
            let result = await axios(options)
            Obj.temp = result.data.main.temp
            tempCities.push(Obj)
            console.log(Obj)
            res.status(200).send(Obj)
        }
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

/*Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
result should look something like this  [
{city:"London", temp: 280},
{city:"Moscow", temp: 290},
{city:"Bangalore", temp: 301.2},.......]*/

//solution 3

let getSortTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let tempCities = [];
        for (i = 0; i < cities.length; i++) {
            let Obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d4d8d60307b7c562b9da95dbc814dd0b`
            }
            let result = await axios(options)
            Obj.temp = result.data.main.temp
            tempCities.push(Obj)
            console.log(Obj)
        }
        let sortByTemp = tempCities.sort(function (a, b) { return a.temprature - b.temprature})
        res.status(200).send({ data: sortByTemp})
    }catch (err) {
    res.status(500).send({ Error: err.message })
}
}



module.exports.getWeatherofLondon = getWeatherofLondon
module.exports.getTemperature = getTemperature
module.exports.getSortTemp=getSortTemp
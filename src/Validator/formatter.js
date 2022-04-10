let Student = 'Richa Sharma'
let trim = function(){
    console.log(Student.trim());
}

let changetoLowercase = function(){
    console.log(Student.toLowerCase())
}

let changetoUpperCase = function(){
    console.log(Student.toUpperCase())
}

module.exports.trimMassage = trim
module.exports.changeMassage = changetoLowercase
module.exports.changeUpMassage = changetoUpperCase


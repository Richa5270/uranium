const lodash = require('lodash')

const chunkFunction = ()=>{
    const months = ['January','February','March','April','May','June',
'July','August','September','Octuber','November','December']
console.log('The result after splitting the months array is :', lodash.chunk(months,3));
}

const tailFunction=()=>{
    const arr=[1,3,5,7,9,11,13,15,17,19]
    console.log('The last 9 odd number in the array are: ', lodash.tail(arr));
}

const unionFunction=()=>{
    let arr1=[1,2,3]
    let arr2=[1,2,3,4,]
    let arr3=[1,2,3,4,5]
    let arr4=[1,2,3,4,5,6]
    let arr5=[1,2,3,4,5,6,7]
    console.log('Fincal array or unique number is : ', lodash.union(arr1,arr2,arr3,arr4,arr5));
}



const pairsFunction=()=>{
    const collection=[['horror','The Shining'],['drama','Titanic'],['thirller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log('The object created from array is :', lodash.fromPairs(collection));
}

module.exports.chunkFunctions=chunkFunction
module.exports.tailFunctions=tailFunction
module.exports.unionFunctions=unionFunction
module.exports.pairsFunctions=pairsFunction

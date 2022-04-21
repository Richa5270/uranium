const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModul = require("../models/orderModel");
const req = require("express/lib/request")


//solution 3
const orderpurcharchase = async function(req, res) {
    let order = req.body
    let headers = req.headers
    let abc = headers['isFreeAppUser']
    if(!abc){
        abc = headers['isfreeappuser']
    } 
    else if(!abc){
        return res.send ({status:false , msg:"The request is missing a mandatory header"})
    }
    let userId = await order.userId
    let user =  userModel.findById(userId) 
    if (!user) {
        return res.send ({status:false, msg:"these validations fail due to user"})
    } 
    let productId = order.productId
    let product = await productModel.findById(productId)
    if(!product){
         return res.send({msg:"these validations fail due to product"})
    }
    let abcFree = false
    if(abc == 'true') {
         abcFree = true
    }

    //Scenario 1
    if(!abcFree && user.balance >= product.price){
        user.balance = user.balance - product.price
        await user.save()
         //senario 2
        order.amount = product.price
        order.isFreeAppUser = false
        let orderCreated = await orderModul.create(order)
        return res.send({status: true, orderCreated})
    }else if(!abcFree) {

        return res.send({status: false, msg:"User dorsnot have"})
        //scenario 3
    } else {
        order.amount = 0
        order.isFreeAppUser = true
        let orderCreated = await orderModul.create(order)
        res.send({status: true, data: orderCreated})
    }
}
 module.exports.orderpurcharchase=orderpurcharchase





 //solution 4


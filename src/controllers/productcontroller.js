const productModel = require("../models/productModel")

//solution:- 1
//Write a POST api to create a product from the product details in request body.

const createAproduct = async function(req, res){
    let productDetails = req.body
    let product = await productModel.create(productDetails)
    console.log(product)
    res.send(productDetails)
};


module.exports.createAproduct=createAproduct
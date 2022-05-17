// import model
const {Product} = require("./../model/product.model")

module.exports.testAPI = (req,res) =>{
    res.json({message: "Backend Message"})
}

module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err=> res.json(err))
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err)=> console.log(err));
};
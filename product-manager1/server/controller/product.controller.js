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

module.exports.oneProduct = (req, res) => {
    console.log(req)
    Product.findOne({_id: req.params.id})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))

}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
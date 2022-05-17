
const ProductController = require("./../controller/product.controller.js")

module.exports = (app) =>{
    app.get("/apitest", ProductController.testAPI)
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products", ProductController.addProduct)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.put("/api/products/:id",ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}
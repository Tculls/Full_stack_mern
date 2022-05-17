// import dependencies
const express = require("express")
const app = express()
const cors = require('cors')

// configure express, cors, mongoose

require("./config/mongoose.config")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes and logic
require("./route/product.route")(app)

// listen to the port
app.listen(8000, ()=>console.log("Listening to the port 8000"))
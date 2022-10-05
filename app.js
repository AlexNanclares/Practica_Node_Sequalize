const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 5000
const cors = require('cors')
const sequelize = require('./conexion')
const jwt = require("jsonwebtoken");
require('dotenv').config()


//Routes
const usuarioRoute = require('./routers/usuario.routes')
const productoRoute = require('./routers/producto.routes')
const validatelogin = require('./midlewares/midlewares')

//Midlewares
const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//use routes
app.use('/api/usuario', usuarioRoute);
app.use('/api/producto', productoRoute);

app.post("/api/v1/acamica/user", validatelogin.middleLogin , (req, res) => {
    return res.status(200).json(req.body);
});


//Servidor
app.listen(PORT, function () {
    console.log('Sistema armado en el puerto '+ PORT +'!');
});

exports.app = app
const express = require('express')
const router = express.Router()
//const multer = require('multer')
//const upload = multer({dest: 'mysql://root:@localhost:3306/bandas'})
const productoController = require('../controllers/producto.controller.js');
const midlewares = require('../midlewares/midlewares.js')


router.post('/products', midlewares.middleLogin, productoController.createProducto);


module.exports = router
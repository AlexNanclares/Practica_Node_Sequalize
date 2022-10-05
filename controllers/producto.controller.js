const sequelize = require('../conexion');

const createProducto = async (req, res) =>{
    try {
        
        const {nombre , precio, descripcion}  = req.body

        let array_insert = [nombre , precio , descripcion];
    
        if(!nombre || !precio || !descripcion) {
            return res.status(400).json({msq: " datos faltantes"})
        }

        const result = await sequelize.query('INSERT INTO`productos`( `nombre`, `precio`, `descripcion`) VALUES( ?, ?, ?)',
        { replacements: array_insert, type: sequelize.QueryTypes.INSERT })

        res.status(200).json({ msq: "Producto creado con exito" + result})
    } catch (error) {
        console.log(`error en la selección: ${error}`)
    }
}

exports.createProducto = createProducto
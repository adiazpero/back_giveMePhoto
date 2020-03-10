const router = require('express').Router();
const Producto = require('../../models/producto');


//GET http://localhost:3000/api/productos/:categoria
router.get('/:categoria', async(req, res) => {
    const producto = await Producto.getByCategoria(req.params.categoria);
    res.json(producto)
    console.log(producto)
})



/*
router.get('/:categoria', async(req, res) => {
            const rows = await producto.getByCategoria(req, res) =>{
                res.json(result)
            }
            });

            */
module.exports = router;
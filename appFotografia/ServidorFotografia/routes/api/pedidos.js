const router = require('express').Router();
const Pedido = require('../../models/pedido');
const middlewares = require('../middlewares');


router.use(middlewares.checkToken);


//POST  http://localhost:3000/api/pedidos/carrito
router.post('/carrito', async(req, res) => {
    console.log(req.body)

    const result = await Pedido.createPedido(req.body.telefono, req.body.direccion, req.payload.usuarioId);
    console.log(result)
    for (let producto of req.body.productos) {
        console.log(producto)
        await Pedido.createProductoPedido(result.insertId, producto)
    }
    res.json(result)
});






module.exports = router;
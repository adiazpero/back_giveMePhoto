const router = require('express').Router();
const Pedido = require('../../models/pedido');



//POST  http://localhost:3000/api/pedidos/carrito
router.post('/carrito', async(req, res) => {
    console.log(req.body)
    const result = await Pedido.createPedido(req.body);
    res.json(result)
});









module.exports = router;
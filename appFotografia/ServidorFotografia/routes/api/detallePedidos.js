const router = require('express').Router();
const Pedidos = require('../../models/detallePedido')



router.get('/', async(req, res) => {
    console.log(req.payload.usuarioId)
    const pedidos = await Pedidos.getAllDetallePedidos(req.payload.usuarioId);
    res.json(pedidos)
});









module.exports = router;
const router = require('express').Router();
const Pedidos = require('../../models/detallePedido');
const middleware = require('../middlewares.js');



router.get('/', middleware.checkToken, async (req, res) => {
    console.log(req.payload.usuarioId)
    const pedidos = await Pedidos.getAllDetallePedidos(req.payload.usuarioId);
    res.json(pedidos)
});





module.exports = router;
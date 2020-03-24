const router = require('express').Router();
const Pedidos = require('../../models/pedido')


/* router.get('/:id', async(req, res) => {
    console.log(req.params)
    const pedidos = await Pedidos.getAllPedidosUser(req.params['id']);
    res.json(pedidos)
});
 */


router.get('/:idUser', async(req, res) => {
    console.log(req.params)
    const pedidos = await Pedidos.getAllDetallePedidos(req.params['idUser']);
    res.json(pedidos)
});









module.exports = router;
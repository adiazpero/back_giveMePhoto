const router = require('express').Router();
const DetalleCurso = require('../../models/detallecurso');
const middlewares = require('../middlewares.js');


//recuperamos todos los pedidos
//GET http://localhost:3000/api/detalleCursos
/* router.get('/', middlewares.checkToken, async(req, res) => {
    const cursos = await DetalleCurso.getAllDetallePedido(req.payload.usuarioId);
    res.json(cursos)
}) */


//GET http://localhost:3000/api/detalleCursos
router.get('/', middlewares.checkToken, async (req, res) => {
    const cursos = await DetalleCurso.getAllDetallePedido(req.payload.usuarioId);

    res.json(cursos)
})


//creamos los pedidos
//POST http://localhost:3000/api/detalleCursos
router.post('/', middlewares.checkToken, async (req, res) => {
    const detallecurso = await DetalleCurso.createPedidoCurso(req.payload.usuarioId, req.body.id);
    res.json(detallecurso)
})





module.exports = router;
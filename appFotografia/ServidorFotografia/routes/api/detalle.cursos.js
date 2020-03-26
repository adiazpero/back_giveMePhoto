const router = require('express').Router();
const DetalleCurso = require('../../models/detallecurso');
const middlewares = require('../middlewares.js');


router.post('/', middlewares.checkToken, async(req, res) => {
    const detallecurso = await DetalleCurso.createPedidoCurso(req.payload.usuarioId, req.body.id);
    res.json(detallecurso)

})



module.exports = router;
const router = require('express').Router();
const apiUsersRouter = require('./api/users');
const apiProductosRouter = require('./api/productos');
const apiCursosRouter = require('./api/cursos');
const apiPedidosRouter = require('./api/pedidos');



router.use('/users', apiUsersRouter);
router.use('/productos', apiProductosRouter);
router.use('/cursos', apiCursosRouter);
router.use('/pedidos', apiPedidosRouter);

module.exports = router;
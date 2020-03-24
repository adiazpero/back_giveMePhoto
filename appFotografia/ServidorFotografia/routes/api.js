const router = require('express').Router();
const apiUsersRouter = require('./api/users');
const apiProductosRouter = require('./api/productos');
const apiCursosRouter = require('./api/cursos');

router.use('/users', apiUsersRouter);
router.use('/productos', apiProductosRouter);
router.use('/cursos', apiCursosRouter);

module.exports = router;
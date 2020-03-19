const router = require('express').Router();
const apiUsersRouter = require('./api/users');
const apiProductosRouter = require('./api/productos');

router.use('/users', apiUsersRouter);
router.use('/productos', apiProductosRouter);

module.exports = router;
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');



//GET http://localhost:3000/api/users/:id
router.get('/:id', async(req, res) => {
    const usuario = await User.getById(req.params['id']);
    res.json(usuario)
})

//POST http://localhost:3000/api/users/registro
router.post('/registro',
    /*[
        //validadores
        check('username', 'El nombre de usuario debe tener mínimo 3 caracteres').isLength({ min: 3 }).isAlphanumeric(),
        check('email', 'Introduce un email correcto').isEmail(),
        check('password').custom((value) => {
            return (/^(?=.*\d).{4,8}$/).test(value);
        })
    ], */
    async(req, res) => {
        //Vemos el resultado de las validaciones y funciona como middleware
        //const errors = validationResult(req);
        /* if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        } */
        const passwordEnc = bcrypt.hashSync(req.body.password, 10);
        req.body.password = passwordEnc;
        const result = await User.create(req.body);
        res.json(result)
        if (result['affectedRows'] === 1) {
            res.json({ success: 'El cliente se ha creado' });
        } else {
            res.json({ error: 'El cliente no se ha podido crear' });
        }
    });

// POST http://localhost:3000/api/users/login
router.post('/login', async(req, res) => {
    try {
        const user = await User.emailExist(req.body.email);
        if (!user) {
            return res.status(401).json({ error: 'Error en el usuario' });
        }
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: createToken(user) });

        } else {
            res.status(401).json({ error: 'Error en email y/o password' });
        }
    } catch (err) {
        console.log(err);
    }
});


const createToken = (pUser) => {

    const payload = {
        usuarioId: pUser.id,
        fechaCreacion: moment().unix(),
        fechaExpiracion: moment().add(10, 'minutes').unix()
    }
    console.log(payload)
    return jwt.encode(payload, process.env.SECRET_KEY);
}



module.exports = router;
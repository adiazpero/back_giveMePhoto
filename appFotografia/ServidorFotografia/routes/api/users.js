const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const user = require('../../models/user');


/*
router.get('/', (req, res) => {
    // res.json('funsiona');
})
*/

//POST http://localhost:3000/api/users/registro
router.post('/registro',
    /*[
        //validadores
        check('username').isLength({ min: 3 }).isAlphanumeric(),
        check('email').isEmail(),
        check('password').custom((value) => {
            return (/^(?=.*\d).{4,8}$/).test(value);
        })
    ], */
    async (req, res) => {
        //Vemos el resultado de las validaciones y funciona como middleware
        //const errors = validationResult(req);
        /* if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        } */
        const passwordEnc = bcrypt.hashSync(req.body.password, 10);
        req.body.password = passwordEnc;
        const result = await user.create(req.body);
        res.json(result)
        /*     if (result['affectedRows'] === 1) {
                res.json({ success: 'El cliente se ha creado' });
            } else {
                res.json({ error: 'El cliente no se ha podido crear' });
            } */
    });

// POST http://localhost:3000/api/users/login
router.post('/login', async (req, res) => {
    console.log(req.body.email)
    try {
        const User = await user.emailExist(req.body.email);
        if (!User) {
            return res.status(401).json({ error: 'Error en email y/o password' });
        }
        console.log(req.body.password, User.password)
        const iguales = bcrypt.compareSync(req.body.password, User.password);
        if (iguales) {
            res.json({ success: 'Usuario logado correctamente' });
        } else {
            res.status(401).json({ error: 'Error en email y/o password' });
        }
    } catch (err) {
        console.log(err);
    }
});



module.exports = router;
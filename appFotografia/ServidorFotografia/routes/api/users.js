const router = require('express').Router();
const user = require('../../models/user');

/*
router.get('/', (req, res) => {
    // res.json('funsiona');
})
*/

//POST http://localhost:3000/api/users/registro
router.post('/registro', async(req, res) => {
    const result = await user.create(req.body);
    res.json(result)
})





module.exports = router;
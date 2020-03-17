const router = require('express').Router();
const Producto = require('../../models/producto');


// GET http://localhost:3000/api/productos
router.get('/', async (req, res) => {
    const productos = await Producto.getAll();
    res.json(productos)
})

//GET http://localhost:3000/api/productos/marca1/marca2 
router.get('/:marca1/:marca2', async (req, res) => {
    const productos = await Producto.getByMarcas(req.params['marca1'], req.params['marca2']);
    res.json(productos)
})

//GET http://localhost:3000/api/productos/marca  FUNCIONA BIEN
router.get('/:marca', async (req, res) => {
    console.log(req.params)
    const productos = await Producto.getByMarca(req.params['marca']);
    res.json(productos)
})


//GET http://localhost:3000/api/productos/:categoria
router.get('/:categoria', async (req, res) => {
    console.log(req.params)
    const productos = await Producto.getByCategoria(req.params['categoria']);
    res.json(productos)
})


// GET http://localhost:3000/api/productos/resolucion/resolucionMin/resolucionMax
router.get('/resolucion/:resolucionMin/:resolucionMax', async (req, res) => {
    const productos = await Producto.getByResolucion(req.params.resolucionMin, req.params.resolucionMax)
    res.json(productos)
})



// GET http://localhost:3000/api/productos/focal/focalMin/focalMax
router.get('/focal/:focalMin/:focalMax', async (req, res) => {
    const productos = await Producto.getByFocal(req.params.focalMin, req.params.focalMax);
    res.json(productos)
})



// GET http://localhost:3000/api/productos/iso/isoMin/isoMax
router.get('/iso/:isoMin/:isoMax', async (req, res) => {
    const productos = await Producto.getByIso(req.params.isoMin, req.params.isoMax);
    res.json(productos)
})



//GET http://localhost:3000/api/productos/precio/precioMin/precioMax
router.get('/precio/:precioMin/:precioMax', async (req, res) => {
    const productos = await Producto.getByPrecio(req.params.precioMin, req.params.precioMax);
    res.json(productos)
})



//GET http://localhost:3000/api/productos/tecnica/tecnicanaturaleza/tecnicanocturna/tecnicaretrato/tecnicamacro  
router.get('/tecnica/:tecnica1/:tecnica2/:tecnica3/:tecnica4', async (req, res) => {
    console.log(req.params)
    const productos = await Producto.getByTecnicas(req.params['tecnica1'], req.params['tecnica2'], req.params['tecnica3'], req.params['tecnica4']);
    res.json(productos)
})


//GET http://localhost:3000/api/productos/tecnica/tecnicamacro  //devuelve null en Postman
/* router.get('/tecnica/:tecnica', async (req, res) => {
    console.log(req.params)
    const productos = await Producto.getByTecnicas(req.params.tecnica, req.params.valor);
    res.json(productos)
}) */



module.exports = router;
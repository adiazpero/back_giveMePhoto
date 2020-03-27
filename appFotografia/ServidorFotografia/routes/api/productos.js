const router = require('express').Router();
const Producto = require('../../models/producto');


// GET http://localhost:3000/api/productos
router.get('/', async(req, res) => {
    const productos = await Producto.getAll();
    res.json(productos)
})

//Marcas cámaras y accesorios
//GET http://localhost:3000/api/productos/marca/marca1 
router.get('/marca/:marca', async(req, res) => {
    const productos = await Producto.getByMarca(req.params['marca']);
    res.json(productos)
})


//GET http://localhost:3000/api/productos/marcas/marca1/marca2 
router.get('/marcas/:marca1/:marca2', async(req, res) => {
    const productos = await Producto.getByMarcas(req.params['marca1'], req.params['marca2']);
    res.json(productos)
})


//Marcas objetivos
//GET http://localhost:3000/api/productos/marca/objetivos/marca1 
router.get('/marca/objetivos/:marca', async(req, res) => {
    const productos = await Producto.getByMarcaObjetivos(req.params['marca']);
    res.json(productos)
})


//GET http://localhost:3000/api/productos/marcas/objetivos/marca1/marca2 
router.get('/marcas/objetivos/:marca1/:marca2', async(req, res) => {
    const productos = await Producto.getByMarcasObjetivos(req.params['marca1'], req.params['marca2']);
    res.json(productos)
})


//GET http://localhost:3000/api/productos/:categoria
router.get('/:categoria', async(req, res) => {
    const productos = await Producto.getByCategoria(req.params['categoria']);
    res.json(productos)
})


// GET http://localhost:3000/api/productos/resolucion/resolucionMin/resolucionMax
router.get('/resolucion/:resolucionMin/:resolucionMax', async(req, res) => {
    const productos = await Producto.getByResolucion(req.params.resolucionMin, req.params.resolucionMax)
    res.json(productos)
})



// GET http://localhost:3000/api/productos/focal/focalMin/focalMax
router.get('/focal/:focalMin/:focalMax', async(req, res) => {
    const productos = await Producto.getByFocal(req.params.focalMin, req.params.focalMax);
    res.json(productos)
})



// GET http://localhost:3000/api/productos/iso/isoMin/isoMax
router.get('/iso/:isoMin/:isoMax', async(req, res) => {
    const productos = await Producto.getByIso(req.params.isoMin, req.params.isoMax);
    res.json(productos)
})



//GET http://localhost:3000/api/productos/precio/precioMin/precioMax
router.get('/precio/:precioMin/:precioMax', async(req, res) => {
    const productos = await Producto.getByPrecio(req.params.precioMin, req.params.precioMax);
    res.json(productos)
})



//POST http://localhost:3000/api/productos/tecnicas 
router.post('/tecnicas', async(req, res) => {
    const productos = await Producto.getByTecnicas(req.body.tecnicas);
    res.json(productos)
})


module.exports = router;
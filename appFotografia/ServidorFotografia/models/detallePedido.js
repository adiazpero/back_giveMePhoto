const getAllPedidosUser = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from pedidos where fk_usuario = ?', [pId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    });
};


const getAllDetallePedidos = (pIdUser) => {
    return new Promise((resolve, reject) => {
        db.query('select pedidos.*, group_concat(productos.marca) as productos, sum(productos.precio) as precio_total from pedidos inner join usuarios on usuarios.id = fk_usuario inner join productos on productos.id = fk_producto where usuarios.id = ?', [pIdUser], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}



module.exports = {
    getAllPedidosUser: getAllPedidosUser,
    getAllDetallePedidos: getAllDetallePedidos

}
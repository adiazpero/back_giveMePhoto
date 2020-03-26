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
        db.query('select pedidos.*, group_concat(CONCAT(productos.marca, " ",productos.modelo)) as productos,sum(productos.precio) as precio_total from tbi_pedidos_productos inner join pedidos on pedidos.id = fk_pedido inner join productos on productos.id = fk_producto where pedidos.fk_usuario = ?', [pIdUser], (err, rows) => {
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
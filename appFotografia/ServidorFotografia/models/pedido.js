const createPedido = ({ direccion, telefono, fechapedido, fk_usuario, fk_producto }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into pedidos (direccion, telefono, fechapedido, fk_usuario, fk_producto) values(?,?,?,?,?)', [direccion, telefono, fechapedido, fk_usuario, fk_producto], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}




module.exports = {
    createPedido: createPedido
}
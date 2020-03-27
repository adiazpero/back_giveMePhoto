const getAllDetallePedido = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT tbi_pedido_cursos.*, group_concat(cursos.titulo) as cursos, SUM(cursos.precio) as precio_total FROM tbi_pedido_cursos INNER JOIN usuarios ON usuarios.id = fk_usuario INNER JOIN cursos ON cursos.id = fk_curso WHERE usuarios.id = ?', [pUsuarioId], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    });
}





const createPedidoCurso = (pCursoId, pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tbi_pedido_cursos(fk_usuario, fk_curso) VALUES (?, ?)', [pCursoId, pUsuarioId], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    });
}





module.exports = {
    createPedidoCurso: createPedidoCurso,
    getAllDetallePedido: getAllDetallePedido
}
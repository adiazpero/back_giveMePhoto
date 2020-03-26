const createPedidoCurso = (pCursoId, pUsusarioId) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tbi_pedido_cursos(fk_usuario, fk_curso) VALUES (?, ?)', [pCursoId, pUsusarioId], (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}





module.exports = {
    createPedidoCurso: createPedidoCurso
}
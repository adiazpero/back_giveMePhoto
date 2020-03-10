const getByCategoria = (pCategoria) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where categoria = ?', [pCategoria],
            (err, rows) => {
                if (err) reject(err);
                if (rows.length === 0) {
                    resolve(null)
                }
                resolve(rows[rows.length]);
            })
    });
}



module.exports = {
    getByCategoria: getByCategoria
}
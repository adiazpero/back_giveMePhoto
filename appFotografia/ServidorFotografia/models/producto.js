const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};

const getByCategoria = (pCategoria) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where categoria = ?', [pCategoria], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    });
}

const getByResolucion = (pResolucionMin, pResolucionMax) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where resolucion > ? and resolucion < ?', [pResolucionMin, pResolucionMax], (err, rows) => {
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}

const getByFocal = (pFocalMin, pFocalMax) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where focal > ? and focal < ?', [pFocalMin, pFocalMax], (err, rows) => {
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}

const getByIso = (pIsoMin, pIsoMax) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where iso > ? and iso < ?', [pIsoMin, pIsoMax], (err, rows) => {
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}


const getByPrecio = (pPrecioMin, pPrecioMax) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where precio > ? and precio < ?', [pPrecioMin, pPrecioMax], (err, rows) => {
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}



module.exports = {
    getByCategoria: getByCategoria,
    getAll: getAll,
    getByResolucion: getByResolucion,
    getByFocal: getByFocal,
    getByIso: getByIso,
    getByPrecio: getByPrecio
}
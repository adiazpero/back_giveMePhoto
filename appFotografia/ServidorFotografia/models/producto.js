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


// Ver con profes (la query esta completa en blog.notas)
const getByTecnicas = (pTecnica1, pTecnica2) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where ? = 1 and ? = 1', [pTecnica1, pTecnica2], (err, rows) => {
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}

const getByTecnica = (pTecnica) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where ? = 1', [pTecnica], (err, rows) => {
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
    getByPrecio: getByPrecio,
    getByTecnicas: getByTecnicas,
    getByTecnica: getByTecnica
}
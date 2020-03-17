const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};


const getByMarca = (pMarca) => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos where marca = ?', [pMarca], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    });
}

const getByMarcas = (pMarca1, pMarca2) => {
    return new Promise((resolve, reject) => {
        //let query = "poner la query como un string";
        db.query('select * from productos where marca in (?, ?)', [pMarca1, pMarca2], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}


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
            if (err) reject(err);
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
            if (err) reject(err);
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
            if (err) reject(err);
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
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}


const getByTecnica = (pTecnica) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from productos where ${pTecnica} = 1`, [], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}


//REVISARLAS 
const getByTecnicas = (pTecnica1, pTecnica2, pTecnica3, pTecnica4) => {
    return new Promise((resolve, reject) => {
        if (pTecnica1 != "") {
            db.query(`select * from productos where ${pTecnica1} = 1`, [], (err, rows) => {
                if (err) reject(err);
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pTecnica1 != "" && pTecnica2 != "") {
            db.query(`select * from productos where ${pTecnica1} = 1 and ${pTecnica2} = 1`, [], (err, rows) => {
                if (err) reject(err);
                if (rows.length === 0) {
                    resolve(null);
                }
                resolve(rows);
            })
        } else if (pTecnica1 != "" && pTecnica2 != "" && pTecnica3 != "") {
            db.query(`select * from productos where ${pTecnica1} = 1 and ${pTecnica2} = 1 and ${pTecnica3} = 1`, [], (err, rows) => {
                if (err) reject(err);
                if (rows.length === 0) {
                    resolve(null);
                }
                resolve(rows);
            })
        } else if (pTecnica1 != "" && pTecnica2 != "" && pTecnica3 != "" && pTecnica4 != "") {
            db.query(`select * from productos where ${pTecnica1} = 1 and ${pTecnica2} = 1 and ${pTecnica3} = 1 and ${pTecnica4} = 1`, [], (err, rows) => {
                if (err) reject(err);
                if (rows.length === 0) {
                    resolve(null);
                }
                resolve(rows);
            })
        }
    })
}





module.exports = {
    getByCategoria: getByCategoria,
    getAll: getAll,
    getByResolucion: getByResolucion,
    getByFocal: getByFocal,
    getByIso: getByIso,
    getByPrecio: getByPrecio,
    getByTecnica: getByTecnica,
    getByTecnicas: getByTecnicas,
    getByMarca: getByMarca,
    getByMarcas: getByMarcas

}
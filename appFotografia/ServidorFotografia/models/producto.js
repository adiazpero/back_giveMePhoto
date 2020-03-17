const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from productos', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};


//solo funciona con 2 marcas
const getByMarcas = (pMarca1, pMarca2) => {
    return new Promise((resolve, reject) => {
        //let query = "poner la query como un string";
        db.query('select * from productos where marca IN (?, ?)', [pMarca1, pMarca2], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows);
        })
    })
}

// solo 1 marca funciona bien
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

//Segunda opcion para marcas
/* const getByMarca = (pMarca1, pMarca2 = "", pMarca3 = "", pMarca4 = "", pMarca5 = "", pMarca6 = "", pMarca7 = "", pMarca8 = "", pMarca9 = "") => {
    return new Promise((resolve, reject) => {
        if (pMarca1 != "") {
            db.query('select * from productos where marca = ?', [pMarca1], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "") {
            db.query('select * from productos where marca = ? or marca = ?', [pMarca1, pMarca2], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "" && pMarca5 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4, pMarca5], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "" && pMarca5 != "" && pMarca6 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4, pMarca5, pMarca6], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "" && pMarca5 != "" && pMarca6 != "" && pMarca7 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4, pMarca5, pMarca6, pMarca7], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "" && pMarca5 != "" && pMarca6 != "" && pMarca7 != "" && pMarca8 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4, pMarca5, pMarca6, pMarca7, pMarca8], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        } else if (pMarca1 != "" && pMarca2 != "" && pMarca3 != "" && pMarca4 != "" && pMarca5 != "" && pMarca6 != "" && pMarca7 != "" && pMarca8 != "" && pMarca9 != "") {
            db.query('select * from productos where marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ? or marca = ?', [pMarca1, pMarca2, pMarca3, pMarca4, pMarca5, pMarca6, pMarca7, pMarca8, pMarca9], (err, rows) => {
                if (rows.length === 0) {
                    resolve(err);
                }
                resolve(rows);
            })
        }
    })
} */


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
    getByTecnicas: getByTecnicas,
    getByMarca: getByMarca,
    getByMarcas: getByMarcas

}
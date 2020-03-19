const create = ({ nombre, apellidos, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, email, password) values (?,?,?,?)', [nombre, apellidos, email, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
}


module.exports = {
    create: create
}
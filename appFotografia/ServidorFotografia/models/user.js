const create = ({ nombre, apellidos, email, telefono, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, email, telefono, password) values (?,?,?,?,?)', [nombre, apellidos, email, telefono, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
}










module.exports = {
    create: create
}
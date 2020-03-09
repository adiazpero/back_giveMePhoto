const mysql = require('mysql');

/*
      host: '127.0.0.1',
      user: 'root',
      password: '',
      port: 3306,
      database: 'escuelasv2'
      */

exports.connect = () => {
    const pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        port: 3306,
        database: 'appfotografia'
    });
    /*
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    });
    */
    global.db = pool;
}
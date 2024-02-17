// Servidor Node.js con Express
const express = require('express');
const mysql = require('mysql');
const app = express();

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'system',
  password: '1928',
  database: 'Stock',
  port: '1522'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Ruta para recibir los datos del formulario
app.post('/formulario', (req, res) => {
  // Aquí iría el código para recoger los datos del formulario
  let marca = req.body.marca;
  let modelo = req.body.modelo;
  // Más campos aquí

  // Query SQL para insertar los datos en la base de datos
  let sql = `INSERT INTO Stock (Marca, Modelo) VALUES ('${marca}', '${modelo}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Datos insertados');
  });
});

app.listen(1523, () => {
  console.log('Servidor iniciado en el puerto 1522');
});

const mysql = require("mysql");

// configuración para conectar con: base de datos y usuario
let conexion = mysql.createConnection({
    host: "localhost",
    database: "proyecto",
    user: "root",
    password: "",
    port: "3002"
})

// establecer conexión con base de datos mysql
conexion.connect(err => {
    if(err){
        throw err;
    }else{
        console.log("¡conexion establecida con base de datos en puerto 3002!");
    }
});

function select_all(tabla) {
    // petición de selección general en tabla
    const select = "SELECT * FROM " + tabla;
    conexion.query(select, (err, rows) => {
        if(err){
            throw err;
        }else{
            console.log("Consulta realizada correctamente");
            console.log(rows);
            console.log(rows.length);
            console.log(rows[0]);
            // console.log(rows[0].modelo);
        }
    })
}


function find_car(tabla, matricula) {
    // petición para comprobar si el coche ya existe en la base de datos
    const select = "SELECT * FROM " + tabla + " WHERE matricula = " + matricula;
    conexion.query(select, (err, rows) => {
        if(err){
            throw err;
        }else{
            if(rows.length > 0){
                console.log("No se puede añadir el coche, ya está registrada la matricula!");
                return true;
            }else{
                console.log("Matricula no registra, se procede...");
                return false;
            }
        }
    })
}


function insert_car(tabla, marca, modelo, matricula) {
    // petición de inserción en tabla
    if(!find_car(tabla,matricula)){
        const insert = "INSERT INTO " + tabla + " (id, marca, modelo, matricula) VALUES (NULL, '" + marca + "', '" + modelo + "', '" + matricula + "')";
        conexion.query(insert, (err, rows) => {
            if(err){
                throw err;
            }else{
                console.log("Datos insertados correctamente");
                console.log(rows);
            }
        })
    }
}


function break_mysql(){
    // finalizar conexión mysql
    conexion.end();
}

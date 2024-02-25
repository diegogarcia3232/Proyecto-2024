# Proyecto-2024

## Instrucciones
### descargar xampp y crear base de datos
https://sourceforge.net/projects/xampp/
click start en Apache y MySQL,
si alguno da problemas por el puerto usado,
cambiar en configuración 'httpd.conf' -> Listen 80
Comprobar puerto en CMD con: netstat -ano | findstr :80
Crear base de datos y tabla en MySQL (click en admin)

### configurar en phpMyAdmin
https://www.youtube.com/watch?v=fAZVE8km-3o

### conectar base de datos con proyecto web
npm init -y
npm install mysql

### iniciar conexión
node js/conexion.js

### instalar express para servidor local
npm install express

### instalar ejs para el motor de vistas/plantillas (estos tienen la capacidad de realizar queries)
npm install ejsv
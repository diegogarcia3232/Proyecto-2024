document.getElementById('formularioAuto').addEventListener('submit', function(event) {
    event.preventDefault();
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    // Más campos aquí

    // Aquí iría el código para enviar los datos a la base de datos
    fetch('/formulario', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        marca: 'Marca del coche',
        modelo: 'Modelo del coche',
        // Más campos aquí
    }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
    console.error('Error:', error);
    });

});
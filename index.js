const { leerCitas, registrarCita } = require("./operaciones.js")
//Se importan las funciones leerCitas y registrarCita del archivo operaciones.js.
 

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2) 
//para capturar los argumentos que se escriben en la terminal, se utiliza el objeto global llamado process y se accede a un atributo argv.
// Se emplea el método slice con 1 solo parámetro para leer desde la posición 2.

//Se crean condiciones que evalúan, según el argumento correspondiente, qué función ejecutar:
if (operacion === "registrar") {
    registrarCita(nombre, edad, animal, color, enfermedad)
}
else if (operacion === "leer") {
    leerCitas()
}
else {
    console.log("Operación no válida. Por favor, especifique 'registrar' o 'leer'.");
}

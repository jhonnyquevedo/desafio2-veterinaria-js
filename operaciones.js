const fs = require("fs")  //Se importa el módulo File System usando el método require()

// Función para leer las citas
const leerCitas = () => {
    
    try {
        const leer = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
        console.log(leer)
    } 
    catch (error) {
        console.log(error)
    }
}

//Función para registrar las citas
const registrarCita = (nombre, edad, animal, color, enfermedad) => {
    try {
        const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8")) //nos traemos el JSON, el JSON es un string, entonces lo convertimos en arreglo
        citas.push({nombre, edad, animal, color, enfermedad}) // agregamos una cita al arreglo.
        fs.writeFileSync("citas.json", JSON.stringify(citas)) // lo guardamos en nuestro JSON y para eso tiene que ser un string, entonces convertimos de vuelta el nuevo arreglo
        console.log ("cita registrada con éxito")
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = {leerCitas, registrarCita}
// Con module.exports exportamos las funciones leerCitas y registrarCita de este archivo
/*
//EJEMPLO: pasando datos por REFERENCIA (Todos los objetos se pasan por referencia)
//En Javascript todos los objetos son pasados por referencia

EJERCICIO1: 
Crear un objeto con las propiedades nombre y edad, y
crear una función que modifique los valores de ese objeto 


function actualizarUsuario(usuario) {
    usuario.nombre = "Alice";
    usuario.edad = 30;
}

let usuarioOriginal = {
    nombre: "Bob",
    edad: 25
};

console.log("Antes de actualizar:", usuarioOriginal);

actualizarUsuario(usuarioOriginal);

console.log("Después de actualizar:", usuarioOriginal);
*/
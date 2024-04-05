/*
Ejercicio 5: Imprime una función utilizando parametro REST
const mostrarDatos = (...datos) => {
    console.log(...datos);
}
mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');


Ejercicio 6: Imprime datos de la función utilizando parametro spread
const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);


Ejercicio 10: Escribe una función que use el parámetro rest para tomar un número indefinido de
argumentos (todos números) y devuelva la suma de todos estos números.
function suma(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

// Prueba la función
console.log(suma(1, 2, 3)); // Debería imprimir 6
console.log(suma(10, 20, 30, 40)); // Debería imprimir 100


Ejercicio 11: Concatenación de Cadenas
Crea una función que use el parámetro rest para aceptar un número indefinido de cadenas de texto y
las concatene en una sola cadena, separando cada una por un espacio.
function concatenaCadenas(...cadenas) {
  let resultado = '';
  for (let cadena of cadenas) {
    if (resultado) {
      resultado += ' ';
    }
    resultado += cadena;
  }
  return resultado;
}

// Prueba la función
console.log(concatenaCadenas("Hola", "mundo")); // Debería imprimir "Hola mundo"
console.log(concatenaCadenas("Este", "es", "un", "ejemplo")); // Debería imprimir "Este es un ejemplo"


---------------------------------------------------------------------
Ejercicio 12 PROTIP
Crear una función con parametros REST,
pasa 4 argumentos en la función, la función debe "retornar" solo 2 valores, pero en esos 2 valores deben venir los 4

let persona = (nombre, ...args) => {
    return [nombre, args];
}
console.log(persona("Ricardo", true, 32, ["Perro", "Canada"]));

----------------------------------------------------------------------------
Ejercicio 13 PROTIP
Deestructuración: sirve para darle nombres a los valores que tiene un arreglo, en vez de crear una variable por cada posicion del arreglo. Ejemplo
let persona = (...args) => {
    return args;
}

const [nombre, soltero, edad, aficiones] = persona("Ricardo", true, 32, ["Perro", "Canada"]);
console.log(aficiones);
----------------------------------------------------------------------------------

Ejercicio 14 PROTIP
Deestructuración con un objeto RESUMIDO
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre } = persona('Ricardo', 'Garrido');
console.log({ nombre });
-----------------------------------------------------------

Ejercicio 15
Parte1
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona;
}
let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log(peter, tony);

Parte2
const cambiarNombre = ({...persona }) => {
    persona.nombre = 'Tony'
    return persona;
}
let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log(peter, tony);

*/
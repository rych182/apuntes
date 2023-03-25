//console.log(profesion, edad, estadoCivil);








/*

¿Qué es la deestructuración en Javascript? 
es una sintaxis que permite extraer valores de arreglos o objetos y asignarlos a variables distintas de forma más sencilla y elegante.

Destructuración de arreglos
permite tomar uno o varios elementos de un arreglo y asignarlos a variables distintas de una manera más concisa y legible

Destructuración de objetos
Permite extraer propiedades específicas de un objeto y asignarlas a variables distintas

CONCLUSIÓN
La destructuración en JavaScript es una forma conveniente de extraer valores de arreglos y objetos de manera más legible y eficiente.

DEFINICION, permite desempacar valores de arreglos y propiedades de objetos en distintas variables.  


Ejemplo 0: Ejemplo super sencillo de deestructuración
const [a, b] = [1, 2];
console.log(a); // output: 1
console.log(b); // output: 2

Ejemplo 0.2: Destructuración de objetos
const obj = { a: 3, b: 4 };
const { a, b } = obj;
console.log(a); // output: 1
console.log(b); // output: 2

Ejemplo 0.3: establecer un valor predeterminado de 0 
const obj = { a: 1 };
const { a = 0 } = obj;
console.log(a); // output: 1

Ejemplo 0.4: estableciendo "varios" valores "predeterminados"
const obj = { a: 1, b: 2 };
const { a = 0, b = 0, c = 0, d = 0 } = obj;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 0
console.log(d); // output: 0

Ejemplo 0.5: crea una fnción que recibe un objeto y establece valores predeterminados en caso de que no tenga valores
function miFuncion(objeto) {
    const { a = 1, b = 2, c = 3, d = 4 } = objeto;
    console.log(a, b, c, d);
}

// Probamos la función con un objeto que tiene ambas propiedades
miFuncion({ a: 10, b: 20 }); // output: 10 20

// Probamos la función con un objeto que no tiene la propiedad 'a'
miFuncion({ b: 30 }); // output: 1 30

// Probamos la función con un objeto que no tiene ninguna de las propiedades 'a' ni 'b'
miFuncion({}); // output: 1 2


                          CHATGPT
NOTAS: ¿En que caso practico o real una función recibiría un objeto, muestrame un caso de la vida real? Respuesta CHATGPT
Las funciones que reciben objetos como parámetros son muy comunes en la programación, especialmente en JavaScript. 
Un caso práctico en el que una función podría recibir un objeto es cuando se trabaja con formularios HTML.

Por ejemplo, supongamos que tenemos un formulario HTML con varios campos de entrada (input), y queremos validar los datos ingresados en el formulario antes de enviarlos al servidor. 
Podríamos crear una función que reciba un objeto que represente los datos del formulario, y luego validarlo utilizando la destructuración de objetos.

function validarFormulario({nombre = '', email = '', telefono = ''}) {
  let errores = [];
  
  if (nombre.trim() === '') {
    errores.push('El nombre es obligatorio');
  }
  
  if (email.trim() === '') {
    errores.push('El email es obligatorio');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.push('El email no es válido');
  }
  
  if (telefono.trim() !== '' && !/^\d{7,14}$/.test(telefono)) {
    errores.push('El teléfono no es válido');
  }
  
  return errores;
}

// Probamos la función con un objeto que tiene datos válidos
const errores1 = validarFormulario({nombre: 'Juan', email: 'juan@example.com', telefono: '1234567'});
console.log(errores1); // output: []

// Probamos la función con un objeto que tiene datos inválidos
const errores2 = validarFormulario({nombre: '', email: 'juan@example', telefono: 'abc123'});
console.log(errores2); // output: ['El nombre es obligatorio', 'El email no es válido', 'El teléfono no es válido']

En este ejemplo, la función validarFormulario recibe un objeto que representa los datos del formulario, utilizando la destructuración de objetos para extraer las propiedades nombre, email y telefono del objeto.
Luego, la función valida los datos ingresados y devuelve un arreglo de errores.

Al probar la función con diferentes objetos que representen los datos del formulario, podemos ver que la función es capaz de validar correctamente los datos y devolver un arreglo con los errores en caso de que existan.


------------------------------------------------------------------------------------------------------


Ejercicio 1, explica la deestructuración
const numeros = [1, 2, 3];
//Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

//Con destructuración
const [one, two, three] = numeros;
console.log(three);


Ejercicio 2
Deestructura un arreglo
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais] = persona;
console.log(nombre);

Ejercicio 2.1: Otra manera de deestructurar
let mascotas = ['Pez', 'Gato', 'Perro', 'Ave', 'Tortuga'];
let [valor1, , , , valor5] = mascotas;
console.log(valor5);

Ejercicio 2.2: Otra manera de deestructurar
let mascotas = ['Pez', 'Gato', 'Perro', 'Ave', 'Tortuga'];
let [valor1, , , ...restoMascotasRest] = mascotas;
console.log(restoMascotasRest);

Ejercicio 2.3: Utilizar metodos en la deestructuración

const palabra = "hola";
const { length } = palabra;
console.log(length);


Ejercicio 3
Destructurar un arreglo y ponerle un valor por defecto
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais, profesion = "Programador"] = persona;
console.log(profesion);

Ejercicio 4

Deestructurar un arreglo, luego mostrarlo cuando le hace falta un valor al array
const persona = ['Ricard', , 33, 'Mexico']; //dejo un espacio vacio entre el nombre y la edad 
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
console.log(nombre, estadoCivil, edad);

Ejercicio 5

Deestructurar un arreglo y usando solo el dato que quieres usar, usando una función
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
let imprimir = ([nombre, estadoCivil, edad, pais]) => {
    console.log(edad);
}
imprimir(persona);

TAMBIÉN SE PUEDE HACER ASÍ
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;

let imprimir = (persona) => {
    console.log(profesion);
}
imprimir(persona);

RESUMIENDO
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
let imprimir = (persona) => console.log(profesion);
imprimir(persona);


EJERCICIO 6:  Deestructurar un objeto. Fijarme que el orden de la destructuración no afecta.
let persona = {
    nombre: "Ric",
    apellido: "Garrido",
    edad: 33
}
let { apellido, edad, nombre } = persona;
console.log(nombre, apellido, edad);


Ejercicio 7
Deestructurar objeto e imprimiendo con una función
let usuario = {
    nombre: 'Ric',
    apellido: 'gARRido',
    edad: 33,
    pais: 'mexaland',
    profesion: 'developer'
}
let { nombre, apellido, profesion } = usuario;

let imprimir = ({ nombre, profesion }) => {
    console.log(`Mi nombres es ${nombre} y soy ${profesion}`);
}
imprimir(usuario);


DESCUBRIMIENTO://Fijate en el error, use edad de Ricardo en esta deestructuracion y me puso 33 a pesar de que nunca declare la constante "persona"

const persona = ['Ricard', 33, , 'Mexalandia', "Bar Tender"];
const persona2 = ['Sinue', 30, 'Soltero con PlantaHijos', 'GringoMexicano', 'Profe-conta-trader-economista'];
const persona3 = {
    nombre1: 'Irma',
    edad1: '28',
    apellido: 'Garrido'
}
const [nombre, edad, estadoCivil, pais, profesion = 'dev'] = persona;
const [name, age, civilState, country, job = 'economista'] = persona2;
const { nombre1, apellido, edad1 } = persona3;

//Fijate en el error, use edad de Ricardo en esta deestructuracion y me puso 33 a pesar de que nunca declare la constante "persona"
let imprimir = ({ nombre1, apellido, edad1 }) => console.log(nombre1, apellido, edad);

imprimir(persona3);


*/
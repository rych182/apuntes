
//JON MIRCHA: LISTO
//console.log(profesion, edad, estadoCivil);

const palabra = "hola";
const { length } = palabra;
console.log(length);

/*

¿Qué es la deestructuración en Javascript? 
es una sintaxis que permite extraer valores de arreglos o objetos y asignarlos a variables distintas de forma más sencilla y elegante.

Destructuración de arreglos
permite tomar uno o varios elementos de un arreglo y asignarlos a variables distintas de una manera más concisa y legible

Destructuración de objetos
Permite extraer propiedades específicas de un objeto y asignarlas a variables distintas. 
Las propiedades se deben de llamar igual que las variables que le asignaremos en la destructuración

CONCLUSIÓN
La destructuración en JavaScript es una forma conveniente de extraer valores de arreglos y objetos de manera más legible y eficiente.
La deestruccturacion de objetos y arreglos se usan mucho en frameworks y librerias
DEFINICION, permite desempacar valores de arreglos y propiedades de objetos en distintas variables.  


------------------------------------------------------------------------------------------------------------------
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


Ejercicio 4, explica la deestructuración
const numeros = [1, 2, 3];
//Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

//Con destructuración
const [one, two, three] = numeros;
console.log(three);


Ejercicio 5
Deestructura un arreglo
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais] = persona;
console.log(nombre);


Ejercicio 6: Otra manera de deestructurar
let mascotas = ['Pez', 'Gato', 'Perro', 'Ave', 'Tortuga'];
let [valor1, , , , valor5] = mascotas;
console.log(valor5);



Ejercicio 8: Utilizar metodos en la deestructuración
const palabra = "hola";
const { length } = palabra;
console.log(length);

Ejercicio 9: Destructurar un arreglo y ponerle un valor por defecto
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais, profesion = "Programador"] = persona;
console.log(profesion);

Ejercicio 10
Deestructurar un arreglo,dejando un espacio de memoria sin datos, luego mostrar ese espacio vacio al array
const persona = ['Ricard', , 33, 'Mexico']; //dejo un espacio vacio entre el nombre y la edad 
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
console.log(nombre, estadoCivil, edad);


*/
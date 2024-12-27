/*

DOM
Las etiquetas el DOM se refiere como elementos(checar imagen DOM),
podemos seleccionar elementos, eliminarlos y modificarlos, el DOM es todo mi código HTML
, también puedes seleccionar, atributos, clases, id's etc.

Exercise 0: callback per event
Para esto creamos un boton en html que tenga un id

//function that allows you to select an id, class or html tag
document.querySelector('#btn').addEventListener('click',()=>{
	console.log("Has dado click y se ha activado ka función callback que dispara este console.log")
})
---------------------------------------------------------------------------------
Exercise 1: change the button color without give a click, only with a function
const button = document.querySelector('.btn2')

function toggle() {
  button.classList.toggle('altColor')
}
toggle()
--------------------------------------
Exercise 2: change the button color with a click

const button = document.querySelector('.btn2')

function toggle() {
  button.classList.toggle('altColor')
}

button.addEventListener('click',toggle)
-------------------------------------------------------------
Ejercicio 3: callback por evento, ejemplo 2
Para esto creamos un boton en html que tenga un id

function fecha() {
  document.getElementById("fecha").innerHTML = Date();
}

Date es una función constructora que se utiliza para crear objetos de tipo fecha.
Por lo tanto, cuando llamas a Date(), dependiendo de cómo lo uses, puede actuar de dos maneras diferentes:

1-Si llamas a Date() sin el operador new, devuelve una cadena de texto que representa la fecha y hora actual.

let fecha = Date();
console.log(fecha);  // Ejemplo de salida: "Fri May 17 2024 12:34:56 GMT+0000 (Coordinated Universal Time)"

2-Si usas new Date(), crea un nuevo objeto de tipo Date que representa la fecha y hora actuales,
 o una fecha específica si proporcionas argumentos.

let fecha = new Date();
console.log(fecha);  // Ejemplo de salida: Fri May 17 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

let fechaEspecifica = new Date(2024, 4, 17);  // Mes es 0-indexado, por lo que 4 representa mayo.
console.log(fechaEspecifica);  // Ejemplo de salida: Fri May 17 2024 00:00:00 GMT+0000 (Coordinated Universal Time)



-----------------------------------------------------------------------------------------------------------
Ejercicio 4: hacer un callback que muestre el dato en el dom

function suma(callback,x,y) {
  let operacion = x + y;
  callback(operacion);
}

function mostrarEnConsola(param){
  console.log(param)
}

function mostrarEnPagina(param){
  document.getElementById('myh1').textContent = param; 
}

suma(mostrarEnPagina,2,4)

---------------------------------------------------------------
EXERCISE 5: Imprimir el resultado de los números seleccionados en los inputs

const sumar = (num1, num2, callback) => {
  return callback(num1 + num2);
}
document.getElementById('btn1').addEventListener('click', () => {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

//.value: Obtiene el valor actual del elemento seleccionado. 
//Este valor es típicamente el texto dentro de un campo de entrada (<input>), 
//un área de texto (<textarea>), o una opción seleccionada en un elemento select (<select>).

  sumar(num1, num2, (resultado) => {
    console.log('El resultado es: ' + resultado);
  });
});

*/


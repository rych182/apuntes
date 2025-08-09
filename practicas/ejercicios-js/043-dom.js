
/*

ME QUEDE MIN 9

INFORMACIÓN

DOM
Las etiquetas el DOM se refiere como elementos(checar imagen DOM),
podemos seleccionar elementos, eliminarlos y modificarlos, el DOM es todo mi código HTML
, también puedes seleccionar, atributos, clases, id's etc.

------------------------------------------------------------------------
CLASE 1

console.log(window)
//window.document no se puede ver porque lo ejecutas antes de que se cargue todo el html 
//se puede imprimir de estas 2 maneras, tambien puede irte a la consola y escribir "document"
console.log(window.document)
console.log(document)
//para acceder al head y al body del html
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)//para todo el html PERO NO EL MAPEO COMPLETO DEL DOM
console.log(document.doctype)//sirve para especificar el tipo de documento
console.log(document.characterSet)//juego de caracteres
console.log(document.title)
console.log(document.links)//coleccion de nodo(es como un arreglo pero de elementos HTML) NO SON ARREGLOS y no comparten todos los metodos de los arreglos
//por ejemplo, no puedes usar un .map() porque no es un arreglo
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)

document.styleSheets
es una propiedad que te permite acceder a todas las hojas de estilo (CSS) asociadas al documento HTML actual. Esta propiedad devuelve una lista (o colección) de objetos CSSStyleSheet que representan cada una de las hojas de estilo cargadas en la página.

¿Para qué sirve?
Acceder a las hojas de estilo: Te permite interactuar y modificar las hojas de estilo de la página directamente desde JavaScript.

Modificar reglas CSS: Puedes agregar, eliminar o modificar las reglas CSS de las hojas de estilo cargadas.

Manipular las reglas de estilo dinámicamente: Puedes modificar propiedades de estilo a nivel de código sin necesidad de cambiar el archivo CSS de manera estática.


console.log(document.scripts)//me marca 2, porque uno es mi archivo dom.js y el otro liveserver

//te muestra el texto que selecciones con el mouse, ponemos retraso para alcanzar a seleccionar algo
setTimeout(() => {
  console.log(document.getSelection().toString())  
}, 3000);

document.writeln("<h2>estoy escribiendo en el DOM</h2>")
-----------------------------------------------------------------------
CLASE 2

UN ELEMENTO ES DISTINTO A UN NODO, hay diferentes tipos de nodos, los comentarios de html pueden ser un nodo, las etiquetas de html otro, 
los textos también son nodos
Aquí puedes ver los diferentes tipos de nodos: https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
Son 12 tipos de nodos
Recuerda que el DOM es una API que tienen los navegadores para interpretar documentos HTML y XML
Lo que nos va a importar son los "nodos de tipo elemento" y "nodos de tipo texto"
Un NODO de TEXTO es "un TEXTO que viene DENTRO de una etiqueta h1 o p" y un "NODO de tipo ELEMENTO" es la "ETIQUETA HTML" en si

-------------------------------------------------------------------------------------
Clase 3

//Esto no es un arreglo, es una colección de HTML
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("que-es"))
console.log(document.querySelector("#que-es"))
//solo te muestra el primer elemento encontrado
console.log(document.querySelector("a"))
//te muestra todos los elementos de ese tipo
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach(element => console.log(element))
console.log(document.querySelectorAll(".card")[2])
//etiquetas li que se encuentren dentro de un id que se llame menu
console.log(document.querySelectorAll("#menu li"))


let caja = document.getElementsByClassName("card")
console.log(typeof caja)

------------------------------------------------------------------------------------------
Clase 4
El estandar ES6 te permite crear tus propios atributos, se le conoce como los data-attributs
puedes escribirlo así: 
  data- 
Después del guion medio, le puedes poner el nombre que tu quieras.
También tu puedes interactuar con los data attributes y ponerle valores


*/

/*

Exercise 0: callback per event
Para esto creamos un boton en html que tenga un id

//function that allows you to select an id, class or html tag
document.querySelector('#btn').addEventListener('click',()=>{
	console.log("Has dado click y se ha activado ka función callback que dispara este console.log")
})
---------------------------------------------------------------------------------

-----------------------------------------------------------------------------

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

"Date" es una función constructora que se utiliza para crear objetos de tipo fecha.
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

//trabajar con los atributos de HTML
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
//La diferencia es que en una te da todo el link y en otra el valor que realmente esta escrito
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

//Cambiando el atributo lang
document.documentElement.lang="es";
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang)

//cambiando atributo para que se abra en otra pestaña del navegador
const $linkDom = document.querySelector(".link-dom")
$linkDom.setAttribute("target","_blank")
//agregando rel noopener, para que sea seguro el link, es buena practica
$linkDom.setAttribute("rel","noopener")
//poniendo un link en el href
$linkDom.setAttribute("href","https://www.google.com/")
//validar si mi codigo tiene un atributo
console.log($linkDom.hasAttribute("rel"))
//Remover un atributo
$linkDom.removeAttribute("rel","noopener")
console.log($linkDom.hasAttribute("rel"))

//Conseguir que me muestre un atributo
console.log($linkDom.getAttribute("data-description"))
//Cada atributo lo va guardando en ese Mapa(tipo de dato nuevo de JS desde el 2015)
console.log($linkDom.getAttribute("data-description"))

/*
¿Porque se usa const y no let?
Porque coom vamos a trabajar con objetos y arrays
el const no va a validar que algo cambie dentro del objeto
Mientras que valores primitivos como números o string puedo cambiar el valor
El objeto y el array no van a cambiar, se mantiene
No importa si le cambio dinamicamente con JS atributos o estilos
, va a seguir siendo el mismo elemento del DOM a lo largo de mi aplicacion


Algunos desarrolladores utilizan $ para nombrar una constante a la cual le almacenamos un
elemento del DOM
*/
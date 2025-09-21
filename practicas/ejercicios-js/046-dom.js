/*
ME QUEDE MIN 9

INFORMACIÓN

DOM
Las etiquetas el DOM se refiere como elementos(checar imagen DOM),
podemos seleccionar elementos, eliminarlos y modificarlos, el DOM es todo mi código HTML
, también puedes seleccionar, atributos, clases, id's etc.

DOMTokenList
Es un objeto especial del DOM que se usa para manejar listas de tokens 
(generalmente clases CSS) de manera eficiente y segura.

¿Por qué existe DOMTokenList y no usan un array?
Porque el DOM necesita sincronización directa con el atributo del elemento.
Por ejemplo:
div.classList.add("activo");
// Esto automáticamente actualiza el atributo "class" del elemento:
// <div class="... activo"></div>

Si fuera un array normal, tendrías que sincronizar manualmente el cambio con el DOM,
lo cual sería propenso a errores y menos eficiente.

Además, DOMTokenList evita duplicados y maneja espacios y formato automáticamente
— algo que con un array tendrías que controlar tú.

No hay una regla especial del DOM que diga “usa const”.
Pero sí es una buena práctica usar const para referencias de elementos del DOM porque casi nunca los
reasignas, y eso hace tu código más robusto, legible y menos propenso a errores. 


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
es una propiedad que te permite acceder a todas las hojas de estilo (CSS) asociadas al documento HTML actual.
Esta propiedad devuelve una lista (o colección) de objetos CSSStyleSheet que representan cada una de las hojas de estilo cargadas en la página.

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
Un NODO de TEXTO es "un TEXTO que viene DENTRO de una etiqueta h1 o p"
 y un "NODO de tipo ELEMENTO" es la "ETIQUETA HTML" en si

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

//Te guarda los atributos en un objeto de tipo Mapa, fijate como puse 2 atributos en el HTML
console.log($linkDom.dataset)

//Para que te muestre le contenido del atributo , .dataset.nombreDelAtributo
console.log($linkDom.dataset.id)

//Para que se cambie el atributo 
$linkDom.setAttribute("data-description","hola mundo")

//Cambiarle el valor de otra manera
$linkDom.dataset.description ="Hello world"
----------------------------------------------------------------------------------------------------
clase 5

los estilos también son un atributo

¿Por qué es útil getVomputedStyle?
Porque no siempre puedes saber qué estilo tiene realmente un elemento solo mirando tu CSS 

Por ejemplo:
miDiv.style.color // ← Solo devuelve estilos aplicados *inline* (con style="..."), no los de CSS externo o heredados.
getComputedStyle(miDiv).color // ← ¡Devuelve el color *calculado final*, aunque venga de una hoja de estilos externa!

Ejemplo práctico: CHECAR EJERCICIO 6

Casos de uso comunes
-Leer estilos reales para animaciones o cálculos dinámicos.
-Detectar el estado visual de un elemento (¿está oculto? ¿qué opacidad tiene?).
-Obtener dimensiones reales afectadas por CSS (márgenes, paddings, transforms, etc.).
-Acceder a estilos de pseudo-elementos (como ::before).


Ejemplo útil: Obtener dimensiones reales

const caja = document.getElementById("miCaja");
const estilos = getComputedStyle(caja);

const ancho = parseFloat(estilos.width);      // "100.4px" → 100.4
const alto = parseFloat(estilos.height);
const margenIzq = parseFloat(estilos.marginLeft);

console.log(`Ancho total: ${ancho + margenIzq * 2}px`);

La propiedad (en realidad, método) getComputedStyle() del DOM en JavaScript sirve para:

✅ Obtener los valores finales de todas las propiedades CSS aplicadas a un elemento
,después de que el navegador haya calculado (o “resuelto”)
todos los estilos —incluyendo estilos de hojas de estilo, herencia, media queries,
estilos por defecto del navegador, etc. 


const estilos = window.getComputedStyle(elemento, [pseudoElemento]);
elemento: El elemento del DOM que quieres inspeccionar.
pseudoElemento (opcional): Por ejemplo, ":before", ":after", si quieres obtener estilos de pseudo-elementos.
🔍 ¿Por qué es útil?
Porque no siempre puedes saber qué estilo tiene realmente un elemento solo mirando tu CSS o usando element.style.propiedad.

🎯 Casos de uso comunes
Leer estilos reales para animaciones o cálculos dinámicos.
Detectar el estado visual de un elemento (¿está oculto? ¿qué opacidad tiene?).
Obtener dimensiones reales afectadas por CSS (márgenes, paddings, transforms, etc.).
Acceder a estilos de pseudo-elementos (como ::before).
🧪 Ejemplo con pseudo-elemento:

<div id="contenedor">Contenido</div>

#contenedor::before {
  content: "★ ";
  color: gold;
}

const contenedor = document.getElementById("contenedor");
const estilosBefore = getComputedStyle(contenedor, "::before");
console.log(estilosBefore.color); // "rgb(255, 215, 0)" (gold)
console.log(estilosBefore.content); // "★ " (¡o a veces "none" en algunos navegadores! — cuidado)

⚠️ El soporte para leer content puede variar entre navegadores. 

🚫 Limitaciones
Solo lectura: No puedes modificar estilos con getComputedStyle. Para eso, usa element.style.propiedad = ... o element.classList.
Valores computados: Devuelve valores absolutos y normalizados (ej: colores en rgb(), longitudes en px, etc.).
Rendimiento: Es una operación costosa si se usa en bucles o animaciones — ¡úsala con moderación!
✅ Recomendación
Usa getComputedStyle() cuando necesites leer el estilo final real que el navegador está aplicando,
especialmente si ese estilo viene de CSS externo, clases, o herencia.

========================

const $linkDom = document.querySelector(".link-dom")

console.log($linkDom.style)//aquí aparecen odas las propiedades validas que se pueden aplicar en css y cuales has modificado
console.log($linkDom.getAttribute("style"))//te da solo lo que aparece en el atributo style
console.log($linkDom.style.backgroundColor)

//otra manera de obtener todas las propiedades CSS que puedes modificar, 
// solo que te lo enlista y también te muestra su valor por defecto
//las puedes ver también en la parte de "style" abajo de la consola del navegador das click en "computed" y apareceran, según la etiqueta 
//que estés seleccionando
console.log(window.getComputedStyle($linkDom))
//no es necesario poner explicitamente el window, getPropertyValue("color") nos muestra el valor que tiene nuestra propiedad 
console.log(getComputedStyle($linkDom).getPropertyValue("color"))

//declarando una propiedad, le estoy quitando el subrayado a las etiqueta a de enlace
$linkDom.style.setProperty("text-decoration","none")
//cambiando el display:inline que tienen por defecto las etiquetas a
$linkDom.style.setProperty("display","block")
//accediendo a la propiedad por medio del punto
$linkDom.style.width = "50%";
//centrando el texto
$linkDom.style.textAlign = "center";
//Para centrar la caja
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
//borde redondeando
$linkDom.style.borderRadius = ".5rem";
console.log($linkDom.getAttribute("style"))//te da solo lo que aparece en el atributo style

//variables en css- el nombre correcto es "custom properties"
const $html = document.documentElement;
//selecciona la etiqueta body
const $body = document.body;
-----AQUÍ EMPIEZA EL EJERCICIO DE CAMBIAR DE COLOR EL BODY
let variableDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let variableYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
//muestra los valores que has seleccionado
console.log(variableDarkColor,variableYellowColor)

$body.style.backgroundColor = variableDarkColor;
$body.style.color = variableYellowColor;

//Modificando el color en la variable, checa la etiqueta body en el html, ahí estará en el style
$html.style.setProperty("--dark-color","pink")//cambia el color dentro de la variable de css
variableDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")//almacenas la variable css(--dark-color) en la variable(variableDarkColor) 
//agrega la propiedad CSS background-color y le dice que valor de color ponerle y por eso poner la variable "variableDarkColor" 
$body.style.setProperty("background-color",variableDarkColor)const $linkDom = document.querySelector(".link-dom")

console.log($linkDom.style)//aquí aparecen odas las propiedades validas que se pueden aplicar en css y cuales has modificado
console.log($linkDom.getAttribute("style"))//te da solo lo que aparece en el atributo style
console.log($linkDom.style.backgroundColor)

//otra manera de obtener todas las propiedades CSS que puedes modificar, solo que te lo enlista y también te muestra su valor por defecto
//las puedes ver también en la parte de "style" abajo de la consola del navegador das click en "computed" y apareceran, según la etiqueta 
//que estés seleccionando
console.log(window.getComputedStyle($linkDom))
//no es necesario poner explicitamente el window, getPropertyValue("color") nos muestra el valor que tiene nuestra propiedad 
console.log(getComputedStyle($linkDom).getPropertyValue("color"))

//declarando una propiedad, le estoy quitando el subrayado a las etiqueta a de enlace
$linkDom.style.setProperty("text-decoration","none")
//cambiando el display:inline que tienen por defecto las etiquetas a
$linkDom.style.setProperty("display","block")
//accediendo a la propiedad por medio del punto
$linkDom.style.width = "50%";
//centrando el texto
$linkDom.style.textAlign = "center";
//Para centrar la caja
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
//borde redondeando
$linkDom.style.borderRadius = ".5rem";
console.log($linkDom.getAttribute("style"))//te da solo lo que aparece en el atributo style

//variables en css- el nombre correcto es "custom properties"
const $html = document.documentElement;
//selecciona la etiqueta body
const $body = document.body;

let variableDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let variableYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
//muestra los valores que has seleccionado
console.log(variableDarkColor,variableYellowColor)

$body.style.backgroundColor = variableDarkColor;
$body.style.color = variableYellowColor;

//Modificando el color en la variable, checa la etiqueta body en el html, ahí estará en el style
$html.style.setProperty("--dark-color","pink")//cambia el color dentro de la variable de css
variableDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")//almacenas la variable css(--dark-color) en la variable(variableDarkColor) 
//agrega la propiedad CSS background-color y le dice que valor de color ponerle y por eso poner la variable "variableDarkColor" 
$body.style.setProperty("background-color",variableDarkColor)

-----------------------------------------------------------------------------------
CLASE 6


Algunos desarrolladores utilizan $ para nombrar una constante a la cual le almacenamos un
elemento del DOM
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);//te devuelve la cadena de texto del nombre de la clase
console.log($card.className);//DomTokenList


console.log($card.classList.contains("rotate-45"))//checa si existe la clase de CSS, devuelve boleano
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className);//viendo como agrego la nueva clase y ahora hay 2 clases
console.log($card.classList);//aquí puedo ver como el DomTokenList muestra que ya tien 2 elementos

//removiendo una clase
$card.classList.remove("rotate-45")
console.log($card.className);

//APAGADOR, TOGGLE significa palanca, agrega y quita una clase
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
//aquí lo vuelvo a agregar para que le quite esa clase
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

//REEMPLAZAR UNA CLASE X OTRA
$card.classList.replace("rotate-45","rotate-135")

//AGREGAR VARIAS CLASES AL MISMO TIEMPO
$card.classList.add("opacity-80","sepia")
------------------------------------------------------------------------------------------------
CLASE 7

El metodo "innerText" se creo para INTERNET EXPLORER
Cuando necesites "insertar solo texto" = textContent
cuando necesites "insertar html y texto" = innerHTML
outerHTML reemplaza lo seleccionado por lo que tenemos(el contenido)

const $whatIsDOM = document.getElementById("que-es")

let text = `
  <p>
  El Modelo de Objetos del Documento(<b><i>DOM - Document Object</i></b>) es un API para
  documentos HTML y XML.
  </p>
  <p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y
  presentación visual mediante código JS
  </p>
  <p>
    <mark>El DOM no es parte de la especificación de Javascript, es una API para los navegadores
    </mark>
  </p>
`;
//$whatIsDOM.innerText = text;
//$whatIsDOM.textContent = text;
//El metodo "innerText" se creo para INTERNET EXPLORER, no detecta las etiquetas HTML
//El metodo "textContent" es el metodo STANDAR
// "innerText" y "textContent" se crearon para agregar contenido textual a un elemento
// "innerHTML" interpreta el contenido HTML
$whatIsDOM.innerHTML = text;
//outerHTML reemplaza lo seleccionado por lo que tenemos(el contenido)
$whatIsDOM.outerHTML = text
------------------------------------------------------------------------------
Clase 8 DOM traversing(recorriendo el DOM)
Son una serie de metodos para recorrer los elementos tomando como referencia
"un nodo" poder recorrer diferentes elementos

Diferentes tipos de nodo(hay 12):
1- nodos de texto
2- nodos de comentarios
3- nodos de fragmentos



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
------------------------------------------------------------------------------------------------------
Exercise 6:
Muestra la diferencia entre mostrar código CSS que se colocado desde el HtML y del archivo style.css

<div id="miCaja">Hola</div>
#miCaja {
  color: blue;
  font-size: 20px;
  padding: 10px;
}
const caja = document.getElementById("miCaja");

// ❌ Esto devuelve vacío (si no hay estilo inline)
console.log(caja.style.color); // ""

// ✅ Esto devuelve el valor real calculado por el navegador
const estilos = getComputedStyle(caja);
console.log(estilos.color);        // "rgb(0, 0, 255)" (blue)
console.log(estilos.fontSize);     // "20px"
console.log(estilos.paddingTop);   // "10px"
-------------------------------------------------------------------------------------
EXERCISE 7: te muestra el contenido del pseudo-selector 

🧪 Ejemplo con pseudo-elemento:
<div id="contenedor">Contenido</div>
#contenedor::before {
  content: "★ ";
  color: gold;
}

const contenedor = document.getElementById("contenedor");
const estilosBefore = getComputedStyle(contenedor, "::before");
console.log(estilosBefore.color); // "rgb(255, 215, 0)" (gold)
console.log(estilosBefore.content); // "★ " (¡o a veces "none" en algunos navegadores! — cuidado)

-------------------------------------------------------------------------------------------------------
EXERCISE 8:


const caja = document.getElementById("miCaja");
const estilos = getComputedStyle(caja);

const ancho = parseFloat(estilos.width);      // "100.4px" → 100.4
const alto = parseFloat(estilos.height);
const margenIzq = parseFloat(estilos.marginLeft);

console.log(margenIzq)
console.log(ancho);

console.log(`Ancho total: ${ancho + margenIzq * 2}px`);

---------------------------------------------------------------------------------------------------
*/

/*
No hay una regla especial del DOM que diga “usa const”.
Pero sí es una buena práctica usar const para referencias de elementos del DOM porque casi nunca los
reasignas, y eso hace tu código más robusto, legible y menos propenso a errores. 





*/


// JON MIRCHA LISTO

/**
 https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
Leer la explicación de la barra inversa

Expresiones regulares
Secuencia de caracteres que buscan un patrón de busqueda y que principalmente se usa en la busqueda de cadenas
de texto.
Cualquier lenguaje usa expresiones regulares, se utiliza para validar caracteres, cuales aceptan y cuales no.
No te lo aprendas de memoria, ya que las validaciones las puedes googlear
 
Te ayuda para validar que se escriban correos electronicos, que se acepten letras, números, guiones bajos, guiones medios 
 */

let cadena = "Lorem hola mundo Lorem 6 Lorem 9";

//g representa que debe de buscar en todo el texto y la i , que ignore si es mayuscula o minuscula
let expReg = new RegExp("Lorem", "ig");

//Probamos si la expresion existe, te devuelve un valor boolean
console.log(expReg.test(cadena));

//regresa un array
/*
en JavaScript es utilizado en combinación con expresiones regulares para buscar una coincidencia en una cadena
de texto. Cuando se llama a este método en una expresión regular,
busca la "próxima"(osea, solo 1) coincidencia en la cadena de texto y 
devuelve un array que contiene los detalles de la coincidencia, como el texto coincidente, las subcoincidencias
y la posición de la coincidencia en la cadena original. 
*/
console.log(expReg.exec(cadena));





//este es el formato más usado de las expresions regulares
//Las llaves es para indicar cuantas veces debe estar repetida en el texto la palabra que se está buscando
let expReg2 = /lorem{2}/ig;//sale false porque es "lorem" con "minúscula"
 
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

//BUscar un número, \d — Representa un dígito del 0 al 9.
let expReg3 = /\d/ig;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));

//También puedes utilizar los corchetes para poner un rango
let expReg4 = /[0-9]/ig;
console.log(expReg4.test(cadena));
console.log(expReg4.exec(cadena));


//También puedes utilizar las llaves para poner el número de posibles veces que va a encontrarse
//por ejemplo, de 1 a 5 veces
let expReg5 = /lorem{1,5}/ig;
console.log(expReg5.test(cadena));
console.log(expReg5.exec(cadena));



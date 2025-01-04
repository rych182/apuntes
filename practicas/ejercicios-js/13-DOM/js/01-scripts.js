let elemento;
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;//no es un array, se llama HTMLCollection(es un array que contiene elementos de html)
//  y es un NODO, no comparten todos los metodos de los arreglos
//por ejemplo, no se podría recorrer con un .map , primero lo tendría que guardar en un arreglo
elemento = document.forms[0];//se puede acceder a la posicion
elemento = document.forms[0].id;//se puede acceder al id
elemento = document.forms[0].method//post o get;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;//Representa la URL a la que se envían los datos del formulario
//  cuando este se envía (por ejemplo, al hacer clic en un botón de tipo submit).
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;//te devuelve el valor en texto

elemento = document.images;
elemento = document.scripts;//si aparecen 2 scripts y tengo 1, es por la extensión live server

let elemento2 = document.documentElement;//representa la etiqueta HTML, pero no el mapeo del DOM completo
elemento2 = document.doctype;//especifica el tipo de archivo(html5)
elemento2 = document.characterSet;//el tipo de caracteres que usa
elemento2 = document.title;

elemento3 = document.links;

//seleccionando algo que selecciono con el cursos
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>hola mundo</h2>")

console.log(elemento3)
let cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let expReg = new RegExp("lorem", "ig");
//g representa que debe de buscar en todo el texto y la i , que ignore si es mayuscula o minuscula
let expReg2 = /lorem{2}/ig; //este es el formato más usado de las expresions regulares
//Las llaves es para indicar cuantas veces debe estar repetida en el texto la palabra que se está buscando

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

/**
 https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */
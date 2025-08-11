/*
//EJEMPLO REAL DE TABLAS HASH: contar palabras con tabla hash

function contarPalabras(texto) {
  const palabras = texto.split(" ");// Convierte el texto en un array de palabras
  const contador = {}; // Creamos un objeto vacío que usaremos como tabla hash

  for (let palabra of palabras) { // Recorremos cada palabra
    palabra = palabra.toLowerCase(); //La convertimos a minúscula (opcional)
    if (contador[palabra]) {
      contador[palabra]++; // Si ya existe, aumentamos el contador
    } else {
      contador[palabra] = 1; // Si no existe, agregamos la palabra y le ponemos valor 1
    }
    //console.log(contador[palabra]) //1,2,1,2,3
    //console.log(contador); //hola:1 , hola:2, mundo:1, mundo:2, mundo:3 
    //console.log(contador[palabra]++);
    //console.log(palabra);// hola:2 mundo:3
  }

  return contador;
}

console.log(contarPalabras("hola hola mundo mundo mundo"));
// { hola: 2, mundo: 3 }

//EXPLICACIÓN ====================================================

//Cuando llega por primera vez la palabra "hola", esto es lo que pasa:
if (contador["hola"]) {
  // falso, porque no existe aún
} else {
  contador["hola"] = 1; // Aquí se crea la clave "hola" en el objeto
}



//Ejemplo de como funciona contador[palabra] = 1;

const obj = {};
let clave = "hola";
obj[clave] = 1;

console.log(obj); // { hola: 1 }

MIDUDEV
https://www.youtube.com/watch?v=baDdsQ4aw4o

OTRO MÁS DE SISTEMAS
https://www.youtube.com/watch?v=4Bq7rI2t6vU

PROGRAMADOR X
https://www.youtube.com/watch?v=5Y7T6ubaq04

*/
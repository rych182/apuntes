let amigos = ['Nacho', 'Urrutia', 'Jessica', 'Lau'];
console.log(`¿ ${amigos} incluye la palabra "Lau"?`, amigos.includes('Lau'));


/*let texto = "Hola mundo";



Ejercicio 1:length: Devuelve la longitud de la cadena (número de caracteres).
const texto = "Hola, mundo";
console.log(texto.length); // Salida: 12

Ejercicio 2: concat():Combina dos o más cadenas y devuelve una nueva cadena.
const saludo = "Hola";
const nombre = "Juan";
const mensaje = saludo.concat(", ", nombre, "!");
console.log(mensaje); // Salida: Hola, Juan!

Ejercicio 3: toLowerCase(): Convierten la cadena a minúsculas
const texto = "Hola, Mundo";
console.log(texto.toLowerCase()); // Salida: hola, mundo

Ejercicio 4: toUpperCase(): Convierten la cadena a mayúsculas.
const texto = "Hola, Mundo";
console.log(texto.toUpperCase()); // Salida: HOLA, MUNDO

Ejercicio 5: trim() Elimina los espacios en blanco al principio y al final de la cadena.
const espaciado = "    Hola, Mundo    ";
console.log(espaciado.trim()); // Salida: Hola, Mundo

Ejercicio 6: substring(start, end) Extrae una porción de la cadena desde start hasta end 
(no incluye el carácter en la posición end).
const texto = "JavaScript";
console.log(texto.substring(0, 4)); // Salida: Java

Ejercicio 7: split(separator) 
Divide la cadena en un array de subcadenas basado en un separador proporcionado.
const frase = "Hola, cómo estás";
const palabras = frase.split(" ");
console.log(palabras); // Salida: ["Hola,", "cómo", "estás"]

Ejercicio 8: indexOf(substring) y lastIndexOf(substring):
Devuelven la posición (índice) de la primera y última ocurrencia de una subcadena, respectivamente.
const texto = "Hola, Hola, Mundo";
console.log(texto.indexOf("Hola")); // Salida: 0
console.log(texto.lastIndexOf("Hola")); // Salida: 6


Ejercicio 9: trimstart() , te quita los espacios pero no reduce el número de caracteres
puedes checar el espacio del final, con el mouse en la consola del navegador

const frase = "    Hola, cómo estás   ";
const palabras = frase.length;
console.log(frase);
console.log(palabras); 
console.log(frase.trimStart())
console.log(palabras);

Ejercicio 10: te quita los espacios pero no reduce el número de caracteres
puedes checar el espacio del inicio, con el mouse en la consola del navegador

const frase = "    Hola, cómo estás   ";
const palabras = frase.length;
console.log(frase);
console.log(palabras); 
console.log(frase.trimEnd())
console.log(palabras);

Ejercicio 11: también puede usarse una función seguida de otra función

const frase = "    Hola, cómo estás   ";
console.log(frase.trimStart().trimEnd())

Ejercicio 12: 
reemplaza una cadena de texto con lo que le digas
const frase = "    Hola, cómo estás   ";
console.log(frase.replace("Hola", "Hello"))

Ejercicio 13:
SLice para decirle donde empezar y terminar de cortar
const frase = "Hola, cómo estás";
console.log(frase.slice(0,4))
//Si el segundo número es máyor que el primero, no escribe nada
//si solo pones 1 número, corta lo primero y te imprime lo que sobra.
//la diferencia con substring es que a substring si lo tratas de engañar con un número menor, te los invierte
const frase = "Hola, cómo estás";
console.log(frase.substring(4,0))


Ejercicio 14: chartArt recorta la letra que este en la posicion que le digas
const frase = "Hola, cómo estás";
console.log(frase.charAt(2))

Ejercicio 15: Te va a repetir una cadena de texto, si le pónes números decimales te lo redondea
let frase = "Monitor de 20 pulgadas";
let frase2 = "OFERTON!!".repeat(2);
console.log(`${frase} ${frase2}`);

Ejercicio 16: convertir un número a stringlet numero = 300;
let numero = 300;
let convertir = numero.toString()
console.log(typeof convertir);

EJERCICIO 17:Checa con que letra comienza la palabra dentro de la variable
let texto = "Hola mundo";
console.log(`¿'${texto}' empieza con la letra 'p'?`, texto.startsWith('p'));

Ejercicio 18: Checa con que letra termina la palabra y aparte la convierte a minúscula
let texto = "Hola mundo";
console.log(`¿ ${texto} termina con la letra "o"?`, texto.toLocaleLowerCase().endsWith('o'));

Ejercicio 19: .includes() Encuentra la palabra dentro de un array
let amigos = ['Nacho', 'Urrutia', 'Jessica', 'Lau'];
console.log(`¿ ${amigos} incluye la palabra "Lau"?`, amigos.includes('Lau'));


====================================================================================
                                FUNCIONES CALLBACK


Ejercicio 20: Nos devuelve El primer elemento de un arreglo que "cumpla una condición"
let amigos = ['Nacho', 'Urrutia', 'Jessica', 'Lau'];
console.log(amigos.find(amigo => amigo.length > 6));

Ejercicio 21:

Encuentra la posición en el arreglo en el que se encuentra el dato que estás buscando
console.log(amigos.findIndex((amigo) => {
    return amigo === 'Jessica';
}));


*/





//En Javascript, todos los objetos son pasados por referencia
//Todos los primitivos son pasados por valor y todos los objetos por referencia
//let juan = { nombre: 'Juan' };
//let ana = {...juan };
//ana.nombre = 'ana';
//console.log(juan, ana);

//EJEMPLO pasando datos por VALOR (Todos los primitivos se pasan por valor)
//Cuando trabajamos con primitivos, cualquier tipo de asignación como esta ó lo mandamos a una función como argumento
//lo estamos mandando por valor.Es decir, no importa si transformamos la variable ó le asignamos otra cosa, 
//no estamos afectando el mismo valor de memoria, estamos pasando unicamente el valor


/**
 ====================================================================================
                                Ejercicios con WHILE
 
 Ejercicio 1: imprimir de 1 en 1 hasta que se cumpla la condición

 let x = 0;
while (x < 17) {
    console.log(x);
    x++;
}
 =====================================================================================
                                EJERCICIOS CON DO-WHILE
    EJERCICIO 1:Haz un ciclo con do-while

let x = 0;
do {
    console.log(x);
    x++;
} while (x < 17);

----------------------------------------------------------------------------------------------------------

Ejercicio 8, imprimir un arreglo usando forEach(), perro es el index, osea la posición en el arreglo, es una caracteristica que tiene la función forEach()
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
countries.forEach((country, perro) => {
    console.log(`${perro} ${country}`);
})

------------------------------------------------------------------------------------------------------


EJERCICIO 3, usando "for of" lo mismo que el ejercicio 11 pero usando la función .map(), "transforma" los datos en ARRAY la función .entries()
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.entries()) {
    console.log(entrada);
}

EJERCICIO 4, cada espacio del array lo convierte en un array
const ordenes = new Set([123, 231, 131, 102]);
for (const iterator of ordenes.entries()) {
    console.log(iterator);
}

Ejercicio 5, imprime los valores de un array usando FOR OF y la función .values()
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.values()) {
    console.log(entrada);
}

EJERCICIO 6, nos regresa solo los valores del Map, pero no los indices(llaves fue lo que dijo el profe)
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.values()) {
    console.log(entrada);
}

Ejercicio 7, usamos la función .keys() con FOR OF para conseguir el indice(o key dijo el profe)
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

Ejercicio 8, nos va a regresar nuestro indice pero en este caso el índice es nombre y profesión PORQUE ES UN OBJETO
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.keys()) {
    console.log(entrada);
}

EJERCICIO 9, imprime con un for, arrays creados con la función .entries(), usando los espacios de memoria y datos de 1 solo array
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

*/
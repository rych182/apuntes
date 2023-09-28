//En Javascript, todos los objetos son pasados por referencia
//Todos los primitivos son pasados por valor y todos los objetos por referencia
//let juan = { nombre: 'Juan' };
//let ana = {...juan };
//ana.nombre = 'ana';
//console.log(juan, ana);

//EJEMPLO pasando datos por VALOR (Todos los primitivos se pasan por valor)
//Cuando trabajamos con primitivos, cualquier tipo de asignación como esta ó lo mandamos a una función como argumento
//lo estamos mandando por valor.Es decir, no importa si transformamos la variable ó le asignamos otra cosa, 
//no estamos afectando el mismo valor de memoria, estamos pasando unicamente el valo

/**

========================================================================================
                                EJERCICIOS CON FOR IN
EJERCICIO 1:Haz un ciclo con for in para recorrer un objeto
let objeto = {
    nombre: "Ric",
    apellido: "Garrido",
    Edad: 33
}
for (const propiedad in objeto) {
    console.log(`Key: ${propiedad} --- Value: ${objeto[propiedad]}`);
}

Ejercicio 2, haz el ejercicio 1 pero usando FOR IN, 
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i in countries) {
    console.log(countries[i]);
}


EJERCICIO 3: Recorrer un objeto utilizando FOR IN
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: "Chevrolet"
}
for (const auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`);
}


===========================================================================================
                                EJERCICIOS CON FOR OF
EJERCICIO 1:Haz un ciclo con for of para recorrer un array o cadena de texto

let texto = "ric";
let cadena = [1, 2, 3, 4, 5];
for (const iterator of cadena) {
    console.log(iterator);
}

Ejercicio 2, hacer el ejercicio 1 con FOR OF
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i of countries) {
    console.log(i);
}
Pero se acostumbra poner el sengular del nombre del array
for (let country of countries) {
    console.log(country);
}


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
/*
Aprender condiciones y bucles antes que funciones en JavaScript puede ser beneficioso para evitar confusiones 
porque son conceptos más simples y fundamentales en la programación en general.

Las condiciones y bucles se utilizan ampliamente en la programación, independientemente del lenguaje,
por lo que es importante comprenderlos bien. Por ejemplo, el uso del condicional "if" y del bucle "for" es común
en muchos programas y proyectos.

Por otro lado, aunque las funciones son una parte fundamental de la programación,
a veces pueden ser más abstractas y complicadas de entender para alguien que recién está empezando.
Las funciones pueden involucrar conceptos como ámbito de variables, retorno de valores y parámetros,
que pueden ser difíciles de comprender sin una base sólida en los conceptos más básicos como las condiciones y bucles.
*/


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

========================================================================================
                                EJERCICIOS CON FOR
APUNTES:
-Cada let i declarada en un FOR, vive en ese lapso de tiempo del ciclo
-Cuando hacer un ciclo dentro de otro ciclo se acostumbra cambiar la variable de nombre

EJERCICIO 1:Haz un ciclo con for                                
 for (i = 0; i <= 10; i++) {
    console.log(i);
}

Ejercicio 1.1, Hacer un for que imprima mis amigos
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < 5; i++) {
    console.log(countries[i]);
}


Ejercicio 8, imprimir un arreglo usando forEach(), perro es el index, osea la posición en el arreglo, es una caracteristica que tiene la función forEach()
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
countries.forEach((country, perro) => {
    console.log(`${perro} ${country}`);
})

Ejercicio 9, for anidado.
for (let i = 0; i < 3; i++) {
    let a = i + ".";
    //const element = array[index];
    for (let j = 0; j < 5; j++) {
        //const element = array[j];
        console.log(a + j);
    }
}

Ejercicio 10, imprimir el número de datos que tiene cada array dentro del array
var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, , 6, 9],
    [10, 8, 10, 6, 9]
];

for (let i = 0; i < alumno.length; i++) {
    console.log(alumno[i]);
}

Ejercicio 11, imprimir(recorrer,asi le dicen) la cantidad de datos que se encuentran dentro del array
var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9]
];

for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno.length; j++) {
        console.log(alumno[i][j]);
    }
}

ERROR QUE COMETÍA: Al quitarle [i] en el segundo bucle recorria  5 veces cada array porque conto que habia 5 arrays, entonces, da 20, si hubieran sido 4 arrays, hubiera dado 16.  

var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9],
    [10, 8, 10, 6, 9]
];
let materias = 0;
for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno.length; j++) {
        materias++;
    }
}
console.log(materias);


Ejercicio 12: Sumar las calificaciones

var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9],
    [10, 8, 10, 6, 9]
];
let sumaCalificaciones = 0;
let materias = 0;
for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno.length; j++) {
        sumaCalificaciones += alumno[i][j];
        materias++;
    }
}
console.log(sumaCalificaciones);

Ejercicio 13: Sacar la media de las calificaciones.

var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9],
    [10, 8, 10, 6, 9]
];
let sumaCalificaciones = 0;
let materias = 0;

for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno.length; j++) {
        sumaCalificaciones += alumno[i][j];
        materias++;
    }
}
let total = sumaCalificaciones / materias;
console.log(total);

Ejercicio 14: Imprime repobado cada que haya sacado menos de 6 en una materias
var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9],
    [10, 8, 10, 6, 9]
];
for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno[i].length; j++) {
        if (alumno[i][j] > 5) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }
}

Ejercicio 15: busca en los arrays cuantas materias reprobo el alumno
var alumno = [
    [10, 8, 4, 6, 9],
    [10, 8, 4, 6, 9],
    [10, 8, 2, 6, 9],
    [10, 8, 10, 6, 9],
    [10, 8, 10, 6, 9]
];
let reprobadas = 0;
for (let i = 0; i < alumno.length; i++) {
    for (let j = 0; j < alumno[i].length; j++) {
        if (alumno[i][j] < 6) {
            reprobadas++;
        }
    }
}
console.log(`Reprobaste ${reprobadas} materias ¿Para eso te pago la escuela?`);



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
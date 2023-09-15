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


*/ 
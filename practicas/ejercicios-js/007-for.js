
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
                console.log( "sacaste "+ alumno[i][j] + " Aprobado");
            } else {
                console.log("sacaste "+ alumno[i][j] + " Reprobado");
            }
        }
    }

/*
for (let i = 0; i <= amigos.length; i++) {
    console.log(nombre[i]);
}
*/


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

/* 
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

Ejercicio 2: Haz un ciclo que vaya del 10 al 0
for (let i = 10; i > 0; i--) {
    console.log(i);
}

Ejercicio 3: imprime del 1 al 10 pero llegando al 5 se detenga
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Se detiene cuando i es igual a 5
  }
  console.log(i); // Imprime el valor de i
}

Ejercicio 4: imprime del 1 al 10 pero que salte el número 5
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue; // Salta el número 5
    }
    console.log(i); // Imprime el valor de i
  }

Ejercicio 5, Hacer un for que imprima mis amigos
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < 5; i++) {
console.log(countries[i]);
}

Ejercicio 6, for anidado. Imprime 0.0 , 0.1 hasta 2.4
for (let i = 0; i < 3; i++) {
let a = i + ".";
//const element = array[index];
for (let j = 0; j < 5; j++) {
//const element = array[j];
console.log(a + j);
}
}


Ejercicio 7, imprimir(recorrer,asi le dicen) la cantidad de datos que se encuentran dentro del array
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
-------------------------------------------------------------------------------------------
Ejercicio 8, imprimir(recorrer,asi le dicen) la cantidad de datos que se encuentran dentro del array
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

----------------------------------------------------------
Ejercicio 9: Sumar las calificaciones

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

----------------------------------------------------------------------------------
Ejercicio 10: Sacar la media de las calificaciones.

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

---------------------------------------------------------------------------------------------------
Ejercicio 12: Imprime reprobado cada que haya sacado menos de 6 en una materias
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
                console.log( "sacaste "+ alumno[i][j] + " Aprobado");
            } else {
                console.log("sacaste "+ alumno[i][j] + " Reprobado");
            }
        }
    }
-------------------------------------------------------------------------------------------

Ejercicio 13: busca en los arrays cuantas materias reprobo el alumno
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
--------------------------------------------------------------------------------------------------
Ejercicio 14:
Imprimir los objetos dentro de un array usando For
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}
-------------------------------------------------------------
Ejercicio 15
Imprimir los objetos dentro del array con for pero imprimiendo nombre y modelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + ' del año ' + autos[i].anio);
}
---------------------------------------------------------------
EJERCICIO 16
Hacer el ejercicio 30 pero imprimiendo con interpolacion
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} del año ${autos[i].anio}`);
}
---------------------------------------------------------------
EJercicio 17
Agregaga un objeto a un array const e imprimelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos.push({ modelo: "Mercedez Benz", anio: 2016 });
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + 'del año' + autos[i].anio);
}
*/

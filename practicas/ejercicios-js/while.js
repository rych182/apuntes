/**
 Ejercicio 1, haz un ciclo que imprima los nombres de tus amigos.
 const amigos = ['Nacho', 'Diego', 'Ruben', 'Jessica', 'Otis'];
let i = 0;

while (i < amigos.length) {
    console.log(amigos[i]);
    i++;
}

Ejercicio 2, haz el ciclo del ejercicio 1 otra forma
const amigos = ['Nacho', 'Diego', 'Ruben', 'Jessica', 'Otis'];
let i = 0;

while (amigos[i]) {
    console.log(amigos[i]);
    i++;
}

Ejercicio 3, has el ejercicio 1 pero con Do-WHile
La diferencia del DO-while es que aunque este mal hecho el programa siempre va a entrar una vez
const amigos = ['Nacho', 'Diego', 'Ruben', 'Jessica', 'Otis', 'Pamela', 'Karmina'];
let i = 0;

do {
    console.log(amigos[i]);
    i++;
} while (amigos[i]);

EJERCICIO 4, imprimir del 1 al 10 y cuando estés en el 5, que ponga un aviso usando IF
let i = 1;
while (i < 10) {
    if (i === 5) {
        console.log(`Mamá!! Voy en el ${i}`);
        i++; //el ++ le suma 1 y por eso en el console.log imprime el 6 y así sigue el bucle
        continue;
    }
    console.log(`${i}`);
    i++;
}

EJERCICIO 5, Ejemplo de do-while
let i = 1000;
do {
    console.log(`Numero ${i}`);
    i++;
} while (i < 10);
*/
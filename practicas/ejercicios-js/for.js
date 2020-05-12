//Hacer un for anidado https://www.youtube.com/watch?v=IbOGEvOV6BA

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El ${i} es par`);
    } else {
        console.log(`El ${i} es inpar`);
    }
}


/*
APUNTES:
-Cada let i declarada en un FOR, vive en ese lapso de tiempo del ciclo
-Cuando hacer un ciclo dentro de otro ciclo se acostumbra cambiar la variable de nombre
Ejercicio 1, Hacer un for que imprima mis amigos
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < 5; i++) {
    console.log(countries[i]);
}

Ejercicio 2, Hacer el ejercicio 1 pero con una función que cuente cuantos espacios tiene el array y que los imprima
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

Ejercicio 3, haz el ejercicio 1 pero usando FOR IN, 
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i in countries) {
    console.log(countries[i]);
}

Ejercicio 4, hacer el ejercicio 1 con FOR OF
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i of countries) {
    console.log(i);
}

Pero se acostumbra poner el sengular del nombre del array
for (let country of countries) {
    console.log(country);
}

EJERCICIO 5, usar un IF dentro de un FOR
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        continue;
    }
    console.log(i);
}

EJERCICIO 6, detener el FOR en el número 5
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        break;
    }
    console.log(i);
}

Ejercicio 7, imprime si el número es par o inpar
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El ${i} es par`);
    } else {
        console.log(`El ${i} es inpar`);
    }
}
*/
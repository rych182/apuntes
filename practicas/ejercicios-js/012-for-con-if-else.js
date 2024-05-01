/*
las condicionales son un concepto más fundamental y, por lo tanto, es recomendable aprenderlas antes que los bucles.

Esto se debe a que las condicionales son necesarias para tomar decisiones en el código y
para controlar el flujo de ejecución en función de esas decisiones. Los bucles, por otro lado,
son útiles para repetir tareas varias veces, pero para ello es necesario tener un control de flujo adecuado,
lo que se logra a través del uso de condicionales.

--------------------------------------------------------
EJERCICIO 2: Recorre una cadena con for usando break

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}
--------------------------------------------------------
EJERCICIO 3: Recorre una cadena con for usando continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i]);
}
----------------------------------------------------
EJERCICIO 4, usar un IF dentro de un FOR
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        continue;
    }
    console.log(i);
}
----------------------------------------------------
EJERCICIO 6, detener el FOR en el número 5
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        break;
    }
    console.log(i);
}
--------------------------------------------------------

Ejercicio 7, imprime si el número es par o inpar
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El ${i} es par`);
    } else {
        console.log(`El ${i} es inpar`);
    }
}

*/
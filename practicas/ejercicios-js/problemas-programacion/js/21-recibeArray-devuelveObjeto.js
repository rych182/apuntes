//recibe un array y devuelve 2 objetos donde en uno te muestra los números pares y en el otro impares.

const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("EL valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.log(`EL valor "${num}" ingresado, NO es un número`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}

separarParesImpares();
separarParesImpares(1);
separarParesImpares("hoola");
separarParesImpares(true);
separarParesImpares([]);
separarParesImpares([2, 3, 4, 5, 6, 7, 8]);
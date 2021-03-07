const numeroParInpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return ((numero % 2) === 0) ?
        console.info(`El número ${numero} es Par`) :
        console.info(`El número ${numero} es Impar`)
}
numeroParInpar(1);
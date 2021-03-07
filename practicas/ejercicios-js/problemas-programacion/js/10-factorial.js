const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error("El número no puede ser 0");
    if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let factorial = 1;
    for (let i = numero; 1 < i; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${numero} es ${factorial}`);
}
factorial();
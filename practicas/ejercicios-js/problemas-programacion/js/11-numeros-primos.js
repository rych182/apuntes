const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error("El número no puede ser 0");

    if (numero === 1) return console.error("El número no puede ser 1");

    if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;
    //comienzo la division en 2 porque no podré dividir entre 0 y todos son divisibles entre 1
    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible) ?
        console.log(`El número ${numero} NO es un número primo`) :
        console.log(`El número ${numero} es primo`);
}

numeroPrimo(14);
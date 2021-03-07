const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra");
    palabra = palabra.toLocaleLowerCase();
    //la palabra la transformamos a un arreglo usando split SIN darle un separador, la ponemos al reves y la volvemos a unir con JOIN
    let alReves = palabra.split("").reverse().join();

    return (palabra === alReves) ?
        console.log(`Si es palíndromo, palabra original ${palabra}, palabra al reves ${alReves}`) :
        console.log(`NO es palíndromo, palabra original ${palabra}, palabra al reves ${alReves}`)
}

palindromo("hola mundo");
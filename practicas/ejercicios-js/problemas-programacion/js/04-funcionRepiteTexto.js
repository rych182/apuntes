const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste texto");
    if (!isNaN(texto)) return console.warn("Ingresaste un número, debes poner texto");
    if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir");
    if (veces === 0) return console.error("No puede ser 0");
    //La función sign te devuelve 0,-1 ó 1, checa tus apuntes
    if (Math.sign(veces) === -1) return console.error("El número no puede ser negativo");
    for (let i = 0; i < veces; i++) console.log(`${texto},${i}`);
}

repetirTexto("Hola", 3);


/*
function checar(texto) {
    if (!isNaN(texto)) {
        return console.log("Es un número");
    } else {
        console.log("Es un texto");
    }
}
checar(4);
*/
const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");

    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;
    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if (/[AEIOUÁÉÍÓÚÜüaeiou]/.test(letra)) {
            vocales++;
        }

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }
    //devuelve el resultado en un objeto
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
contarLetras("hola");
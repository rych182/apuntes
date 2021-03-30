const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if (arr.length === 0) return console.error("El arreglo esta vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} NO es un número"`);
    }
    //Math.max espera que le pases el valor por spread
    return console.info(`Arreglo original: ${arr} \n Valor mayor ${Math.max(...arr)} \n Valor menor: ${Math.min(...arr)}`)
}
arrayMinMax();
arrayMinMax(false);
arrayMinMax(2);
arrayMinMax({});
arrayMinMax([]);
arrayMinMax(['hola']);
arrayMinMax([1, -20, 32, 21]);
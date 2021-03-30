const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
    //cuando sea algo diferente a un arreglo, voy a mandar el error
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        //quiere decir que me pasaron algo diferente a un número
        if (typeof num !== "number") return console.error(`Èl valor "${num}" ingresado NO es un número`);
    }

    //Map me permite generar un nuevo arreglo apartir de uno original y al nuevo arreglo, puedo hacerle las modificaciones que yo quiera
    //Como quiero regresar el cuadrado lo multiplico por si mismo.
    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}.\n Arreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(1);
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([2, 4, 6, 8]);
//un arreglo con diferentes tipos de datos
devolverCuadrados([2, 4, 6, "i"]);
devolverCuadrados([2, {}, 6, 8]);
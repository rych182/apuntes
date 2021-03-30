const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");

    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

    //EL circunflejo(triangulito) significa que no puede haber nada antes de la expresión
    //EL dolar significa que no puede haber nada después de la expresión
    // DIAGONAL INVERTIDA s , significa que acepta espacios en blanco
    // DIAGONAL g , significa que lo va a buscar en todos los caracteres
    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre);

    return (expReg) ?
        console.info(`"${nombre}", es un nombre válido`) :
        console.warn(`"${nombre}", NO es un nombre válido`);

}

validarNombre();
validarNombre(3);
validarNombre("Ric garrido");
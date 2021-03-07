const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto");

    if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`);

    if (monto === 0) return console.error("El monto no puede ser 0");

    if (Math.sign(monto) === -1) return console.error(`El monto no puede ser negativo`);

    return console.info(`${monto}-${descuento}% = ${monto -((monto*descuento)/100)}`);
}

aplicarDescuento(2200, 10);
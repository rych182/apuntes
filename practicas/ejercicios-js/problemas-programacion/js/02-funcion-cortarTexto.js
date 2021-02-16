const recortarTexto = (cadena = "", longuitud = undefined) =>
    (!cadena) ?
    console.warn("No ingresaste una cadena de texto") :
    (longuitud === undefined) ?
    console.warn("No ingresaste una longuitud") :
    console.info(cadena.slice(0, longuitud));
recortarTexto("Hola mundo", 4);
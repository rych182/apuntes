const invertirCadena = (cadena = "") =>
    (!cadena) ?
    console.warn("No ingresaste una cadena de texto") :
    console.info(cadena.split("").reverse().join(""));
invertirCadena("HOla mundo");
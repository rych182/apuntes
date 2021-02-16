const contar = (cadena = "") =>
    (!cadena) ?
    console.warn("No ingresaste ninguna cadena") :
    console.log(`La cadena "${cadena} tiene ${cadena.length}" caracteres`);
contar("Hola");

/*
Problema 1: programa una función que cuente el número de caracteres de una 
    cadena de texto

    function contar(cadena = "") {
        if (!cadena) {
                console.warn("No ingresaste ninguna cadena");
            } else {
                console.log(`La cadena "${cadena} tiene ${cadena.length}" caracteres`);
            }
        }
        contar();

PROBLEMA 1 DE MANERA CORTA
    const contar = (cadena = "") =>
    (!cadena) ?
    console.warn("No ingresaste ninguna cadena") :
    console.log(`La cadena "${cadena} tiene ${cadena.length}" caracteres`);
    contar("Hola");
*/
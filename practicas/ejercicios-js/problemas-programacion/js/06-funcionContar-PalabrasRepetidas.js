const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste el texto largo");
    if (!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0,
        contador = 0;
    //contador me permite contabilizar cuantas veces se repite una palabra
    while (i !== -1) {
        //indexOf te devuelve -1 cuando no encontro un caracter igual y si lo encuentra te devuelve el caracter en el que se encuentra, ejemplo 52 de 100 caracteres
        //Busca la palabra "texto" que va a buscar y también recibe la posición que puede ser un número
        //Osea que si el texto se encuentra varias veces, te preguntara cual es el que quieres que te traiga, muestra su primer coincidencia que es "i" que equivale a 0 
        //Se detiene cuando ya no encuentra el texto buscado una tercera vez en la posicion dos [0,1,2]
        i = cadena.indexOf(texto, i);
        //Osea que si encontró coincidencias, por lo tanto "i" es distinto de -1 y se cumple y se le suma
        //y cuando ya no lo encuentra por tercera vez, entonces indexOf te devuelve -1 y como son iguales -1 a -1, entonces da falso !== y termina todo
        if (i !== -1) {
            i++;
            //Porque quiere decir que ya hemos encontrado al menos 1 vez ese texto
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena("Hola mundo, adios mundo", "mundo");
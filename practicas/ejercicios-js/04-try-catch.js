try {
    let numero = "y"
    throw new Error("EL caracter no es un número");
    console.log(numero * numero);
} catch (error) {
    console.log(`Algo salio mal ${error}`);
}



/*
EJERCICIO 1: Hacer un try-catch-finally
try {
    console.log("Todo bien");
    console.log(variable);
    console.log("Segundo mensaje del try");
} catch (error) {
    console.log("Algo salio mal");
    console.log(error);
} finally {
    console.log("Funcione o no funcione me imprimire");
}


2-Finally ejecuta pase lo que pase
try {
    clientes();
} catch (error) {
    console.log(error);
} finally {
    console.log("Ejecuta esto pase lo que pase");
}

function clientes() {
    console.log("Descargando...");

    setTimeout(() => {
        console.log("Completado!");
    }, 3000);
}

*/
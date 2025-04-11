/*
JONMIRCHA: TERMINADO

TRY-CATCH-FINALLY: Es una estructura de control que nos ayuda en el manejo de errores, Evalua ciertos fragmentos de código y cuando haya algún fragmento de error, se vaa capturar en el catch
-Try: si en el código de "try" hay algún error, el código de catch lo capturara
-Catch: no suelta ningún error en color rojo porque catch ahora es el que gestiona el error, para ver ese error, podemos poner en console.log "error" y nos mostrara el error
-Throw new Error: sirve para personalizar nuestro error, "es un objeto" por eso lleva la palabra reservada "new", y
existen 8 tipos de objetos de error, pero el más usado es este
-Finally no suele utilizarse mucho, pero siempre se ejecutara, al final de un bloque try-catch


Ejercicio 0: Lo más sencillo
try{
    console.log("en el try se agrega el codigo a evaluar")
}catch(error){
    console.log("catch captura cualquier errror surguido en el try, pero solo se ejecutará si hay un error")
}finally{
    console.log("el bloque finally se ejecutara siempre al final de un bloque try-catch")
}

-----------------------------------------------------------------------------
EJERCICIO 1: Hacer un try-catch-finally
try {
    console.log("Todo bien");
    console.log(variable);
    console.log("Segundo mensaje del try");//este mensaje ya no se ejecuta
} catch (error) {
    console.log("Algo salio mal");
    console.log(error);//aquíe nos muestra el error
} finally {
    console.log("Funcione o no funcione me imprimire");
}
-----------------------------------------------------------------------------------

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

Ejercicio 3: solo es un ejercicio sencillo para ejemplificar como funciona el try-catch
try {
  // Intentamos hacer algo que podría fallar
  let resultado = 10 / 0; // Esto generará un error, porque no puedes dividir por cero
  console.log(resultado); // Esto no se ejecutará debido al error
} catch (error) {
  // Si hay un error, venimos aquí y manejamos la situación
  console.log('Oops, algo salió mal:', error); // Mostramos el error
} finally {
  // Esta parte se ejecuta sin importar si hubo un error o no
  console.log('¡Esto siempre se ejecuta!');
}


Ejercicio 4: Personalizar el mensaje de error
try {
    let numero = "y"
    if (isNaN(numero)) {
        throw new Error("EL caracter no es un número");
    }
    
    console.log(numero * numero);
} catch (error) {
    console.log(`Algo salio mal ${error}`);
}


Ejercicio 5: Personalizar el mensaje de error
try {
    let numero = "y"
    throw new Error("EL caracter no es un número");// throw sirve para hacer un error personalizado
    console.log(numero * numero);
} catch (error) {
    console.log(`Algo salio mal ${error}`);
}

*/
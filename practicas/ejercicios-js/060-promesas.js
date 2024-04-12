/*
function leerArchivo(nombreArchivo, callback) {
    // Simulamos la lectura del archivo después de 2 segundos
    setTimeout(function() {
      console.log("Lectura del archivo '" + nombreArchivo + "' completada.");
      // Llamamos al callback una vez que la lectura del archivo está completa
      callback();
    }, 2000);
  }
  
  // Definimos una función de callback
  function callbackLecturaCompleta() {
    console.log("Operación de callback completada.");
  }
  
  // Llamamos a la función leerArchivo y pasamos la función de callback
  leerArchivo("ejemplo.txt", callbackLecturaCompleta);
  
  console.log("Operación principal continúa mientras se lee el archivo.");
  */
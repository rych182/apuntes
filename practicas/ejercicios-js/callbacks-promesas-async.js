/*Código Asincrono no Bloqueante*/
//El setTimeOut es una tarea aunque el tiempo sea 0, 
//Console.log es una tarea sincrona inmediata
(() => {
    console.log("Código Asincrono");
    console.log("Inicio");

    function dos() {
        setTimeout(() => {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(() => {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin");
})();

/*
  Codigo sincrono no bloqueante 
(() => {
    console.log("Codigo SIncrono");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
})();

*/
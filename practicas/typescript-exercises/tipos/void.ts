/*

Void: significa "Vacio": especifica que mi función no regresaa nada

function saludar() {
    
}

function saludar():void {
    //return;
    //return undefined; Te lo marca como correcto
    //return 1;
}

// CON FUNCIÓN FLECHA


*/

const saludo = ():void => {
    return;
}

const a = saludo()
console.log(a);

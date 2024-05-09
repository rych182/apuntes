
function sumar(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

export const operaciones = {
    sumar,
    restar
}

//SOlo puedes tener un "EXPORT DEFAULT" POR ARCHIVO
export function saludar2() {
    console.log("Estoy esxportando sin necesidad de importar")
}

//a veces no carga bien el export default en automatico en el archivo donde se importa
//entonces tienes que exportar en una segunda linea como en este ejemplo

//Los unicos que permiten "exportación por defecto" en el primer renglon, son las funciones y las clases
//esto es por el hoisting de las funciones declaradas, que se pueden ejecutar antes de ser declaras
export let password = "contraseña";

export default class Saludar3{
    constructor(){
        console.log("soy una clase con export default con un metodo constructor dentro")
    }
}
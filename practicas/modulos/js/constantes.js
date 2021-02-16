export const pi = Math.PI;

export let usuario = "Ric";
export let password = 123;
//export default password;

const hello = "hola";
export function saludar() {
    console.log("Hola Modulos +ES6");
}

export default class padre {
    constructor() {
        console.log("Hola hijo");
    }
}
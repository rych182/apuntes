//Palabra reservada de TypeScript que no existe en Javascript,
//sirve para obligar a ponerle reglas al objeto
type humano= {
    nombre: string;
    edad?: number;
    amigos: string[];
    getNombre?: ()=>string;
}

/*
let persona: humano = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia","nacho","diego"],
}

let person: humano = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia","nacho","diego"],
}
*/

let myCustomVariable: (string | number | humano) = "fulano";
console.log(myCustomVariable);

myCustomVariable = {
    //nos da por default las propiedades que tenemos el el "type"
    nombre: "ric",
    edad: 49,
    amigos: ["urrutia","nacho"]

}
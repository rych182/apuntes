let persona = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia", "nacho", "diego"],
    getNombre() {
        return this.nombre;
    }
};
export {};
/*
al reescribir, si no pones todas las propiedades, marca error
si quieres poner otro dato, marca error
tampoco permite agregar propiedades después de ser declarado el objeto

persona = {
    nombre: "fulano",
    edad:60,
    amigos:["sutano","mengano","mengana"],
    getNombre(){
        return this.nombre
    }
}
console.log(persona)

-------------------------------------------------
Tipando objetos
let persona: {nombre: string, edad?:number, amigos:string[]} = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia","nacho","diego"]
}

Si quisieras reescribir pero "faltara una propiedad" como "edad", basta
con que pongas "?"" en el tipado de la variable para decir que es opcional



persona = {
    nombre: "fulano",
    //!edad:60,
    amigos:["sutano","mengano","mengana"],
    //getNombre(){
    //    return this.nombre
    //}
}

Esta es la manera en la que se puede tipar toda la función

let persona: {nombre: string, edad?:number, amigos:string[],getNombre:Function} = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia","nacho","diego"],
    getNombre(){
        return this.nombre
    }
}


PEEEEROOOOO se le debe de poner como es que funciona la funcion.

let persona: {nombre: string, edad?:number, amigos:string[],getNombre:()=>string} = {
    nombre: "ric",
    edad: 29,
    amigos: ["urrutia","nacho","diego"],
    getNombre(){
        return this.nombre
    }
}


*/ 
//# sourceMappingURL=objetos.js.map
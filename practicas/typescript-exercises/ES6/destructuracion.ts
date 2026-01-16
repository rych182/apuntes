type Humano = {
    nombre: string;
    apellido: string;
    edad: number;
    estadoCivil: boolean;
}

const persona ={
    nombre: "ric",
    apellido: "garrido",
    edad:100,
    estadoCivil: true
}

//const { nombre, edad, estadoCivil}= persona

//destructurando desde un parametro que contiene un objeto
const imprimirPersona = ( {nombre, ...restoPropiedades}:Humano) =>{
    console.log(nombre, restoPropiedades)
}
imprimirPersona(persona)

const mascota:[string,number,boolean] = ["doky",15,false]
const [nombre,edad,vivo] = mascota;
console.log(nombre)
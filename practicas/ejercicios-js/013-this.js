/*
OBJETO THIS
La palabra clave this se refiere al objeto al que pertenece la función que la está utilizando. 
El valor de this se determina en tiempo de ejecución y depende de cómo se llama a la función y en qué contexto

Ejercicio 1: Viendo que selecciona this
console.log(this);

-----------------------------------------------------
Ejercicio 2: dictar explicación del this
OBJETO THIS
La palabra clave this se refiere al objeto al que pertenece la función que la está utilizando. 
El valor de this se determina en tiempo de ejecución y depende de cómo se llama a la función y en qué contexto

-----------------------------------------------------------------------------------------------------------------
Ejercicio 3: crear un objeto e imprime una datos que estén dentro usando THIS

let ric = {
    nombre: "Ricardo",
    edad: 33,
    redes: ["Twitter", "Instagram", "GitHub"],
    amigos: {
        secu: "Urrutia",
        prepa: "Nacho",
        uni: "Lau",
        vida: "Diego"
    },
    accion: function saludar() {
        console.log("Hello World");
    },
    otraAccion: function() {
        console.log(`MI nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
ric.otraAccion();
-----------------------------------------------------------------------------------------------------------------
ejercicio 4: usando el this para mandar llamar un dato dentro de un array que esta dentro de un objeto

let objeto = {
    nombre: "ric",
    amigos:["fulano","mengano","perengano"],
    nombreYapellido: function(){
        return this.amigos[1] + " Garrido";
    }
}
console.log(objeto.nombreYapellido("ricardo"));
-----------------------------------------------------------------------------------------------------------------
Ejercicio 5: mostrando un dato dentro de un metodo, usando la palabra reservada this, la propiedad contiene un array.

let objeto = {
    nombre: "ric",
    amigos:["fulano","mengano","perengano"],
    nombreYapellido: function(){
        return this.amigos[1] + " Garrido";
    }
}
console.log(objeto.nombreYapellido());
----------------------------------------------------------------------------------------------
Ejercicio 8: mandando llamar a un metodo dentro de otro metodo y ejecutando ambos, usando la palabra reservada this.

let objeto = {
    nombre: "ric",
    amigos:["fulano","mengano","perengano"],
    redesSociales:{
        trabajo: ["github","dribble","Linkedin"],
        ocio:["facebook","twitter","instagram"]
    },
    nombreYapellido: function(){
        return this.amigos[1] + " Garrido";
    },
    nombreCompleto: function(){
        return this.nombreYapellido() + " Cruz";
    }

}
console.log(objeto.nombreCompleto());
---------------------------------------------------------------------------------------------------------
Ejercicio 9: Ejecutar el metodo nombreYapellido, dentro de la función crear un if que me retorne
el nombre de un valor del atributo amigos, este valor se pasará por parametro

let objeto = {
    nombre: "ric",
    amigos:["fulano","mengano","perengano"],
    redesSociales:{
        trabajo: ["github","dribble","Linkedin"],
        ocio:["facebook","twitter","instagram"]
    },
    nombreYapellido: function(amigoIndex) {
        if (amigoIndex >= 0 && amigoIndex < this.amigos.length) {
            return this.amigos[amigoIndex] + " Garrido";
        } else {
            return "Amigo no encontrado";
        }
    }
};

console.log(objeto.nombreYapellido(1)); // Esto mostrará "mengano Garrido"
console.log(objeto.nombreYapellido(0)); // Esto mostrará "fulano Garrido"
console.log(objeto.nombreYapellido(3)); // Esto mostrará "Amigo no encontrado"
-----------------------------------------------------------------------------------------
Ejemplo(con función antigua)
function saludar() { //el objeto this se vuelve "window" del navegador
    console.log(this); 
}
saludar();

Ejemplo(con un objeto de javascript que dentro tiene una función vieja)
const perro = { //aquí el this nos devuelve el objeto
    nombre: "docky",
    saludar: function() {
        console.log(this);
    }
}
perro.saludar();


Ejemplo(objeto con arrow function)
const perro = { //Aquí nos devuelve el objeto "windows" del navegador
    nombre: "docky", //Las arrow functions capturan el contexto del objeto en el que se encuentran
    saludar: () => {
        console.log(this);
    }
}
perro.saludar();



*/
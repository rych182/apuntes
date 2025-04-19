/*

Nota: Las arrow functiones capturan el contexto de donde se encuentra
el objeto, osea lo que está afuera del objeto, normalmente es el objeto window
osea pueden saltar el contexto en el que están y reconocer el contexto en el que se encuentra su "objeto padre"

OBJETO THIS
La palabra clave this se refiere al objeto al que pertenece la función que la está utilizando. 
El valor de this se determina en tiempo de ejecución y depende de cómo se llama a la función y en qué contexto

Ejercicio 1: Viendo que selecciona this
console.log(this);

-----------------------------------------------------------------------------------------------------------------
Ejercicio 3: crear un objeto e imprime datos que estén dentro usando THIS

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
Ejercicio 4: mostrando un dato dentro de un metodo, usando la palabra reservada this, la propiedad contiene un array.

let objeto = {
    nombre: "ric",
    amigos:["fulano","mengano","perengano"],
    nombreYapellido: function(){
        return this.amigos[1] + " Garrido";
    }
}
console.log(objeto.nombreYapellido());
---------------------------------------------------------------------------------------------------------------------
Ejercicio 5: mandando llamar a un metodo dentro de otro metodo y ejecutando ambos, 
usando la palabra reservada this.

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
Ejercicio 6:Crear un objeto que dentro tenga 2 propiedades y un metodo, una será un texto, otro un array con apellidos,
y por último un metodo que imprima el texto con un apellido según sea el valor pasado por parametro
que se le asigne cuando uno quiera ejecutar ese metodo.


let objeto = {
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
Ejercicio 7: EJEMPLO DE COMO FUNCIONA EL THIS SEGÚN LA FUNCIÓN 

//Ejemplo(con función antigua)

function saludar() { //La palabra reservada this se vuelve "window" del navegador
    console.log(this); 
}
saludar();

//Ejemplo(con un objeto de javascript que dentro tiene una función vieja)

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
--------------------------------------------------------------------------

Ejercicio 8:
Iterar sobre propiedades heredadas:

function Animal() {
  this.legs = 4;
}

Animal.prototype.sound = "Hiss";

let cat = new Animal();

for (let prop in cat) {
  console.log(prop, cat[prop]);
}

Aquí, for...in itera sobre las propiedades del objeto cat, incluyendo las propiedades heredadas del prototipo (sound en este caso).



*/
/*
JS es un lenguaje orientado a objeto basado en prototipos, no en clases
Javascript es un lenguaje multiparadigma(estilos), coom la programación funcional, orientada a objetos.
En javascript es un poco distinta a la programación orientada a objetos.
-Apartir del 2015 (estandar 2016) ya tenemos clases, estas se les conoce como "azucar sintactica" osea
una manera más fácil que nos provee el lenguaje "para poder hacer la programación ORIENTADA A PROTOTIPOS",
el navegador convertira las clasesa funciones prototipicas
-La POO sus 4 conceptos importantes son:
    *Clases: un modelo a seguir, como un machote, como un calca
    *Objetos: es una instancia de la clase, osease una copia del modelo a seguir
        **Atributos:Es una propiedad del objeto(son variables dentro de un objeto)
        **Metodos: Son las acciones que un objeto puede realizar(son funciones dentro de un objeto). NOTA: por eso las funciones son muy descriptibas
        como "getElementById" ó console.log ó console.warm etc

Cuando en JS tu escribes una clase, el compilador la transforma a una función prototipal
Prototipos en JS: es un mecanismo al cual un objeto puede heredar atributos y metodos de un objeto padre.
En JS la herencia se da por la cadena de prototipos 

-Cuando tu creas un objeto, tienes propiedades y metodos, pero el prototipo más primitivo es el Object,
y tiene las definiciones de sus getters y setters 

//IMPORTANTISIMO ARROW FUNCTIONS:Las arrow functions detectan el this del objeto en el que se encuentran
*/


//Comparo todos los objetos
const animal = {
    nombre: "Perro",
    accion() {
        console.log("Ladrar: guagua");
    }
}

const animal2 = {
    nombre: "Gato",
    accion() {
        console.log("Maullar: Miau miau");

    }
}


//Creando una función constructora
function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    /* Mostrar cmo me marca error de esas 2 maneras
    1-sonar(){} 
    2-this.sonar(){}
    */
    //Metodos
    this.sonar = function() {
        console.log("Haciendo un sonido")
    }
}


//Aquí creamos la instancia con la palabra reservada "new" podría ser una instancia de tipo
// "que le especifiquemos", puede ser "new String" ó "new Array"
//Yo lo que quiero crear es un objeto con la función constructora "Animal"
const Perro = new Animal("Snoopy", "Macho");
const Gato = new Animal("Perlita", "Hembra");

console.log(Perro);
console.log(Gato);

//Miercoles 11am-1am,
//Martes, por confirmar Lunes
//Viernes, 4-6pm
//expo ingenieria






//console.log(animal2);
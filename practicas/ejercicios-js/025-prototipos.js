
/*
JS es un lenguaje orientado a objeto basado en prototipos, no en clases
Javascript es un lenguaje multiparadigma(estilos), coom la programación funcional, orientada a objetos.
En javascript es un poco distinta a la programación orientada a objetos.
-Apartir del 2015 (estandar 2016) 'ya tenemos CLASES', estas se les conoce como "azucar sintactica" osea
una manera más fácil que nos provee el lenguaje "para poder hacer la programación ORIENTADA A PROTOTIPOS",
el navegador convertira las clases a funciones prototipicas
-La POO sus 4 conceptos importantes son:
    *Clases: un modelo a seguir, como un machote, como una calca
    *Objetos: es una instancia de la clase, osease una copia del modelo a seguir
        **Atributos:Es una propiedad del objeto(son variables dentro de un objeto)
        **Metodos: Son las acciones que un objeto puede realizar(son funciones dentro de un objeto). NOTA: por eso las funciones son muy descriptibas
        como "getElementById" ó console.log ó console.warm etc

Cuando en JS tu escribes una clase, el compilador la transforma a una función prototipal

Prototipos en JS: es un mecanismo al cual un objeto puede heredar atributos y metodos de un objeto padre.
En JS la herencia se da por la cadena de prototipos 

-Cuando tu creas un objeto, tienes propiedades y metodos, pero el prototipo más primitivo es el Object,
y tiene las definiciones de sus getters y setters, es este: __proto__: Object .

//IMPORTANTISIMO ARROW FUNCTIONS:Las arrow functions detectan el this del objeto en el que se encuentran

NOTA IMPORTANTE EJERCICIOS: imprimir los 4 console.log, para ver la diferencia en los objetos creados
*/

//Comparo todos los objetos(los literales, con los instanciados con la palabra reservada new)

/*}
Ejercicio 1: Comparo todos los objetos(los literales, con los instanciados con la palabra reservada new)

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

Cuando imprimes estos 2 objetos, en la consola de navegador te aparecen sin ningún nombre porque son objetos literales
y su prototipo es "object"

console.log(animal);
console.log(animal2);


Creando una función constructora
function Animal(nombre, genero) {
    atributos, recibiremos su valor por el parametro
    this.nombre = nombre;
    this.genero = genero;
    // Mostrar cmo me marca error de esas 2 maneras
    //1-sonar(){} 
    //2-this.sonar(){}
    
    //Metodos
    //se pone this para que forme parte de este contructor
    //La sintaxis de los objetos literales, no aplican cuando haces una función constructora
    //Lo ideal, es que los metodos se saquen de la función constructora y los peguemos al prototipo
    this.sonar = function() {
        console.log("Haciendo un sonido y mi nombre es:"+" "+ this.nombre)
    }
}

//Aquí creamos la instancia con la palabra reservada "new" podría ser una instancia de tipo
// "que le especifiquemos", puede ser "new String" ó "new Array"
//Yo lo que quiero crear es un objeto con la función constructora "Animal"
//const Perro = new Animal("Snoopy", "Macho");
//const Gato = new Animal("Perlita", "Hembra");

//Estos 2 objetos aparecen en la consola PERO son algo que se llama "Animal" y su función constructora es "Animal"
//console.log(Perro);
//console.log(Gato);

//Todo esto evita que estes copiando y pegando la "estructura de un objeto literal", 
//si vamos a usar varias instancias de ese tipo que estemos creando, nos conviene usar una función constructora
*/

/*
    EJERCICIO 2: FUnción constructora donde asignamos los metodos al prototipo, no a la función como tal 
//FUnción constructora donde asignamos los metodos al prototipo, no a la función como tal
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}
//Estos son los metodos agregados al prototipo de la función constructora, esto va a generar, rendimiento y espacio
//en memoria, si tu despliegas el objeto, te darás cuenta de que no aparecen los metodos, pero si aparecen en el "prototype"
Animal.prototype.sonar = function() {
    console.log("Haciendo un sonido y mi nombre es:"+" "+ this.nombre)
}
Animal.prototype.saludar = function() {
    console.log("Hola, mi nombre es:"+" "+ this.nombre)
}

const Perro = new Animal("Snoopy", "Macho");
const Gato = new Animal("Perlita", "Hembra");
console.log(Perro)
Perro.saludar();
Perro.sonar();

COnstructor:es un metodo especial que se ejecuta cuando se crea una nueva instancia de ese objeto 
*/

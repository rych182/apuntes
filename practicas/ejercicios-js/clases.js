/*
Notas:
-Los constructores se ejecutan en automático
-Se hereda usando la palabla extends
-La palabra SUPER es usada para acceder y llamar funciones del padre de un objeto.
-poner getComida favorita(){} ó setComidaFavorita(){} no es obligatorio, solo lo usan los programadores para identificar que es un set y un get
-Otra forma de declarar variables _comida = '';
-el set sirve para recibir un valor y no deben tener el mismo nombre que la propiedad que quieres modificar
-El get es para recuperar un valor
-static: me permite usar la propiedad o metodo estatico SIN instanciar, pueden ser creadas ó modificadas desde afuera,
los gets declarandolos como propiedad, cuando trabajas con un "metodo" estatico,
puedes usar propiedades pero te daran el valor vacío(undifined) porque su valor viene de una instancia que no puedes usar.
-Prototype: todos los objetos en JS tienen el proto, 
-proto: ahí puedes ver todos los metodos que le puedes poner a un objeto, 2 razones para crear un prototype, para que tus objetos
no queden cargados con muchas funciones y organizar el codigo, hace que una funcionalidad este fuera de un objeto y eso hace que
nuestro código sea fácil de mantener, 
*/


/**
Ejercicio 1
Crea una clase con 2 propiedades y luego crea un objeto
class Usuario {
    constructor() {
        this.nombre = "Ricardo",
            this.edad = 33
    }
}
const ric = new Usuario();
document.write(ric.nombre);

Ejercicio 2
Crea una clase con 2 propiedades y luego crea un objeto, las propiedades deben de ser dinámicas, osea
deben de recibir un valor desde afuera.
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad
    }
}
const ric = new Usuario("Ric ", 33);
document.write(ric.nombre + ric.edad);

Ejercicio 3
Crea una clase con 2 propiedades y metodo, luego crea un objeto, las propiedades deben de ser dinámicas, osea
deben de recibir un valor desde afuera e imprime el metodo dandole el valor desde afuera.
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad
    }
    saludo(a) {
        return a;
    }
}
const ric = new Usuario("Ric ", 33);
document.write(ric.saludo("Que tranza morro"));

Ejercicio 4
Otra manera de crear una "clase"
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('ric', 'asd', 'hurra!');
console.log(spiderman);


Ejercicio 5
Crea una clase con 3 propiedades dinámicas y que sean llamadas desde un metodo
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo
    }
    mostrarInfo() {
        return `
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>
        correo: ${this.correo} <br>`;
    }
}
const ric = new Usuario("Ric ", 33, 'correo@correo.com');
document.write(ric.mostrarInfo());

Ejercicio 5
Metodo dentro de una clase que manda llamar a otro metodo fuera de su scope, usando this
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        return `soy ${this.nombre} y mi identidad es ${this.codigo}`;
    }

    otraFuncion() {
        return this.quienSoy();
    }
}

const spiderman = new Persona('ric', 'asd', 'hurra!');
console.log(spiderman.otraFuncion());


EJERCICIO 6
Crear un SET y usarlo
class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
        }
        //los sets se acostumbra recibir un valor y no deben tener el mismo nombre que la propiedad que quieres modificar
    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    quienSoy() {
        return `soy ${this.nombre} y mi identidad es ${this.codigo}`;
    }

    otraFuncion() {
        return this.quienSoy();
    }
}

const spiderman = new Persona('ric', 'asd', 'hurra!');
spiderman.setComidaFavorita = 'Los chilaquiles';
console.log(spiderman);


EJERCICIO 7
Crear un SET de otra manera y usarlo

class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    _comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
        }

    set comida(comida) {
        this._comida = comida;
    }

    quienSoy() {
        return `soy ${this.nombre} y mi identidad es ${this.codigo}`;
    }

    otraFuncion() {
        return this.quienSoy();
    }
}

const spiderman = new Persona('ric', 'asd', 'hurra!');
spiderman.comida = 'Camarones al mojo de ajo';
console.log(spiderman);


EJERCICIO 8
Crea un GET y usalo
class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
        }
        //los sets se acostumbra recibir un valor y no deben tener el mismo nombre que la propiedad que quieres modificar, el set sirve para recibir un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    //El get es para recuperar un valor
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        return `soy ${this.nombre} y mi identidad es ${this.codigo}`;
    }

    otraFuncion() {
        return this.quienSoy();
    }
}

const spiderman = new Persona('ric', 'asd', 'hurra!');
spiderman.setComidaFavorita = 'una jericalla';
console.log(spiderman.getComidaFavorita);


EJERCICIO 10
Crea una propiedad estatica desde afuera de la clase, y has que se modifique su valor desde el constructor, luego crea un static get
para mostrar su valor y por último crea un meotoo estatico que imprima cualquier cosa.

class Persona {
    static _conteo = 0;
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log("HOla a todos, soy un metodo estatico");
        return 0;
    }

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

}
//Persona._conteo = 2;
const fulano = new Persona('bla', 'blabla', 'blablabla');
const perengano = new Persona('bla', 'blabla', 'blablabla');
const sutano = new Persona('bla', 'blabla', 'blablabla');
console.log(Persona.mensaje());




EJERCICIO 11
Hereda la clase del ejercicio 4 usando extends
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo
    }
    saludo(a) {
        return a;
    }
    mostrarInfo() {
        return `
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>
        correo: ${this.correo} <br>`;
    }

}

class Estudiante extends Usuario {

}
const ric = new Estudiante("Ric ", 33, 'correo@correo.com');
document.write(ric.mostrarInfo());

EJERCICIO 12
Sobreescribe un constructor heredado y SUPER para traer los valores a la función, también sobre escribe
el metodo que mostrará toda la info, agregandole el valor de empleo
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo
    }
    saludo(a) {
        return a;
    }
    mostrarInfo() {
        return `
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>
        correo: ${this.correo} <br>`;
    }

}

class Estudiante extends Usuario {
    constructor(nombre, edad, correo, empleo) {
        super(nombre, edad, correo);
        this.empleo = empleo;
    }
    mostrarInfo() {
        return `
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>
        correo: ${this.correo} <br>
        correo: ${this.empleo} <br>`;
    }
}
const ric = new Estudiante("Ric ", 33, 'correo@correo.com', 'Angular Developer');
document.write(ric.mostrarInfo());

EJERCICIO 13
Imprime un metodo estatico
class Persona {
    static loQueSea() {
        console.log("Hola mundo");
    }
}

console.log(Persona.loQueSea());

EJERCICIO 14
Crear multiples constructores en una clase y como usarlos
Esto es bastante útil cuando hacemos peticiones http y queremos crear en base a la respuesta
http alguna clase o alguna instancia de mi clase 

class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        //Este metodo estatico crea una nueva instancia de mi persona utilizando el constructor pero recibiendo un argumento diferente
        //regreso una nueva instancia de persona pero creando este metodo estatico
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const ric = {
    nombre: 'Ricardo',
    apellido: 'Garrido',
    pais: 'Canada'
}

const persona1 = Persona.porObjeto(ric);
persona1.getInfo();
 */
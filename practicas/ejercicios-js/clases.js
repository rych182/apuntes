/*
Notas:
-Los constructores se ejecutan en automático
-Se hereda usando la palabla extends
-La palabra SUPER es usada para acceder y llamar funciones del padre de un objeto.
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

Ejercicio 6
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
 */
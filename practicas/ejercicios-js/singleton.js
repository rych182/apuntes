/**
 * Singleton: Una instancia unica de mi clase, 
 * Ejmplo: Tenemos una clase donde solo queremos tener una unica instancia global en toda la
 * aplicacion, entonces no importa donde inicialice mi clases, siempre voy a retornar la 
 * misma instancia, esto es útil cuando quiero compartir información a lo largos de la app
 * ó base de datos 
 * 
 */

class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {

        if (!!Singleton.instancia) { //comprueba si ya existe una instancia ahí, 
            return Singleton.instancia; //le asigno esto.
            //si ejecut el return, ya no ejecuta las lineas de abajo
        }
        //Si la instancia no existe, la asigno de esta manera
        Singleton.instancia = this; //Esta haciendo referencia a la instancia "const instancia1 = new Singleton('Fulano', 'Sutano');", no importa que tenga 1 o muchos valores
        this.nombre = nombre;
        return this;
    }
}

const instancia1 = new Singleton('Fulano');
const instancia2 = new Singleton('Sutano');
const instancia3 = new Singleton('Mengano');
console.log(instancia1.nombre);
console.log(instancia2.nombre);
console.log(instancia3.nombre);
//Todo esto sirve para ahorrar memoria ya que todas estas instancias apuntan exactamente
//al mismo espacio de memoria, al mismo objeto, por lo tanto todas sus propiedades, valores
//y metodos va a hacer y apuntar al mismo lugar

//VOLVER A VER EL VÍDEO
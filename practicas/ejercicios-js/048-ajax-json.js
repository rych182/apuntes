/*
AJAX significa Asynchronous JavaScript And XML. En pocas palabras,
es el uso del objeto XMLHttpRequest para comunicarse con los servidores.

tanto fetch como AJAX son técnicas que permiten hacer peticiones HTTP asíncronas a un servidor, 
lo que significa que puedes obtener o enviar datos sin tener que recargar la página

XML: era un lenguaje de marcado y fue relegado por JSON, se utilizaba 
para el intercambio de información, cualquier lenguaje backend puede
leer archivos JSON y XML.

AJAX comenzo trabajar con XML para la carga de nuevo contenido.

AJAX fue creado por MICROSOFT
XMLHttpRequest ya es un objeto obsoleto, se utilizaba en internet explorer 8 hacia abajo
https://code.jquery.com/jquery-1.12.4.js


AJAX no es una tecnología en sí mismo. En realidad, se trata de varias tecnologías independientes que se unen:

    HTML y CSS, para crear una presentación basada en estándares.
    DOM, para la interacción y manipulación dinámica de la presentación.
    HTML, XML y JSON, para el intercambio y la manipulación de información.
    XMLHttpRequest o Fetch, para el intercambio asíncrono de información.
    JavaScript, para unir todas las demás tecnologías.



Estados de una petición asincrona 	                                        Valor

READY_STATE_UNINITIALIZED(estado de no inicialización) 	                    0
READY_STATE_LOADING(estado de cargando, donde envía los datos al servidor)  1
READY_STATE_LOADED(cargado,ya el servidor respondio al cliente, 
pero aún no tiene la info lista para que empecemos a interactuar)           2
READY_STATE_INTERACTIVE(el motor de js ya empieza a interactuar porque ya
tiene los datos de esta petición)                                           3
READY_STATE_COMPLETE(cuando ya ha terminado todo el proceso de AJAX osea
el objeto XMLHttpRequest hace la peticion, el servidor responde de que ya
tiene los datos listos para que nosotros lo manipulemos y mostremos la info)4



Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente 
una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

    -Respuestas informativas (100–199),
    -Respuestas satisfactorias (200–299),
    -Redirecciones (300–399),
    -Errores de los clientes (400–499),
    401(no autorizado), 403(forbidden), 404(not found)
    -Errores de los servidores (500–599)
    500 (internal server), 502(cuando has superado el ancho de banda).
    
    https://developer.mozilla.org/es/docs/Web/HTTP/Status
    

api.github.com/rych182
https://api.github.com/users/rych182

Instalar pluggin del navegador "JSON FORMATTER"



JSON: Es un formato: notación de objeto json, es un formato ligero de
intercambio de datos.
Ejemplo: no se entiende un e-commerce con php con el banco que esta
hecho en phyton, json es lo que hace que se entiendan, se comunican
por formato JSON si fue exitoso o hay error, php lo manda en json y el sistema en phyton
lo recibe y el texto lo convierte a datos que pueda entender el backend

Antes de JSON existía XML, un lenguaje de marcado, por ejemplo,el sat todavía
usa archivos XML

Es como un objeto de JS y acepta muchos tipos de datos como:
string,number,object,array,booleans,nulls.(pero todo lo pones en cadena de texto, numeros y booleas tambien)
Los mejores lenguajes tienen soporte para JSON.

Toda las propiedades en JSON llevan DOBLES COMILLAS, no acepta otra
JSON es una "interfaz de lenguaje", para verificar esto pones:
console.log(JSON)

y tiene 2 metodos:
- JSON.parse() //analiza una notación JSON(texto) y lo convierte a un tipo de dato que JS entienda
como (numero,boolean,arreglo etc), undifined NO ES VALIDO
Ejemplo:
console.log("{}")
console.log(JSON.parse("{}"))
let dato = JSON.parse("true");
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("123"))
console.log(typeof dato)

USA COMILLAS SIMPLES para ENCAPSULAR y quita los espacios para que no marque errores, ejemplo:
let prueba = JSON.parse('{"nombre":"ric","edad":"38","estadoCivil":"true","amigos":{"secu":["daniel","mengano","sutano"],"prepa":["jess","nacho","ruben"]}}')
console.log(typeof prueba)


- JSON.stringify(): convierte los tipos de datos a texto
let dato = JSON.stringify({nombre:"ric"})
console.log(dato)//fijate como te pone doble comilla

let datoSin = {
    "nombre":"ric",
    "edad":"38",
    "estadoCivil":"true",
    "amigos":{
        "secu":["daniel","mengano","sutano"],
        "prepa":["jess","nacho","ruben"]
    }
};

let datoJson= JSON.stringify({
    "nombre":"ric",
    "edad":"38",
    "estadoCivil":"true",
    "amigos":{
        "secu":["daniel","mengano","sutano"],
        "prepa":["jess","nacho","ruben"]
    }
})
console.log(datoJson)
console.log(typeof datoJson)
console.log(typeof datoSin)


AJAX se ejecuta EN UN SERVIDOR WEB, porque trabaja tanto del lado del cliente como del servidor
osea, debe usar el protocolo "HTTP" para que te aparezca el "localhost" y no el protocolo "files"


API: Application Programming Interface
El DOM es una API interna, AJAX también es una API
También existen API's externas como servicios, plataformas, redes sociales


Mejor API para practicar AJAX y consumo e API's
https://jsonplaceholder.typicode.com/

DESCARGAR JSONVIEW en Google Chrome

Se puede consumir API's externas como archivos JSON en mi computadora

Lo voy a hacer en una función anonima autoejecutable para que no afecte los ejercicios que usaran
fetch(también es una API) y axios

En JAVASCRIPT todas las variables que empiecen con SIGNO DE DOLLAR, hacen referencia a el DOM

Beneficios de usar .createDocumentFragment();
Reducción de reflujo y redibujos: Solo hay un cambio en el DOM al insertar el fragmento, 
en lugar de 100 actualizaciones en el ejemplo anterior.

Para que funcione nuestro objeto XMLHttpRequest necesitas 4 cosas:
1- XMLHttpRequest debe tener una instacia con "new"
2- asignar un evento
3-abrir la petición, asignando el metodo por el que lo vamos a hacer y ponerle la url(
también se le conoce como ENDPOINT)
4-envío de datos

checa en consola el objeto const xhr = new XMLHttpRequest() para que veas todos los "EVENTOS" que tiene.
El evento "mas importante" que tiene es: onreadystatechange , porque internamente detecta todos los demás.

El evento readystate es el estado de la petición, el que puse arriba con sus 5 estados

El evento "response" es el que me va a arrojar el servidor  
El evento "responseText" devuelve la respuesta en formato textual
El evento "responseXML" devuelve la respuesta en formato XML

Status es la respuesta del estado HTTP(200,300,404 etc)
withCredentials es el status de una API privada, para saber si estamos conectados o no
hacia los recursos que podemos utilizar

-----------------------------------------------------------------------------------------------------
//Exercise 1
(()=>{
    const xhr = new XMLHttpRequest(),
    //estas variables las usaré para manipular el DOM
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();//es una sola insecion en vez de cientos con el appenChild

    //readystatechange se lanza cuando detecta cualquier cambio en el estado
    //ya sea que la petición se haya abortado, lanzado un error, completado etc
    //por eso digo que todos los eventos de AJAX residen en readystatechange
    //console.log(xhr) aquí puedes ver lo que tiene el objeto
    //La "e" es el evento
    xhr.addEventListener('readystatechange', e =>{
        //le asignamos el o los eventos que queremos manipular
        //aquí iriá la lógica de la programación
        //console.log(xhr)
        //nos imprime 4 veces el objeto porque son los 4 estados de petición por los que pasa, exceptuando el 0
        //en los 4 dice 4, porque cuando se lanza en la consola, ya ha sido completada la petición
        if (xhr.readyState !== 4) return; // si no es readyState 4, no retornes nada
        // se ejecute solo cuando la propiedad readyState el estado sea 4
        //ya que este cargado puedo hace una manipulación en el DOM
        //console.log(xhr);el console solo es para ejemplo
        //checa en el status 200, y el texto
        
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("exito")
            //console.log(xhr.responseText);//la peticion nos envía la respuesta en formato JSON
            //para imprimir en el html
            //$xhr.innerHTML = xhr.responseText;
            //Tengo que convertir la respuesta en formato JSON
            let json = JSON.parse(xhr.responseText)
            //console.log(json)//detecta el arreglo de 10 elementos
            
            //crea una etiqueta <li> y muestra datos de cada 1 de los 10 objetos
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            //esto pone cada etiqueta li en el id que se encuentra de $xhr
            $xhr.appendChild($fragment)
            console.log(xhr)
        } else {
            //Esto se ejecuta cuando el status es diferente del 200-299
            //por si hay un error en la url o el statusText viene vacío
            console.log("error")
            let message = xhr.statusText || "Ocurrio un Error"; //Creamos una variable porque no siempre aparece el mensaje de error
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
    })

    //open abre la instrucción
    //parametro1:el metodo por el cual vamos a comunicarnos GET,POST/PUT,HEAD,TRACE
    //GET atraves de la url, POST atraves de la cabecera del documento
    //parametro 2: la url de la API
    //xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.open("GET","044-ajax/datos.json");//checa la ruta del recurso en el objeto xhr en response.url
    
    //prueba https://jsonplaceholder.typicode.com/ERRORORTOGRAFICO para que veas el objeto vacio y el status 404 
    //Enviamos la petición
    xhr.send();
})()



Ejercicio de TWITTER, usas AJAX y se actualiza cada 20segundos
https://x.com/notifications


Usos comunes de appendChild()

    Añadir contenido dinámico: Ideal para añadir contenido en respuesta a eventos del usuario, como hacer clic en un botón.
    Actualizar la interfaz: Útil para manipular la interfaz de una aplicación web sin recargar la página.
    Trabajar con listas: Puede agregar elementos a listas de forma dinámica, como en menús desplegables, listas de tareas, etc.
----------------------------------------------------------------------------
EXERCISE 2
*/
let showCountries = () =>{
    let xhr = new XMLHttpRequest()
    //open es lo que usamos para inicializar la solicitud
    xhr.open("GET","https://restcountries.com/v3.1/all",true)
    //onload sirve para el manejo de la respuesta
    xhr.onload = function (){
        if(xhr.status == 200 ){
            //console.log("exito")
            let paises = JSON.parse(this.response)
            paises.forEach(pais =>{
                console.log(pais)
                const countrycard = document.createElement("div");
                const countrycardimg = document.createElement("img");


                countrycard.innerHTML = pais.name.common;
                countrycardimg.src = pais.flags.png;

                countrycard.appendChild(countrycardimg);
                document.getElementById("feed").appendChild(countrycard)

            })
        }
    }
    xhr.send();
}

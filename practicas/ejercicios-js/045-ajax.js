/*
AJAX significa Asynchronous JavaScript And XML. En pocas palabras,
es el uso del objeto XMLHttpRequest para comunicarse con los servidores.

XML: era un lenguaje de marcado y fue relegado por JSON, se utilizaba 
para el intercambio de información, cualquier lenguaje backend puede
leer archivos JSON y XML.

AJAX comenzo trabajar con XML para la carga de nuevo contenido.

El atractivo de AJAX es su naturaleza "asíncrona",
lo que significa que puede comunicarse con el servidor,
intercambiar datos y actualizar la página sin tener que recargar el navegador.

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
*/
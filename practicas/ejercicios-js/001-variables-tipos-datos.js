//JON MIRCHA CHAPTER 9: NULL, UNDIFINED Y NAN: LISTO



/*
DATOS PRIMITIVOS
Number: Números enteros y de punto flotante, como 1, 3.14, -10, etc.
String: Secuencias de caracteres, como "Hola mundo", 'JavaScript', etc.
Boolean: Representa un valor lógico verdadero o falso, es decir, true o false.
Null: Representa la ausencia intencional de cualquier valor o valor nulo.
Undefined: Representa un valor no definido. Se asigna automáticamente a las variables que no se han inicializado.
NaN se utiliza para representar un valor numérico que no es un número válido según la especificación de JavaScript. Este valor se genera típicamente como resultado de operaciones aritméticas inválidas, como dividir cero por cero o tratar de convertir una cadena no numérica en un número.
Symbol: Introducido en ECMAScript 6 (ES6), representa un identificador único e inmutable.
bigint; es un tipo de dato primitivo introducido en ECMAScript 2020. Este tipo de dato se utiliza para representar números enteros arbitrariamente grandes, que van más allá del límite de precisión que proporciona el tipo de dato number.

Object: Es un tipo de dato "no primitivo",  llamado Object, que puede almacenar colecciones de datos y funciones.
funciones: son un tipo de dato "no ´primitivo"
clases:
*/

//Null:Representa un valor ausente, es decir, una variable que no tiene valor PERO se utiliza
//para indicar la ausencia de un valor asignado de manera "intencional", para decir que "esta vacía".
//Undifined:Representa un valor ausente, es decir, una variable que no tiene valor PERO esta es una variable que no ha sido inicializada.
//Osea una variable que no se le asigno valor y que aparte no se le asigno ninguno cuando se creo,
//entonces cuando javascript detecta una variable no tiene valor, le asigna "undefined"
//NaN: cuando quieres hacer una operación aritmetica con un dato que no es un número.

//True y False se toman como 1 y 0
//Undifined NO ES un número, define algo que no es un valor
//Infinity es un valor especial que se utiliza para representar matemáticamente un número que es mayor
//que cualquier otro número posible en JavaScript.Infinity es un tipo de dato primitivo(number)

//null se utiliza específicamente para indicar la ausencia de un valor asignado de manera "intencional", para decir que "esta vacía".
//null es diferente de undefined. undefined se utiliza cuando una variable no tiene un valor asignado o cuando se intenta acceder a una propiedad inexistente

/* Explicación infinity
JavaScript interpreta esto como una operación que tiende hacia el infinito positivo o negativo, 
dependiendo del signo del número. En este caso específico,
true se convierte internamente en 1 al ser tratado como un número en una operación matemática,
y null es interpretado como 0 en este contexto. Entonces, 1 / 0 resulta en Infinity.
 
------------------------------------

EXPLICACIÓN DE NULL

NULL NO ES OBJECT
EXPLICACION Y EJEMPLO DE NULL
let num1 = null;
console.log(typeof num1)

Originalmente, en JavaScript, typeof null devolvía 'object', lo cual era incorrecto. 
Este fue un error en la implementación inicial de JavaScript en los navegadores de Netscape
y fue replicado en otras implementaciones para mantener la compatibilidad. 
Sin embargo, esto se considera un error de diseño de JavaScript
y no es representativo de cómo se trata null en el lenguaje.

En realidad, null es un valor primitivo en JavaScript y no un objeto.
La función typeof null ahora devuelve 'object' por razones de compatibilidad con versiones anteriores,
pero en términos precisos, null es un tipo de dato primitivo y no un objeto.
Para verificar si un valor es null, lo mejor es usar una comparación estricta (===) con null. 

Por ejemplo:
var myVar = null;
if (myVar === null) {
    console.log("myVar es null");
} else {
    console.log("myVar no es null");
}
--------------------------------------
"use strict"
Es una opción disponible en JavaScript que restringe ciertas acciones,
hace que el código sea más seguro y ayuda a evitar errores comunes. Para activar el modo estricto,
simplemente agregue el siguiente código al principio de su archivo JavaScript o de una función específica:
'use strict';

Restricciones que se aplican en el modo estricto:
-La creación de variables sin declarar con "var", "let" o "const" arrojará un error.
-La asignación a propiedades de solo lectura arrojará un error.
-El uso de palabras clave reservadas como "eval" y "arguments" como nombres de variables arrojará un error.
-Las funciones no pueden tener parámetros o nombres de parámetros duplicados.
-No se puede eliminar una variable, función o argumento de función.

El modo estricto es una buena práctica recomendada para escribir un código más seguro y
prevenir errores comunes.


Algunos casos comunes en los que se utiliza el valor null incluyen:
-Cuando se inicializa una variable y aún no se le ha asignado ningún valor.
-Cuando se quiere indicar que una propiedad de un objeto no tiene un valor asignado.
-Como un valor de retorno para indicar que una función no ha encontrado un resultado válido.
Es importante tener en cuenta que null es un valor asignable, 
lo que significa que una variable puede ser explícitamente establecida en null.
Sin embargo, también es importante tener en cuenta que null se evalúa como "falso en contextos booleanos",
lo que significa que una expresión que contiene null se considera falsa en una evaluación booleana.

Por ejemplo:
La expresión if (null) se evalúa como falsa,
lo que significa que el bloque de código dentro del if no se ejecutará.

EJEMPLO DEL TIPO DE DATO NULL
Un ejemplo práctico en el que se podría utilizar el valor null en JavaScript es en la creación de un objeto person con propiedades opcionales, como middleName.
Supongamos que queremos crear un objeto que represente a una persona con un nombre, un apellido y un posible segundo nombre. Si no se proporciona un segundo nombre, podemos establecer la propiedad middleName en null para indicar que no se ha proporcionado un valor.

let person = {
  firstName: 'Juan',
  lastName: 'Pérez',
  middleName: null
};

console.log(person.middleName); // null

---------------------------------------------
PALABRAS RESERVADAS QUE NO SE PUEDEN USAR
Esto debido a que te marcaría error o te puede afectar en el desarrollo de tu proyecto
Por ejemplo: 
var breack = true;
console.log(break); // unexpected token break

var abstract = true;
console.log(abstract) // true, si se puede cambiar pero no deberías hacerlo

abstract
boolean
break
byte
case
catch
char
class
const
continue
debugger
default
delete
do
double
else
enum
export
extends
false
final
finally
float
for
function
goto
if
implements
import
in
instanceof
int         //int no daría un error
interface
long
native
new           //  si da error
null
package
private
protected
public
return
short
static
super
switch
synchronized
this            //da error
throw
throws
transient
true
try
typeof
var
void
volatile
while
with

------------------------------------------------------------

console.log(undefined + 'hola');//undifinedhola
console.log(undefined * 'hola');//NaN
console.log(undefined + true);//NaN
console.log(undefined - true);//NaN
console.log(undefined + 1);//NaN
console.log(undefined + null);//NAn
console.log(undefined + undefined);//NaN
console.log(undefined + []);//Undefined
console.log(undefined + {});//Undefined[object object]
console.log(undefined * []);//Nan
console.log(undefined * {});//Nan
console.log("-----------------------------");
console.log(undefined + 'hola');//undifinedhola
console.log(null + 'hola');//nullhola
console.log(null *1);//0, NaN no tiene valor
console.log(null + true);//1
console.log(null +false);//0
console.log(null *[]);//0
console.log(null *{});//Nan
console.log(null + null);//0
console.log(null + undefined);//NaN
console.log(null +[]);//Null
console.log(null + {});//Null [object object]
console.log("-----------------------------");
console.log([]+'hola');//"hola"
console.log([]*'hola');//Nan
console.log([]+1);//"hola"
console.log([]*1);//0
console.log([]+false);//false
console.log([]+true);//true
console.log([]+null);//null
console.log([]*null);//0
console.log([]+undefined);//undifined
console.log([]*undefined);//Nan
console.log([]+{});//[object object]
console.log([]*{});//Nan
console.log("-----------------------------");
console.log({}+'hola');//[object object]"hola"
console.log({}*'hola');//Nan
console.log({}+2);//[object object]2
*/

/*


Ejercicio 1: Imprimir con template strings(las comillas se llaman tildes invertidas)
let name = "Ricardo";
let age = 33;
let country = "Mexico";
console.log(`My name is ${name} I am ${age} and I am from ${country}`);

Ejercicio 2:  Explicar orden de ejecucion de los archivos  JS

EJERCICIO 3: Declarar constantes e imprimirlas
const caja = 21;
console.log(caja);
 
EJERCICIO 4: declara un array e imprimelo
let cadena = ["Mexico", "USA", "Canada"];
console.log(cadena);

=========SE RECOMIENDAN PARA IR DESARROLLANDO LA LÓGICA, SE LOS PUEDES ENSEÑAR DESPUÉS DE VER FUNCIONES===========
Ejercicios con distintos tipos de datos
Ejercicio 6: que imprime en la consola
console.log(1+2+3);
console.log('1'+2+3);//123
console.log(1+2+'3');//
console.log(1+2+3)
console.log(1+2+"3"+4+5+6)//33456
------------------------------------------------
Ejercicios con distintos tipos de datos
Ejercicio 7: que imprime en la consola

console.log(("1"+4)+2+3)//145
console.log(('1'+5)+(2+3))//155
console.log(('1'+6)+(2+4)+(5+'7'))//16657
-----------------------------------------------------
Ejercicios con distintos tipos de datos
Ejercicio 8: que imprime en la consola

console.log(true+'1')//true1
console.log((false+3)+'4'+false+(8+9));//34false17
console.log(false+1)//0+1 =
console.log(true*8)//1*8 = 8
console.log("hola"*2)//NaN(Not a Number)
console.log("mundo"-2)//NaN
console.log(2*4-("hola"))//NaN
console.log(true-"mundo")//NaN
console.log(NaN + true)//NaN
console.log(null + true)//1
console.log(null + "hola")//nullhola
console.log(null + 4)//4
console.log(null + 0)//0
------------------------------------------------------------------
console.log(true+'1')//true1
console.log(true-'1')//0
console.log(true*'1')//1
console.log(false*'1')//0
console.log(true*1)//1
console.log(true+1)//2
console.log(false+1)//1
//True se toma como número pero  "undifined" no es un número
console.log(true+undefined)//Nan
console.log(true+NaN)//Nan
console.log(true+null)//1
console.log(true+true)//2
console.log(true+false)//1
console.log(true*false)//0
console.log(true/false)//infinity
console.log(true/0)//infinity
 JavaScript interpreta esto como una operación que tiende hacia el infinito positivo o negativo, 
dependiendo del signo del número. En este caso específico,
true se convierte internamente en 1 al ser tratado como un número en una operación matemática,
y null es interpretado como 0 en este contexto. Entonces, 1 / 0 resulta en Infinity.
 
console.log(true/null)//Infinity

----------------------------
  Ejercicio 10: que error marca(error de sintaxis)
  'use strict';
let x = 021;
----------------------------------------------------------



*/
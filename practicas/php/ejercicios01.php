<?php







/*LISTA DE EJERCICIOS
0-Usar variable de ambito global dentro de una función
0.1-Usar llaves en una variable con un echo
1-imprimir una propiedad pública
2-llenar una propiedad vacía desde afuera de la clase
3-crear un objeto con un metodo público
4-Crea un objeto que de un valor al metodo desde afuera de la clase
5-Crea un objeto constructor
6-Crea un objeto constructor que de un valor al constructor desde afuera de la clase
7-Crear un objeto que imprima el metodo publico y el metodo usará la propiedad pública usando THIS
8-Crear un objeto que imprima el metodo publico pero dandole el valor desde afuera en los parentesis y el metodo usará la propiedad pública usando THIS
9-Crear un objeto que muestre una propiedad privada, metiendola en un metodo público usando $THIS
10-Crear un objeto que muestre un metodo privado, metiendolo dentro de un metodo público usando $THIS
11-hacer un objeto que herede algo 
12-Hacer un objeto que herede un metodo privado
13-Hacer un objeto que herede otra clase ya heredada (una tercer clase)
14-Hcaer un objeto que herede un metodo protegido 
15-Hacer un objeto que utilice parent::
16-Utilizar una clase usando STATIC
17-hacer una clase que sume, reste, multiplique y divida
18-Hacer suma,resta,multiplicación y división usando IF-ELSE 
19-Hacer suma,resta,multiplicación y división usando SWITCH-CASE-BREAK 
20-use el IF CORTO, que compare país y muestre su divisa
21-use el IF CORTO, que compare mayoría de edad 
22-Ejemplificar un for
23-Ejemplificar un FOREACH 
24-FOREACH con un array asociativo que sume
25-Hacer un ciclo con foreach con nombres 
26-Sumar, restar, multiplicar y dividir un array con FOR y IF/ELSE  
27-Sumar, restar, multiplicar y dividir un array con FOR y Switch 
28-SWITCH y FOREACH con arreglo asociativo , suma, resta, multiplicacion y division
29-IF-ELSE y FOREACH, suma, resta,multiplicacion y division
30-Hacer un bucle con WHILE 
31-Hacer un bucle con DO-WHILE 

*/



/*	================= EJERCICIO 0 ==============================

$rosa = 'Color';
function test(){
	global $rosa;
	echo $rosa;
}
test();
*/

/*	================= EJERCICIO 0.1 ==============================

$var = "codigo";
echo "Hola {$var} facilito";
*/

/*	================= EJERCICIO 32 ==============================
*/

/*	================= EJERCICIO 32 ==============================
*/

/*	================= EJERCICIO 32 ==============================
*/

/*	================= EJERCICIO 32 ==============================
*/

/*	================= EJERCICIO 32 ==============================
*/




/*	================= EJERCICIO 1 ==============================
1-imprimir una propiedad pública

class perro
{
	public $color = "negro";	
}
$objeto = new perro();
echo $objeto->color;
*/

/*	================= EJERCICIO 2 ==============================
2-llenar una propiedad vacía desde afuera de la clase

class perro
{
	public $color;
}
$objeto = new perro();
$objeto->color="negro";
echo $objeto->color;

*/


/*	============ EJERCICIO 3 =============
3-crear un objeto con un metodo público
class perro
{
	
	public function gigante()
	{
		echo "Soy un San Bernardo";
	}
}
$objeto = new perro();
$objeto->gigante();
*/


/*	================= EJERCICIO 4 ==============================
4-Crea un objeto que de un valor al metodo desde afuera

class perro
{
	public function grandes($variable)
	{
		echo $variable;
	}
}

$objeto = new perro();
$objeto->grandes("Soy un gigante de los pirineos");
*/


/*	================= EJERCICIO 5 ==============================
5-Crea un objeto constructor

class perro
{
	
	function __construct()
	{
		echo "Soy un constructor";
	}
}
$objeto = new perro();

//Tambien este otro ejemplo

class pinshiClase
{
	public $nombre;
	public $apellido;
	public $edad;
	function __construct($nombre,$apellido,$edad)
	{
		echo $this->nombre=$nombre;
		echo $this->apellido=$apellido;
		echo $this->edad=$edad;
	}
}
$objeto= new pinshiClase("Ric","Garrido", 32);


*/

/*	================= EJERCICIO 6 ==============================
6-Crea un objeto constructor que de un valor al constructor desde afuera de la clase

class perro
{
	
	function __construct($var)
	{
		echo $var;
	}
}
$objeto = new perro("Soy un constructor dando el valor de la variable desde afuera de la clase");
*/

/*	================= EJERCICIO 7 ==============================
7-Crear un objeto que imprima el metodo publico y el metodo usará la propiedad pública usando THIS

class perro
{
	public $color = "black";
	public function metodo()
	{
		echo "El perro es de color " . $this->color;
	}
}
$objeto = new perro();
$objeto->metodo();
*/

/*	================= EJERCICIO 8 ==============================
8-Crear un objeto que imprima el metodo publico pero dandole el valor desde afuera en los parentesis y el metodo usará la propiedad pública usando THIS

class perro
{
	public $color = "black";
	public function metodo($var)
	{
		echo $var . $this->color;
	}
}
$objeto = new perro();
$objeto->metodo("Mamá soy chanita de color ");
*/

/*	================= EJERCICIO 9 ==============================
9-Crear un objeto que muestre una propiedad privada, metiendola en un metodo público usando $THIS

class perro
{
	private $color = "black";
	public function metodo()
	{
		echo  $this->color;
	}
}
$objeto = new perro();
$objeto->;
*/

/*	================= EJERCICIO 10 ==============================
10-Crear un objeto que muestre un metodo privado, metiendolo dentro de un metodo público usando $THIS
class perro
{
	private function metodo()
	{
		echo "Hola mundo";
	}
	public function metodo2()
	{
		echo $this->metodo();
	}
}
$objeto = new perro();
$objeto->metodo();
*/

/*	================= EJERCICIO 11 ==============================
	
class perros
{
	function __construct($var)
	{
		echo $var;
	}
}

class gatos extends perros
{
	
}
$objeto = new gatos("cat-dog");

*/

/*	================= EJERCICIO 12 ==============================

class perros
{
	private function pequeno()
	{
		echo "Soy un Chihuahua";
	}
	public function mediano()
	{
		echo $this->pequeno()."<br>";
		echo "Soy un lobiro";
	}
}

class gatos extends perros
{
	
}
$objeto = new gatos();
$objeto->mediano();
*/

/*	================= EJERCICIO 13 ==============================

class perros
{
	private function pequeno()
	{
		echo "Soy un Chihuahua";
	}
	public function mediano()
	{
		echo $this->pequeno()."<br>";
		echo "Soy un lobiro llamado Toribio";
	}
}

class gatos extends perros
{
	
}

class plantas extends gatos
{
	
}
$objeto = new plantas();
$objeto->mediano();
*/

/*	================= EJERCICIO 14 ==============================

class perros
{
	private function pequeno()
	{
		echo "Soy un Chihuahua";
	}
	public function mediano()
	{
		echo $this->pequeno()."<br>";
		echo "Soy un lobiro llamado Toribio";
	}
	protected function grande()
	{
		echo "Soy un Gigante de los pirineos";
	}
}

class gatos extends perros
{
	public function flacos()
	{
		echo $this->grande() . " y me caen bien los gatos siameses";
	}
}

class plantas extends gatos
{
	
}
$objeto = new plantas();
$objeto->flacos();
*/

/*	================= EJERCICIO 15 ==============================

class perros
{
	
	private function pequenos()
	{
		echo "Soy un Chihuahua";
	}

	public function gigantes()
	{
		echo $this->pequenos();
	}
	public function medianos()
	{
		echo "Soy un Galgo";
	}
}

class gatos extends perros
{
	
	function flacos()
	{
		parent::medianos();
	}
}

$objeto = new gatos();
$objeto->flacos();

*/

/*	================= EJERCICIO 17 ==============================

class operacionesMatematicas
{
	public function suma($unArray)
	{
		$resultado = $unArray[0] + $unArray[1];
		return $resultado;
	}
	public function resta($unArray)
	{
		$resultado = $unArray[0] - $unArray[1];
		return $resultado;
	}
	public function multiplicacion($unArray)
	{
		$resultado = $unArray[0] * $unArray[1];
		return $resultado;
	}
	public function division($unArray)
	{
		$resultado = $unArray[0] / $unArray[1];
		return $resultado;
	}
}

$unArray = array(2,3,4,5);
$objeto = new operacionesMatematicas();
echo $objeto->division($unArray);
*/

/*	================= EJERCICIO 18 ==============================

class operacionesMatematicas
{

	public function operacion($operacion = 'suma',$unArray)
	{
		if ( $operacion == 'suma') {
			$resultado = $unArray[0] + $unArray[1];
		}elseif ($operacion == 'resta') {
			$resultado = $unArray[0] - $unArray[1];
		}elseif ($operacion == 'multiplicacion') {
			$resultado = $unArray[0] * $unArray[1];
		}elseif ($operacion == 'division') {
			$resultado = $unArray[0] / $unArray[1];
		}else{
			echo "Esta operación no existe";
		}
		return $resultado;
	}
}
$unArray = array(2,3,4,5);
$objeto = new operacionesMatematicas();
echo $objeto->operacion('resta',$unArray);
*/

/*	================= EJERCICIO 19 ==============================

	public function suich($tarea,$cadena)
	{
		switch ($tarea) {
			case 'suma':
				$resultado = $cadena[0] + $cadena[1];
				return $resultado;
				break;
			case 'resta':
				$resultado = $cadena[0] - $cadena[1];
				return $resultado;
				break;
			case 'multiplicacion':
				$resultado = $cadena[0] * $cadena[1];
				return $resultado;
				break;
			case 'division':
				$resultado = $cadena[0] / $cadena[1];
				return $resultado;
				break;
		}
	}
$cadena = array(4,5,6,7);
$objeto = new operacionesMatematicas();
echo $objeto->suich('division',$cadena);
*/

/*	================= EJERCICIO 20 ==============================

	public function divisasDos($variable)
	{
		$resultado = ($variable == "Mexico")? "Peña coins" :(($variable == "Espana")? "Pesetas": (($variable == "Canada")? "Canadian dollars": "Otra divisa")); 
		return $resultado;
	}
*/

/*	================= EJERCICIO 21 ==============================

	public function INE($edad)
	{
		$variable = ($edad < 18)? "Eres menor de edad" : "Eres adulto";
		return $variable;
	}
*/

/*	================= EJERCICIO 22 ==============================

class operacionesAritmeticas
{
	public function visualizar($datosR,$operacion)
	{
		$resultado=0;	
		$numElemtos = count($datosR);	
		switch($operacion) 
		{
			case "suma":
			for ($a=0; $a < $numElemtos; $a++) { 
			echo "El valor de A es $a. El valor de Resultado es $resultado y el valor que se sumara es:" .  $datosR[$a] . " <br> ";
			$resultado += $datosR[$a];
			}
			break;
		}
		return $resultado;
	}
}

$datos = array(1,2,3,4,5,6,7,8,9);
$objeto = new operacionesAritmeticas();
echo "El valor es: " . $objeto->visualizar($datos,"suma");
*/

/*	================= EJERCICIO 23 ==============================

class ejemplo
{
	public function metodo($cadena)
	{
		$resultado = 1;
		foreach ($cadena as $key) {
			echo "El valor de resultado es $resultado, el valor de key es $key y se le sumara $key <br>";
			$resultado+= $key;
		}
	}
}
$cadena = array(1,2,3,4,5);
$objeto = new ejemplo();
$objeto->metodo($cadena);
*/

/*	================= EJERCICIO 24 ==============================

class operacionesMatematicas
{
	public function metodo($operacion,$numeros)
	{
		$caja = count($numeros);
		$resultado = 0;
		switch ($operacion) {
			case 'suma':
				foreach ($numeros as $key => $value) {
					echo "El valor de resultado es $resultado . El valor del INDICE es: $key y el VALOR del indice que se le sumara a la variable resultado es $value <br>";
					$resultado += $value;
				}
				break;
		}
		return $resultado;
	}
}

$numeros = array("uno"=>1,"dos"=>2,"tres"=>3,"cuatro"=>4,"cinco"=>5);
$objeto = new operacionesMatematicas();
echo $objeto->metodo("suma",$numeros)
*/

/*	================= EJERCICIO 25 ==============================

class mostrar extends operaciones
{
	public function mostrarArreglos($nombres)
	{
		echo "<br>Mi nombre es : " . $nombres[1];
	}
}

$nombres = array(1 => "Pedro" , 2 => "Juana", 3=>"Sutano");
$objeto = new mostrar();
$objeto->mostrarArreglos($nombres);
*/

/*	================= EJERCICIO 26 ==============================
*/

/*	================= EJERCICIO 27 ==============================

class operacionesAritmeticas
{
	public function operaciones($datosR,$operacion)
	{
		$numElemtos = count($datosR);
		echo $numElemtos . "<br>";
		$resultado=0;		
		switch($operacion) 
		{
			case "suma":
			for ($a=0; $a < $numElemtos; $a++) { 
			$resultado += $datosR[$a];
			}
			break;

			case "resta":
			for ($a=0; $a < $numElemtos; $a++) { 
			$resultado -= $datosR[$a];
			}
			break;
			
			case "multiplicacion":
			//Se puso $resultado = $datosR[0]; porque así siempre empezará la operación desde esa posición, porque si pones 1, siempre empezara con 1
			$resultado = $datosR[0];
			for ($a=0; $a < $numElemtos; $a++) { 
			$resultado= $resultado * $datosR[$a];
			}
			break;

			case "division":
			//Se puso $resultado = $datosR[0]; porque así siempre empezará la operación desde esa posición, porque si pones 1, siempre empezara con 1
			$resultado = $datosR[0];
			for ($a=0; $a < $numElemtos; $a++) { 
			$resultado= $resultado / $datosR[$a];
			}
			break;
		}
		return $resultado;
	}
}
$datos = array(1,2,3,4,5,6,7,8,9);
$objeto = new operacionesAritmeticas();
echo "El valor es: " . $objeto->visualizar($datos,"suma");
*/

/*	================= EJERCICIO 28 ==============================

class operacionesMatematicas
{
	public function metodo($operacion,$numeros)
	{
		$resultado = 0;
		switch ($operacion) {
			case 'suma':
				foreach ($numeros as $key => $value) {
					$resultado += $value;
				}
				break;

			case 'resta':
				foreach ($numeros as $key => $value) {
					$resultado -= $value;
				}
				break;		

			case 'multiplicacion':
				$resultado = $numeros["uno"];
				foreach ($numeros as $key => $value) {
					$resultado *= $value;
				}
				break;	

			case 'division':
				$resultado = $numeros["uno"];
				foreach ($numeros as $key => $value) {
					$resultado /= $value;
				}
				break;			
		}
		return $resultado;
	}
}

$numeros = array("uno" => 1,"dos" => 2,"tres" => 3,"cuatro" => 4);
$objeto = new operacionesMatematicas();
echo $objeto->metodo("division",$numeros);
*/

/*	================= EJERCICIO 29 ==============================

class operacionesMatematicas
{
	public function metodo($operacion,$numeros)
	{
		$resultado = 0;
		$caja = count($numeros);
		if ($operacion == "suma") {					
			foreach ($numeros as $key) {
				$resultado += $key;
			}			
		}elseif ($operacion == "resta") {
			foreach ($numeros as $key) {
				$resultado -= $key;
			}
		}elseif ($operacion == "multiplicacion") {
			$resultado = $numeros[0];
			foreach ($numeros as $key) {
				$resultado = $resultado * $key;
			}
		}elseif ($operacion == "division") {
			$resultado = $numeros[0];
			foreach ($numeros as $key) {
				$resultado = $resultado / $key;
			}
		}else{
			echo "Esa operacion no existe";
		}
		return $resultado;
	}
}

$numeros = array(1,2,3,4,5);
$objeto = new operacionesMatematicas();
echo $objeto->metodo("division",$numeros);
*/

/*	================= EJERCICIO 30 ==============================

class guail
{
	public function ciclo()
	{
		$numero = 1;
		while ($numero < 5) {
			echo $numero . "<br>";
			$numero++;
		}

	}
}
$objeto = new guail();
$objeto->ciclo();
*/

/*	================= EJERCICIO 31 ==============================

class guail
{
	public function ciclo()
	{
		$numero = 1;
		do {
			echo $numero . "<br>";
			$numero++;
		} while ($numero < 10);
	}
}
$objeto = new guail();
$objeto->ciclo();
*/

/*	================= EJERCICIO 32 ==============================
*/

/*	================= EJERCICIO 33 ==============================
*/

/*CURSOS POR HORAS

Mas largo : Mircha 1400min = 23hrs 1/2 POO+SQL+CRUD+PROYECTO

segundo mas largo: Pildoras Informáticas 1458 24hrs POO+SQL+CRUD+PROYECTO

Más completo: Victor Robles 1330min 22hrs = POO+ CARRITO + Laravel + Proyecto Laravel

Comunidad de php = POO 13hrs(3 ejercicios por capítulo, se empieza desde al capítulo3) y SQL13hrs

Falcon Masters: complemento 45min
*/

/*

=========================== APUNTES =========================================================00

Tipos de errores

Los errores de PHP tienen 3 partes,
1) el "tipo" de error , que siempre está al principio
2) el mensaje de error, nos proporciona una pista sobre el error
3) el contesto del error, nos dice donde ocurrio

		Los mensajes de error mas populares
Parse error: se genera solo en tiempo de compilación
Fatal error: envia un mensaje de advertencia y detiene la ejecución
Warnind: envia un mensaje de advertencia sin detener la ejecución , a diferencia de error fatal
Notices: Aviso en tiempo de ejecución, aviso o nota de sugerencia, detalles vaya,
 nos indica cual fue el error pero se muestra un parte del resultado, en notices no se detiene la ejecución

 		Constantes

const: const define constantes en tiempo de compilación
define: define constantes en tiempo de ejecución

Dentro de const no puedes utilizar variables ni funciones
pero dentro de define si puedes utilizar variables y funciones

$path= 'cursoPHP/index.php';
define('PATH',$path);
echo PATH1;
define('PATH2',mt_rand());
echo PATH2;

			Forzar tipo de datos

$price = 11.2;
$price=(int)$price;
echo var_dump($price);
//se puede usar bool,int,double

			INTERPOLACION
Es poner una variable dentro de las comillas en un echo

			Llaves en una variable
Sirven para no escribas mal la variable

$var = "codigo";
echo "Hola {$var} facilito";

---------			FUNCIONES MAS USADAS ----------------

gettype($var) = te dice que tipo de dato tiene la varable
var_dump($var) = te dice el tipo de dato y lo que hay dentro
intval($var) = tranforma tu dato a entero
boolval() = tranforma tu dato a boleano
floatval() = tranforma tu dato a flotante
strval() = tranforma tu dato a string

substr("Marines Mendez Gallegos",8,6) = te extrae texti de una cadena de texto 6 casillas a partir de la posicion 8, imprime Mendez, los acentos cuentan como caracter y si usas -8, te agarra los valores empezando desde el final
strpos($var1,$var2) = busca el texto de var2 dentro del texto de var1 y nos muestra su posición , también le puedes agregar a partir de que posición quieres que empiece a buscar strpos($var1,$var2,12)

str_replace($var1,$var2,$var3), remplaza un string por otro
$var1 = "9";
$var2 = "*";
$var3 = "98 93 92";
echo str_replace($var1,$var2,$var3);

---
sprintf($arg1,$arg2,$text);, remmplaza %s por los datos que le pongas, checa documentacion
$arg1=1994;
$arg2="php";
$text="En %s fue creado %s";
---
preg_match($var2,$var1) //Te pone 1 si encuentra una coincidencia y 0 si no
$var1= "Hola mundo";
$var2= "/Hola/";
checar documentacion
---
echo preg_match_all($var2,$var1,$match) //Te devuelve un arreglo con lo que encontro
$var1 = 'Los numeros son 1 4 5 6';
$var2 = '/[0-9]/';
print_t($matches);
CHECAR DOCUMENTACIÓN
//Puedes usarla para fechas y "\" este signo sirve por si no agarrar caracteres
Lo aprendi en codigo facilito capítulo PCRE





*/
<?php 
// Apuntes al final del archivo


interface LaboresMatutinas{ 
	public function levantarme();
	public function asearme();
	public function desayunar();
	public function prepararme();
}

class preparDia implements LaboresMatutinas
{
	//private $hacerCosas;
	public function levantarme()
	{
		echo "Pararme y tender mi cama";
	}
	public function asearme()
	{
		echo "<br>Bañarme y lavarme los dientes";	
	}
	public function desayunar()
	{
		echo "<br>Cocinar mi desayuno, comerlo, lavar trastes y lavarme los dientes";
	}
	public function prepararme()
	{
		echo "<br>Cambiarme, arreglarme e irme";
	}
	public function saludar()
	{
		echo "hola mundo";
	}
}

$objeto = new preparDia();
//LaboresMatutinas::preparDia();
//preparDia::LaboresMatutinas();
$objeto->








/*
class ejercicio
{
	public function metodo($cadena)
	{
		$resultado = 0;
		$num = count($cadena);
		for ($i=0; $i <$num ; $i++) { 
			echo "El valor de resultado es $resultado y su posicion es $i, a resultado se le sumara $cadena[$i] <br>";
			$resultado+=$cadena[$i];
		}
	}
}
$cadena = array(1,2,3,4,5);
$objeto = new ejercicio();
$objeto->metodo($cadena);
*/

/*				23-Interface-Implements

interface LaboresMatutinas{ 
	public function levantarme();
	public function asearme();
	public function desayunar();
	public function prepararme();
}

class preparDia implements LaboresMatutinas
{
	//private $hacerCosas;
	public function levantarme()
	{
		echo "Pararme y tender mi cama";
	}
	public function asearme()
	{
		echo "<br>Bañarme y lavarme los dientes";	
	}
	public function desayunar()
	{
		echo "<br>Cocinar mi desayuno, comerlo, lavar trastes y lavarme los dientes";
	}
	public function prepararme()
	{
		echo "<br>Cambiarme, arreglarme e irme";
	}
	public function saludar()
	{
		echo "hola mundo";
	}
}

$objeto = new preparDia();
$objeto->saludar();

*/








/*EJERCICIO CON DO-WHILE

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



/*EJERCICIO CON WHILE

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

/*
FOREACH con array ASOCIATIIVO

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

/*COMO EJEMPLIFICAR UN FOREACH

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



/*Como ejemplificar un for 

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

$datos = array(1,2,3,4,5,6,7,8,9);
$objeto = new operacionesAritmeticas();
echo "El valor es: " . $objeto->visualizar($datos,"suma");
*/



/*IF-ELSE y FOREACH, suma, resta,multiplicacion y division

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

/* SWITCH y FOREACH con arreglo asociativo , suma, resta, multiplicacion y division


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



/* SWITCH y FOR, para suma resta, multiplicacion y división
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



/*
SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN con SWITCH

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



/*
Mayoria de edad y divisas
NOTA: el IF CORTO, solo sirve para 2 tipos de respuesta o al menos no he visto como se pone el if else

class divisa
{
	public function divisas($variable)
	{
		for ($i=0; $i < 4 ; $i++) { 
			if ($variable[$i] == "Mexico") {
				echo "Peña coins<br>";
			}elseif ($variable[$i] == "España") {
				echo "Pesetas españolas<br>";
			}elseif ($variable[$i] == "Peru") {
				echo "Soles peruanos<br>";
			}elseif ($variable[$i] == "Canada") {
				echo "Dolares canadienses<br>";
			}else{
				echo "Es otra divisa";
			}			
		}
	}

	public function MonedaBananera($moneda)
	{
		$resultado = ($moneda == "Mexico") ? "Peña coins" : "Otra divisa";
		return $resultado;
	}
	

	//IF-ELSE con IF CORTO
	public function divisasDos($variable)
	{
		$resultado = ($variable == "Mexico")? "Peña coins" :(($variable == "Espana")? "Pesetas": (($variable == "Canada")? "Canadian dollars": "Otra divisa")); 
		return $resultado;
	}


	public function INE($edad)
	{
		$variable = ($edad < 18)? "Eres menor de edad" : "Eres adulto";
		return $variable;
	}


}


$edad = 19;
$objeto = new divisa();
echo $objeto->INE($edad);

*/







/*suma,resta,multiplicación y división usando IF-ELSE

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




/*OPERACIONES MATEMATICAS
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











/*Ejercicio ARREGLO ASOCIATIVO

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





/*						EJERCICIO CON STATIC(metodos y propiedades)

class Perro
{
	const saludo = "Hola mundo";
	public static $color = "cafe";
	public static $raza = "Labrador";
	public static function ladrar()
	{
		echo "Gua gua!". self::$color . " " . self::$raza;
	}
}
echo Perro::$color;
//Si quieres acceder a las propiedades de la clase estatica para cambiar algo
$Perro::$color = "rojo";
//Si quieres acceder a la comnstante
$Perro::saludo;

								6.1-Ejercicio clase ABSTRACTA


abstract class Persona
{
	public function saludo()
	{
		echo "Hello World";
	}
}

class Perro extends Persona
{
	
}

$objeto = new Perro();
$objeto->saludo();

								6-Ejercicio con CLASE ESTATICA
class otraClase
{
	public static function metodo()
	{
		echo "Esta madre no tiene objeto";
	}
}

otraClase::metodo();
*/

/*										5.1-HEREDAR CONSTRUCTOR CON PARENT
class PinshiClase
{
	public $nombre;
	public $apellido;
	public $edad;
	function __construct()
	{
		$this->nombre = "ric";
		$this->apellido = 'gar';
		$this->edad = 32;
	}
}

class otraClase extends PinshiClase
{
	public $pais;
	public $ciudad;
	function __construct()
	{
		parent::__construct();
		$this->pais = 'mexalandia';
		$this->ciudad = 'tapatiolandia';
	}
}
$objeto1 = new PinshiClase();
$objeto2 = new otraClase();

var_dump($objeto1);
var_dump($objeto2);
/*





/* 									5-EJERCICIO CON parent::

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







/*
class serVivo
{
	public function respirar()
	{
		echo "Estoy respirando<br>";
		$this->nombre();
	}
	private function nombre()
	{
		echo "Mi nombre es Ricardo<br>";
	}
	protected function metodoProtegido()
	{
		echo "Soy un metodo protegido";
	}
}


class serHumano extends serVivo
{
	public function razonar()
	{
		echo "Estoy razonando<br>";
		echo $this->respirar();
	}
}


class otraClase extends serHumano
{
	function imprimir()
	{
		echo "Soy un intento de doble herencia";
	}
}

//$objeto = new serHumano();
//$objeto->respirar();
//$objeto->razonar();
$objeto = new serHumano();
$objeto->razonar();


*/

/*
TAREAS
1)hacer un objeto que herede algo LISTO
2)Hacer un objeto que herede un metodo privado
3)Hacer un objeto que herede otra clase ya heredada (una tercer clase)
4)Hcaer un objeto que herede un metodo protegido 
5)Hacer un objeto que utilice parent::
5.1)Heredar un constructor usando parent
6)Utilizar una clase usando STATIC 
6.1)Hacer una clase abstracta y utilizarla

7)hacer una clase que sume, reste, multiplique y divida 
8)Sumar, restar, multiplicar y dividir, los valores de un array fuera de una clase, con un metodo   
9)Hacer suma,resta,multiplicación y división usando IF-ELSE 
10)Hacer suma,resta,multiplicación y división usando SWITCH-CASE-BREAK 
11)use el IF CORTO, que compare país y muestre su divisa 
12) use el IF CORTO, que compare mayoría de edad 

TARDE 40MIN , new record 32min

PARTE 2

13)Ejemplificar un FOR 
14)Ejemplificar un FOREACH 
15)FOREACH con un ARREGLO ASOCIATIVO y que sume 
16)Hacer un ciclo con foreach con nombres 

17)Sumar, restar, multiplicar y dividir un array con FOR y IF/ELSE   
18)Sumar, restar, multiplicar y dividir un array con FOR y SWITCH 


19)Implementar el FOREACH e IF-ELSE en las 4 operaciones(suma, resta, multiplicación y division) 
20)Implementar el FOREACH y SWITCH en las 4 operaciones(suma, resta, multiplicación y division)  

21)Hacer un bucle con WHILE 
22)Hacer un bucle con DO-WHILE 	
23)Hacer un ejercicio con interface e implements

TARDE 34MIN


Clases abstractas: sirven para que no las puedas usar a menos que la heredes

Interface :Se utilizan para cosas muy complejas
Es un proceso entero, deben ser usarse los metodos exactos para ese proceso
de lo contrario no se hara una tarea. A diferencia de las abstracciones que
se heredan "forzosamente" si quieres utilizarlas, en las interfaces no se heredan forzosamente, si quieres las usas, si no, no.


*/

?>



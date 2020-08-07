<?php
//GRACIAS DIOS POR MOSTRARME LOS ERRORES



/*
							Ejercicio: Mostrar errores

try{
	if (isset($_GET['id'])) {
		echo "<h1>El parameto de la url es: {$_GET['id']}</h1>";
	}else{
		throw new Exception("Falto el parametro en la URL");		
	}
} catch(Exception $e){
	echo "Ha habido un pinshi error: ". $e->getMessage();
}finally{ //El finally casi no se usa, pero sirve para avisar cuando se acaba esta estructura
	echo "<br>Aquí se acaba";
}

							Ejercicio con toString

class Usuario
{
	public $nombre;
	public $email;

	public function __construct()
	{
		$this->nombre = "Ricardo Garrido";
		$this->email = "ric@hotmail.com";
		echo "Creando objeto<br>";
	}

	public function __toString()
	{
		return "Hello, {$this->nombre} estas registrado con {$this->email}";
	}

	public function __destruct()
	{
		echo "<br>Destruyendo el objeto";
	}
}

$objeto = new Usuario();
echo $objeto;
//echo $objeto->email;


							Ejercicio con trait
trait Utilidades{
	public function mostrarNombre()
	{
		echo "<h1>El nombre es ".$this->nombre."<h1>";
	}
}

class Coche
{
	public $nombre = "Bocho";
	public $marca;
	use  Utilidades;
}

class Persona
{
	public $nombre="Ricardo";
	public $apellidos;
	use  Utilidades;
}

class VideoJuego
{
	public $nombre="Star Craft";
	public $anio;
	use  Utilidades;
}

$coche = new Coche();
$persona = new Persona();
$videojuego = new VideoJuego();

$coche->mostrarNombre();
$persona->mostrarNombre();
$videojuego->mostrarNombre();





/*
class ejemplo
{
	
	function __set($var1,$var2)
	{
		echo "Es valor de la variable 1 es: ".$var1 . " y el valor de la variable 2 es :" . $var2;
	}
}
$objeto1 = new ejemplo();
$objeto1->metodo = "forifai";
*/


// TARDE 13MIN, practicarlo 1,2,3,4,5 para hacerlo 3 veces mas rápido

/*
Flexboxfroggy 
Ejercicios curso flexbox
checar curso Codigo facilito, 1(display), 2(poner imagen de fondo),3(positions), 4(header), 5(transition y animation) 
*/




//Esto sirve para poner reglas indicando que "una variable no existe", "Esta propiedad no se puede utilizar"
// 







/*METODO SET
	public function __set($nombre, $valor)
	{
		echo "Nombre: $nombre y valor: $valor";
		//aquí estoy intentando asignarle a la propiedad 'edad' el valor del número 4
		//se pueden hacer infinidad de reglas que vamos a verificar que se estén ejecutandosu sistema
		//de manera correcta
	}
$objeto1 = new operacionesMatematicas("1");
$objeto1->edad=4;

*/



/*METODO MÁGICO GET


//Se imprimira primero $objeto1->edad
	public function __get($nombrePropiedad)
	{
		echo "Tu estás intentando extraer el valor de la propiedad 'edad', <br>
		debes utilizar el metodo llamada 'obtenerEdad'";
		//Esto se utiliza como metodo de sobre carga de propiedades, para decir que se puede o no hacer
		// y como hacerlo
	}

	$objeto1 = new operacionesMatematicas("1");
	echo "La edad es: " . $objeto1->edad;
*/



/*EJEMPLO metodo mágico CALL, sirve para escribir las reglas que yo quiero que mi clase tenga, para que
cuando un programador ejecute un metodo que no exista o no este a su alcance, lo puedas ejecutar

RESUMEN: usas un metodo que no existe, te lo inventas, y tiene que haber 2 pinshis argumentos dentro del parentesis del metodo mágico

class ejemplo
{	// nombre del argumento/lo que tiene dentro el argumento, esta es la estructura de este metodo mágico
	public function __call($var,$var2)
	{
		if ($var == "suma") {
			$resultado = 1+1;
			echo "El valor de la variable resultado es: $resultado";
		}
		
	}
}
$objeto = new ejemplo();
$objeto->suma();
//CALL se ejecuta en el instante en el que estamos llamando a un metodo que no existe
*/





/* DESTRUCTOR

class Persona
{
	function __construct()
	{
		echo "Hola mundo<br>";
	}
	function __destruct()
	{
		echo "Adios";
	}
}
$objeto = new Persona();
for ($i=0; $i <=10; $i++) { 
	echo $i."<br>";
}

class pinshiClase
{
	
	function __construct($var)
	{
		echo "Soy un constructor $var <br>";
	}
	public function __destruct()
	{
		echo "Aquí te mueres pinshi objeto<br>";
	}
}

$objeto = new pinshiClase("werever");
$objeto2 = new pinshiClase("el crew");
//$objeto2= null;
echo "Soy un codigo <br>";


Ejercicios
1)Destructor
2)Call
3)Get
4)Set
5)Trait ó sobrecarga
6)toString
7)Mostrar excepción o error
8)Hacer un autoload





								NOTAS

trait/sobrecarga: nos permite compartir un metodo en distintas clases sin tener
que heredarlas

construct: no se deben imprimir cosas con el constructor, es mala practica.

{}: Se llama interpolación de variables, para imprimir una variable sin usar comillas

toString: Te permite imprimir el objeto como si fuera un string

AUTOLOAD:
//un Autoload sirve para no hacer muchos require_once en un archivo
//Creas un archivo autoload.php donde meteras esto
function autocargar_clases($clase)
{
	require_once 'clases/'. $class . '.php';
}
spl_autoload_register('autocargar_clases');

//Esto va en el archivo index.php
//Debes tener 3 archivos con 1 clase en cada archivo
require_once 'autoload.php';

$usuario = new Usuario();
echo $usuario->nombre;
echo "<br>";
echo $usuario->email;

$categoria = new Categoria();
echo "<br>".$categoria->nombre;


TIPS:
Propiedades: casi siempre deben de ser privadas

*/


?>
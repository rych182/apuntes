<?php

$server = "localhost";
$usuario= "root";
$pass = "";
$nombreBD = "nuevabase-";



//Estoy creando un objeto con constructor donde irá el servidor, usuario y pass
//$conexion = new mysqli($server,$usuario,$pass,$nombreBD);
//echo gettype($conexion);
//echo var_dump($conexion);




/*Tres maneras de conectarse
1)Manera estructurada, con la FUNCIÓN $conexion=mysqli_connect($server,$usuario,$pass,$nombreBD);

$conexion = mysqli_connect($server,$usuario,$pass,$nombreBD);
if (!$conexion) {//como es una variable tiene por default un valor de TRUE
	echo "La conexion fallo";
	exit()://Mata la conexión
}else{
	echo "La conexión es exitosa<br>". mysqli_get_host_info($conexion);
}


2)Mysqli con una clase

$objeto = new mysqli($server,$usuario,$pass,$nombreBD);
if ($objeto->connect_errno) {
	echo "Fallo la conexion" .$objeto->connect_error;
}

3)PDO (Se puede conectar a diferentes bases de datos)
La clase PDO, tiene muchisimas configuraciones que van hacia el control de las bases de datos


var_dump(PDO::getAvailableDrivers());//getAvailableDrivers() es un metodo estatico que viene en PDO por eso no necesita instanciarse PDO
//PDO (1)tipo de bd, (2)luego el host con el que voy a trabajar, (3)el nombre de la base de datos, (4)la variable de usuario y (5)la variable del password
try {//Validez y verifica, y si hay error, mandalo al catch
	$objetoPDO = new PDO("mysql:host=$server;dbname=$nombreBD;",$usuario,$pass);
} catch (PDOException $lol) {//Pones el tipo de objeto que debe de trabajar, es un cacheo de errores o excepciones
	echo "El error de conexión es: ". $lol->getMessage();
	//Con esto, modificas el mensaje de error, ya no aparece el warning, me permite administrar los errores
	exit();
}
echo "Mi sistema está trabajando";


*/


?>
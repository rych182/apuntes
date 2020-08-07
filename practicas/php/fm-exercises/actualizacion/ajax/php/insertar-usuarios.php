<?php
error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$pais = $_POST['pais'];
$correo = $_POST['correo'];

//validacion, para que el usuario no deje campos vacíos
function validarDatos($nombre, $edad, $pais, $correo)
{
	if ($nombre == '') {
		return false;
	}elseif ($edad == '' || is_int($edad)) {
		return false;
	}elseif ($pais == '') {
		return false;
	}elseif ($correo == '') {
		return false;
	}
		return true;
}

if (validarDatos($nombre, $edad, $pais, $correo)) {//si los datos son validos
	$conexion = new mysqli('localhost','root','','curso_php_ajax');
	$conexion->set_charset('utf8');

	if ($conexion->connect_errno) {
		$respuesta = ['error' => true];
	}else{
		$statement = $conexion->prepare("INSERT INTO usuarios(nombre, edad, pais, correo) VALUES(?,?,?,?)");
		$statement->bind_param("siss",$nombre,$edad,$pais,$correo);
		$statement->execute();

		if ($conexion->affected_rows <= 0) {
			//si las filas son iguales o menores 0 significa que no agregamos ninguna fila
			$respuesta = ['error' => true];
		}
		//Mi respuesta es igual a un arreglo vacio
		$respuesta =[];

	}
}else{//si los datos no son validos
	$respuesta = ['error' => true];
}

echo json_encode($respuesta);

?>
<?php
//Nuestro archivo JSON que lo estamos generando en el archivo de leer-datos.php y podemos traer nuestra info de la base de datos

error_reporting(0);//No se mostraran los posibles errores
header('Content-type: application/json; charset=utf-8');
$conexion = new mysqli('localhost','root','','curso_php_ajax');
if($conexion->connect_errno){
	$respuesta = [
		'error' => true
	];
}else{
	//Trabajar con utf8 tanto para enviar como recibir datos
	$conexion->set_charset("utf8");
	//Hacemos un prepare statement
	$statement = $conexion->prepare("SELECT * FROM usuarios");
	$statement->execute();
	//obtenemos resultados y lo guardamos en $resultado
	$resultados = $statement->get_result();

	$respuesta = [];
	while ($fila = $resultados->fetch_assoc()) {
		$usuario = [
			'id'	=> $fila['ID'],
			'nombre'=> $fila['nombre'],
			'edad'	=> $fila['edad'],
			'pais'	=> $fila['pais'],
			'correo'=> $fila['correo']
		];
		//array_push(); sirve para meter info de un array a otro
		array_push($respuesta, $usuario);
	}
}
echo json_encode($respuesta);

?>
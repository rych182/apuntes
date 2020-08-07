//Definimos todas nuestras variables
var btn_cargar = document.getElementById('btn_cargar_usuarios'),
	error_box = document.getElementById('error_box'),
	tabla = document.getElementById('tabla'),
	loader = document.getElementById('loader');

var usuario_nombre,
	usuario_edad,
	usuario_pais,
	usuario_correo; 

function cargarUsuarios(){
	tabla.innerHTML = ('<tr><th>ID</th><th>Nombre</th><th>Edad</th><th>Pais</th><th>Correo</th></tr>');
	//empezar a trabajar con AJAX
	var peticion = new XMLHttpRequest();
	peticion.open('GET','php/leer-datos.php');
	//activar nuestro spinner de CSS
	loader.classList.add('active');
	//.onload ejecuta una función cuando ya está cargado
	peticion.onload = function() {
		//responseText obtiene los datos del usuario y se tiene que transformar a JSON
		var datos = JSON.parse(peticion.responseText);

		if (datos.error){
			error_box.classList.add('active');
		}else{
			for (var i = 0; i < datos.length; i++) {
				var elemento = document.createElement('tr');
				elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].nombre + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].correo + "</td>");
				tabla.appendChild(elemento);
			}
		}
	}

	peticion.onreadystatechange = function() {
		if (peticion.readyState == 4 && peticion.status == 200) {
			loader.classList.remove('active');
		};
	}
	peticion.send();
}

function agregarUsuarios(e) {
	e.preventDefault();//no queremos que se envie nada hasta que queramos

	var peticion = new XMLHttpRequest();
	peticion.open('POST','php/insertar-usuarios.php');

	//Esto se considera una limpieza de datos muy sencilla
//con .value accedemos al valor y trim para que los espacios vacios al inicio o al final te los borre
	usuario_nombre = formulario.nombre.value.trim();
	//parseInt transforma el valor a entero
	usuario_edad = parseInt(formulario.edad.value.trim());
	usuario_pais = formulario.pais.value.trim();
	usuario_correo = formulario.correo.value.trim();

	if (formulario_valido()) {
		error_box.classList.remove('active');
		//enviamos los datos de Javascript a PHP, que son los del formulario
		var parametros= 'nombre=' + usuario_nombre + '&edad=' + usuario_edad + '&pais=' + usuario_pais + '&correo=' + usuario_correo;

		//Enviamos el header de nuestra petición, cuando enviamos datos lo tenemos que poner
		peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		loader.classList.add('active');

		//cuando se presiona enviar los datos se enviar a insertar-usuarios.php, luego ese archivo los envía a la BD y nos envía una respuesta y cargamos la información
		peticion.onload = function() {
			cargarUsuarios();
			//Se pone comillas simples para que cuando se agregue los datos del formulario, el formulario se limpie
			formulario.nombre.value = '';
			formulario.edad.value = '';
			formulario.pais.value = '';
			formulario.correo.value = '';
		}
		//Si todo sale bien le quitamos el active para que no aparezca el spinner de que sigue cargando
		peticion.onreadystatechange = function() {
			if (peticion.readyState == 4 && peticion.status == 200) {
				loader.classList.remove('active');
			};
		}


		peticion.send(parametros);
	}else{
		error_box.classList.add('active');
		error_box.innerHTML = 'Por favor completa el formulario';
	}

}


btn_cargar.addEventListener('click',function() {
	cargarUsuarios();
});


formulario.addEventListener('submit',function(e) {
	//la (e) es el evento de tu addEventListener 
	agregarUsuarios(e);
})

function formulario_valido() {
	if (usuario_nombre == '') {
		return false;
	}else if(isNaN(usuario_edad)){//Si usuario_edad no es un número, me regresas false
		return false;
	}else if(usuario_pais == ''){
		return false;
	}else if(usuario_correo == ''){
		return false;
	}
	return true;
}
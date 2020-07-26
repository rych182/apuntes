//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
//es el id del form
const formularioEnviar = document.getElementById('enviar-mail');
//boton de reset
const resetBtn = document.getElementById('resetBtn');


//Event Listener
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit',enviarEmail);
    //Boton de reset
    resetBtn.addEventListener('click',resetFormulario); 
}

//funciones
function inicioApp() {
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
    //Con "this" se valida la longuitud del texto y que no este vacío
    validarLonguitud(this);

    //Validar unicamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    //verifica que no esten vacios los espacios del formulario y si están llenos 
    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;   
        }
    }
}

function enviarEmail(e){
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif del email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif de enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        //AppendChild necesita el id de un elemento padre
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            //remueve el spinner y pone el gif del email
            enviado.remove();
            //después de mostrar el gif del email por unos segundos, resetea los campos llenos del formulario
            formularioEnviar.reset();
        }, 4500);
    }, 2000);

    e.preventDefault();
}

//Verifica la longuitud del texto en los campos
function validarLonguitud(campo) {
    if (campo.value.length > 0) {
        //se encarga de validar que haya algo escrito en los campos
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    //indexOf nos ayuda a encontrar el contenido de un string, nos regresa el número 1 si lo encontró   
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}
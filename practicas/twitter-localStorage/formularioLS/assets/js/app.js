//Variables
const listaTweets = document.getElementById('lista-tweets');



//EventListeners
eventListeners();

function eventListeners() {
    //Selecciona el textarea por su id y envia la info a la fncion agregarTweet
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweet
    listaTweets.addEventListener('click', borrarTweet);
}



//Funciones

//Añadir el tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textarea usando su id y accedemos al valor con .value
    const tweet = document.getElementById('tweet').value;

    //Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //Creo el contenido y agrego el contenido a una lista
    const li = document.createElement('li');
    //Añade la información a la lista
    li.innerText = tweet;
    //Añade el boton junto con el tweet
    li.appendChild(botonBorrar);
    //Crea el tweet
    listaTweets.appendChild(li);
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
    }
}
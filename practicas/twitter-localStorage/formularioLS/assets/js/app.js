//Variables
const listaTweets = document.getElementById('lista-tweets');



//EventListeners
eventListeners();

function eventListeners() {
    //Selecciona el textarea por su id y envia la info a la fncion agregarTweet
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweet
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado, CARGA cuando todo el documento html ha terminado de cargarse
    //queremos que cuando termine de cargar lea los datos del localstorage y los imprima
    document.addEventListener('DOMContentLoaded',localStorageListo);
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

    //Añadir el LocalStorage
    agregarTweetLocalStorage(tweet);
}

//ELimina el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == 'borrar-tweet') {
        e.target.parentElement.remove();
        //selecciona el texto dentro de la etiqueta li
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}


//Mostrar datos de localStorage en la lista

function localStorageListo() {
    let tweets;

    tweets = obtenerLocalStorage();
    
    tweets.forEach(function(tweet) {
       
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
    });
}


function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerLocalStorage();

    //AÑado el nuevo tweet
    tweets.push(tweet);

    //COnvierte de string aarreglo para local storage
    localStorage.setItem('tweets',JSON.stringify(tweets));

}

//Comprueba que haya elementos en localStorage
function obtenerLocalStorage() {
    let tweets;
    //Revisamos los valores del localStorage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        //SI tiene algo, agregalo como json pero se guardara en localstorage como array
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//eliminar tweet de local storage
function borrarTweetLocalStorage(tweet){
    //tweetBorrar va a ser la versión cortada, donde no aparezca la X
    let tweets, tweetBorrar;
    //con substring corta todo hasta la penultima letra y lo almacena
    tweetBorrar = tweet.substring(0, tweet.length -1);
    //
    tweets = obtenerLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            //index lo usamos para saber la posicion y el uno para decirle que solo queremos eliminar 1 posición
            tweets.splice(index,1);
        }
    });
    
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


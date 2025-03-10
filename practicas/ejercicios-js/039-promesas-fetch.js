function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        if (response.ok) {
            return response.json()
        }
        throw "Ocurrió un error";
        
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

getUser(3)

    /*
   
fetch() es una API que proporciona un método para realizar solicitudes HTTP y devuelve una promesa.

----------------------------------------------------------------------
EJERCICIO 0: lo que te responde fetch

fetch('https://jsonplaceholder.typicode.com/users').then( (response)=>{
    //return response.text()
    console.log(response)
} )

--------------------------------------------------------------------
EJERCICIO 1: consumiendo la API REST COUNTRIES

    CONSUMIENDO API CON FETCH()
    //Codigo Ania
fetch('https://restcountries.com/v3.1/all')
    .then(function (response){
        return response.json()
    }).then( function(json){
        let countries = json
        console.log(countries)
    }).catch(function(err){
        console.log('errors:'+err.message)
    })
    
    CONSUMIENDO API CON FETCH USANDO FUNCIONES FLECHAS
    fetch('https://restcountries.com/v3.1/all')
    .then( (response)=> {
        return response.json()  
    })
    .then( json =>{
        let countries = json;
        console.log(countries);
    })
    .catch((err)=>{
        console.log('errors:' + err.message)
    })

    RESUMIENDO EL CÓDIGO

    fetch('https://restcountries.com/v3.1/all')
    .then( response => response.json() )
    .then( json => {
        let countries = json;
        console.log(countries);
    }).catch(err => console.log('errors:' + err.message))

-------------------------------------------------------------------
ejercicio 2: Consumiendo la API JSONPLACEHOLDER

fetch('https://jsonplaceholder.typicode.com/users')
  .then(x => x.json())
  .then(x => console.log(x))
--------------------------------------------------------------------
EJERCICIO 3: te muestra en texto y formato lo que contiene el llamado a la API

fetch('https://jsonplaceholder.typicode.com/users').then( (response)=>{
    return response.text()
} ).then( (data)=>{
    console.log(data)
} ).catch( (error)=>{
    console.log(error)
} )

---------------------------------------------------------------------
Ejercicio 4: función asincrona tradicional
Aquí se representa como el console.log tradicional, no espera la traída de los datos 

function traditionalFn() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response)=>{
        return response.json();
    }).then((data)=>{
        console.log('traditional Fetch',data)
    })
    console.log('Traditional Message')
}
traditionalFn()
------------------------------------------------------------------------
EJERCICIO 5: Consumiendo 2 API's al mismo tiempo
//Se fusionan ambas Apis en un array

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
]).then( (responses)=>{
    return Promise.all(responses.map((response)=>{
        return response.json()
    }));
}).then((data)=>{
    console.log(data)
})
-----------------------------------------------------------------------------
Ejercicio 6: diferencia entre promesas y async await 

function traditionalFn() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response)=>{
        return response.json();
    }).then((data)=>{
        console.log('traditional Fetch',data)
    })
    console.log('Traditional Message')
}
//traditionalFn()

//una función asincrónica que espera a que se resuelva el código asincrónico antes de continuar
async function asyncfn() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log('Asyncs Fetch',data);
    });
    console.log('Async Message')
}
asyncfn()

------------------------------------------------------------------------
Ejercicio 7: 
Crea una función que consuma la api de json place holder y que cuando se ejecute le pases valor por parametro y te traiga el usuario 

function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        if (response.ok) {
            return response.json()
        }
        throw "Ocurrió un error";
        
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

getUser(3)
----------------------------------------------------------------------
EJERCICIO 6: CONSUMIR LA API DEL CLIMA DE USA


CHECAR LA EXPLICACION DE CHATGPT QUE NO LEI EN LA NOCHE
https://chatgpt.com/c/6789910a-b75c-8012-a5c5-14c5b70e7570

EJERCICIO 3: Aquí esta la documentación de la API
https://weather-gov.github.io/api/general-faqs

ESTAS 2 LIGAS FUNCIONAN PARA COORDENADAS DE 4 DIGITOS
NOTA:checar las coordenadas en esta página:   https://forecast.weather.gov/MapClick.php?lat=32.7158&lon=-117.1638

https://api.weather.gov/gridpoints/LWX/37,12/forecast
https://api.weather.gov/gridpoints/LWX/29,98/forecast/hourly

Estas funcionan para coordenadas negativas y de varios digitos
https://api.weather.gov/points/37.3591,-121.9241

Esta funciona con más digitos PERO solo ENTEROS
https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly


function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://api.weather.gov/gridpoints/LWX/34,92/forecast")
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast))
    })
}

function displayData(weather) {
    console.log(weather)
}

function onError(err) {
    console.log(`ERROR ${err}`)
}

fetchData()
    .then(displayData)
    .catch(onError)

    */
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

fetchData()
    .then(displayData)

    /*
   
fetch() es una API que proporciona un método para realizar solicitudes HTTP y devuelve una promesa.
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

----------------------------------------------------------------------
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

    */

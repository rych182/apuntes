//PROMISE PENDING
//let caja = fetch('https://restcountries.com/v3.1/all');
//console.log(caja) 

const flags = document.createElement('img')
document.body.appendChild(flags)

fetch('https://restcountries.com/v3.1/all')
    .then( response => response.json() )
    .then( json => {
        //console.log(json)
        flags.src = json[1].flags.png
        console.log(json[1].flags.png)
        //let countries = json;
        //console.log(countries);
    }).catch(err => console.log('errors:' + err.message))

    //este console.log marca error, por que la peticion fetch aún se esta ejecutando, aún no obtenemos esos datos
   // console.log(` hecho, esto es una liga `+ json[1].flags.png)
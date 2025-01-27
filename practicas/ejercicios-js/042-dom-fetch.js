const flags = document.createElement('img')
document.body.appendChild(flags)
fetch('https://restcountries.com/v3.1/all')
    .then( response => response.json() )
    .then( json => {
        //console.log(json)
        flags.src = json[1].flags.png
        //let countries = json;
        //console.log(countries);
    }).catch(err => console.log('errors:' + err.message))

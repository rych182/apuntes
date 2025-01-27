
    /*
    PROMISE PENDING
    let caja = fetch('https://restcountries.com/v3.1/all');
    console.log(caja) 

--------------------------------------------------------------------


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

    */

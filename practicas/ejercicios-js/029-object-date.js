/*
Date es una función, si ejecutas Date(); te muestra la fecha
Lo ideal es guardarlo en una variable como un objeto
*/
console.log(Date())
let fecha = new Date();
console.log(fecha)
console.log(typeof fecha)
console.log(fecha.getDate()) //Obtienes el día del mes
console.log(fecha.getDay()) //Obtienes el día de la semana y empieza con Domingo y es el 0
console.log(fecha.getMonth()) //Obtienes el més, enero empieza con 0, Febrero con 1 y así sucesivamente
console.log(fecha.getFullYear()) //Obtienes el año , con confundir con getYear
console.log(fecha.getHours()) //Obtienes las horas em formato de 0 a 24hrs
console.log(fecha.getMinutes()) //Obtienes las horas
console.log(fecha.getSeconds()) //Obtienes las horas
console.log(fecha.getMilliseconds()) //Obtienes las mili segundos, en javascript se da mucho
console.log(fecha.toString()) //Obtienes la fecha y hora en formato de texto
console.log(fecha.toDateString()) //Obtienes solo la fecha en texto
console.log(fecha.toLocaleString()) //Obtienes la hora local pero con un formato que usarían los humanos
console.log(fecha.toLocaleDateString()) //Obtienes la fecha en cadena de texto
console.log(fecha.toLocaleTimeString()) //Obtienes en texto un temporizador que va actualizando la hora
console.log(fecha.getTimezoneOffset()) //Obtienes los minutos que llevamos de diferencia con el meridiano de greenwich


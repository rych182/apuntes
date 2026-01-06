let nombre:string = `ric`;
console.log(`Mi nombre es ${nombre.toUpperCase()}.`)

// el signo de interrogracion es un "null check" que te lo pone typescript
console.log(nombre[10]?.toUpperCase() || `No hay dato`)
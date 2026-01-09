const sumar = (a:number,b:number)=> a+b;
const saludar = (name:string) => `Hola ${name}`
const texto = () => `hola mundo`

//esto no es necesario hacerlo a menos que vayamos a hacer codigo por referencia como en este ejercicio
//let miFuncion;

//También puedo poner que se le asigne una función pero que regrese un número,void, string etc
//let miFuncion: (x:number,y:number)=> number
//let miFuncion: (x:string)=> string
let miFuncion: ()=> string

//miFuncion = 10;
//console.log(miFuncion)


//*solo le puse comentarios de color verde para probar un plugin
//*estoy mandandole la referencia
//*miFuncion=sumar
//*console.log(miFuncion(2,3));

//?solo le puse comentarios de color azul para probar un plugin
//?miFuncion=saludar
//?console.log(miFuncion("ric"));

miFuncion=texto
console.log(miFuncion());
//El never NO ES "undifined", mi función no debe de terminar exitosamente
//La función puede ser tipo de dato "never" o "string" 
const error = (message:string):(never | string) => {
    throw new Error(message);
}
error("Hola mundo")
console.log("hello world")
class Persona {
    //private significa que solo tendre acceso a esta propiedad dentro esta clase
    //public significa que va a poder ser vista desde afuera de la clase
    private name: string;
    public apellido: string;
    //muchas personas no le ponen nada a menos que sea estrictamente privada
    //apodo: string;
    public apodo: string;
}

const amigo: Persona = new Persona();
console.log()
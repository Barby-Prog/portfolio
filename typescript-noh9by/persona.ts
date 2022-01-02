class Persona {
    readonly nombre:string;
    readonly apellido:string;
    readonly nacionalidad:string;
    private añoNac:number;
    constructor(nombre:string, apellido:string, nacionalidad:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = this.nacionalidad;
    }

    public toString() :string
    {
        return this.nombre + this.apellido + this.nacionalidad;

    }
    public edad (añoActual:number):number
    {
        return (añoActual - this.añoNac);
    }
}
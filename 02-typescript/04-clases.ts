//04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYapellido = '' //Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYapellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYapellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Modificador acceso -> Propiedad de la clase
        public estadoCivil: string // Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const andres = new Usuario(
    'Andres',
    'Eguez',
    '1721132445',
    'soltero'
);

andres.nombre;
andres.apellido;
andres.cedula;
andres.estadoCivil;
class Empleado{
    constructor(nombre, apellido, edad, cargo, sueldo) {
        this.id_emp = `${nombre}-${cargo}`;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }
}

exports.Empleado = Empleado;
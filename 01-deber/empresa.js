class Empresa{
    constructor(id_emp, nombre_emp, direccion_emp, area_emp, empleado_emp = []) {
        this.id_emp = id_emp;
        this.nom_emp = nombre_emp;
        this.dir_emp = direccion_emp;
        this.area_emp = area_emp;
        this.empleado_emp = empleado_emp;
    }
}
exports.Empresa = Empresa;
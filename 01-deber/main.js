const {Empresa} = require('./empresa');
const {Empleado} = require('./empleado');
const empresaDAO = require('./empresaDAO');
const empleadoDAO = require('./empleadoDAO');
const inquirer = require('inquirer');

const main = async() => {
    let bandera = true;
    while (bandera){
        const op = 'opción: \n' +
            '1. Ingresar nueva empresa \n' +
            '2. Mostrar todas las empresas \n' +
            '3. Actualizar empresa \n' +
            '4. Eliminar empresa\n'+
            '5. Ingresar nuevo empleado\n'+
            '6. Mostrar todos los empleados\n' +
            '7. Actualizar datos del empleado\n' +
            '8. Eliminar empleado\n'+
            '9. Salir\n';
        try {
            const answer = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'numList',
                    message: op
                }
            ]);
            switch(answer.numList){
                case 1:
                    const EmpresaData = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id_Empresa',
                            message: 'ID empresa'
                        },
                        {
                            type: 'input',
                            name: 'nombre_Empresa',
                            message: 'Nombre de la empresa'
                        },

                        {
                            type: 'input',
                            name: 'direccion_Empresa',
                            message: 'Direccion de la empresa'
                        },

                        {
                            type: 'input',
                            name: 'area_Empresa',
                            message: 'Area de la empresa'
                        }
                    ]);
                    let empresa = new Empresa(
                        EmpresaData.id_Empresa,
                        EmpresaData.nombre_Empresa,
                        EmpresaData.direccion_Empresa,
                        EmpresaData.area_Empresa);
                    empresaDAO.createEmp(empresa)
                        .then(()=>console.log("Empresa registrada"))
                        .catch((e)=> console.error(e));
                    break;
                case 2:
                    const empresaList = await empresaDAO.readEmp();
                    const emprListRead = empresaList.map(
                        (valorActual, indice, arreglo)=>{
                            const {id_Empresa, nombre_Empresa, direccion_Empresa, area_Empresa} = valorActual;
                            return `${id_Empresa}: ${nombre_Empresa}, ${direccion_Empresa}, perteneces al area de: ${area_Empresa}`;
                        }
                    )
                    console.log('Lista de Empresas: \n', emprListRead);
                    break;
                case 3:
                    let newEmpresa = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id_Empresa',
                            message: 'ID empresa'
                        },
                        {
                            type: 'input',
                            name: 'nombre_Empresa',
                            message: 'Ingrese nuevo nombre de la empresa'
                        },
                        {
                            type:'input',
                            name: 'direccion_Empresa',
                            message: 'Ingrese la nueva direccion de la empresa'
                        },
                        {
                            type:'input',
                            name: 'area_Empresa',
                            message: 'Ingresa el área nueva de la empresa'
                        }
                    ]);
                    empresaDAO.updateEmp(new Empresa(
                        newEmpresa.id_Empresa,
                        newEmpresa.nombre_Empresa,
                        newEmpresa.direccion_Empresa,
                        newEmpresa.area_Empresa
                    ))
                        .then(()=> console.log('Empresa actualizada!'))
                        .catch((e)=> console.error(e));
                    break;

                case 4:
                    let id = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id_Empresa',
                            message: 'ID de la empresa'
                        }
                    ]);
                    empresaDAO.deleteEmp(id.id_Empresa)
                        .then(()=>console.log('Empresa eliminada!'))
                        .catch((e)=> console.error(e));
                    break;
                case 5:
                    const empleadoData = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'nombre_Empresa',
                            message: 'ID de la empresa'
                        },
                        {
                            type: 'input',
                            name: 'nombre_Empleado',
                            message: 'Nombre del Empleado'
                        },
                        {
                            type: 'input',
                            name: 'apellido_Empleado',
                            message: 'Apellido del Empleado'
                        },
                        {
                            type: 'confirm',
                            name: 'cargo_Empleado',
                            message: 'El empleado tiene un cargo?'
                        },
                        {
                            type: 'number',
                            name: 'sueldo_Empleado',
                            message: "Ingrese el sueldo del empleado"
                        }
                    ]);
                    let empleado = new Empleado(
                        empleadoData.nombre_Empleado,
                        empleadoData.apellido_Empleado,
                        empleadoData.cargo_Empleado,
                        empleadoData.sueldo_Empleado
                    );
                    empleadoDAO.createEmpleado(empleado).then(() =>{
                        return empresaDAO.addEmp(empleado,empleadoData.nombre_Empresa);
                    })
                        .then(()=>{console.log("Empleado registrado!")})
                    break;
                case 6:
                    const resp = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: "ID de la empresa"
                        }
                    ]);
                    empresaDAO.empleadoList(resp.id)
                        .then((empleadoList) =>{
                            console.log('Empleados de la empresa', empleadoList);
                        })
                        .catch((e) => console.log(e));
                    break;
                case 7:
                    const rspt1 = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id_Empresa',
                            message: 'ID de la empresa'
                        },
                        {
                            type: 'input',
                            name: 'id_Empleado',
                            message: 'ID del empleado'
                        },
                        {
                            type: 'confirm',
                            name: 'cargo_Empresa',
                            message: 'El empleado tiene un cargo?'
                        },
                        {
                            type: 'number',
                            name: 'sueldo_Empresa',
                            message: "Sueldo del empleado"
                        }
                    ]);
                    empleadoDAO.updateEmpleado(
                        rspt1.id_Empleado,
                        rspt1.cargo_Empresa,
                        rspt1.sueldo_Empresa
                    ).then((empleadoActualizado) => {
                        return empleadoDAO.updateEmpleado(empleadoActualizado,rspt1.id_Empresa);
                    })
                        .then(()=> console.log('Datos del empleado actualizados!'))
                        .catch((e) => {console.log(e)});
                    break;
                case 8:
                    const eliminarData = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id_Empresa',
                            message: 'ID de la empresa'
                        },
                        {
                            type: 'input',
                            name: 'id_Empleado',
                            message: 'ID del empleado'
                        }
                    ]);
                    empleadoDAO.deleteEmpleado(eliminarData.id_Empleado)
                        .then(()=>{
                            return empresaDAO.deleteEmp(eliminarData.id_Empleado, eliminarData.id_Empresa);
                        })
                        .then(()=> console.log("Empleado Eliminado"))
                        .catch((e)=> console.log(e));
                    break;
                case 9:
                    bandera = false;
                    break;
                default:
                    throw 'Error de tipeo';
            }

        } catch (e) {
            throw e;
        }
    }
}

main()
    .catch((e)=> console.log(e) )
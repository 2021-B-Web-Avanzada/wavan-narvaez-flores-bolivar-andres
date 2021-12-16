const fs = require('fs/promises');
const fileEmpleado = 'empleados.txt'

//read empleados
const readEmpleado = async () => {
    try {
        const txt = await fs.readFile(`./${fileEmpleado}`);
        const jsonFile = JSON.parse(txt);
        return jsonFile;
    } catch (e) {
        throw e;
    }
}

//create Empleado
const createEmpleado = async (empleado) =>{
    try {
        const empleadoList = await readEmpleado();
        const ifExist = empleadoList.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === empleado.id;
            }
        );
        if(!ifExist){
            empleadoList.push(empleado);
            await fs.writeFile(`./${fileEmpleado}`,JSON.stringify(empleadoList));
        }
        else{
            throw 'Empleado registrado';
        }

    } catch (e) {
        if(e.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${fileEmpleado}`,JSON.stringify([empleado]));
            } catch (eW) {
                throw eW;
            }
        }
        else{
            throw e
        }
    }
};

//update Empleado
const updateEmpleado = async (empleado_id, nombreEmpleado, apellidoEmpleado, edad) =>{
    try {
        let empleadoList = await readEmpleado();
        const index = empleadoList.findIndex((valorActual,indice,array)=>{
            return valorActual.id === empleado_id;
        });
        if(index>=0){
            const empleadoUpdate = empleadoList[index];
            empleadoUpdate.nombre = nombreEmpleado;
            empleadoUpdate.apellido = apellidoEmpleado;
            empleado_id.edad = edad;
            await fs.writeFile(`./${fileEmpleado}`,JSON.stringify(empleadoList));
            return empleadoUpdate;
        }else{
            throw 'El empleado no existe, no se puede actualizar';
        }
    } catch (e) {
        throw e;
    }
}
//delete Empleado
const deleteEmpleado = async(empleado_id) =>{
    try {
        let empleadoList = await readEmpleado();
        const index = empleadoList.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === empleado_id;
        });
        if(index>=0){
            empleadoList.splice(index,1);
            await fs.writeFile(`./${fileEmpleado}`,JSON.stringify(empleadoList));
        }else{
            throw 'Error al eliminar el empleado';
        }
    } catch (e) {
        throw e;
    }
}

exports.readEmpleado = readEmpleado;
exports.createEmpleado = createEmpleado;
exports.updateEmpleado = updateEmpleado;
exports.deleteEmpleado = deleteEmpleado;
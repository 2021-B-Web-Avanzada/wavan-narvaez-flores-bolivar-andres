//Operaciones CRUD
const fs = require('fs/promises');
const { Empresa } = require('./empleado');
const file = 'empresa.txt';

//read Empresa
const readEmp = async () => {
    try{
        const texto = await fs.readFile(`./${file}`);
        let jsonFile = JSON.parse(texto);
        return jsonFile;
    } catch (e){
        throw e;
    }
}

//create Empresa
const createEmp = async (empresa) =>{
    try{
        const empList = await readEmp();
        const ifExist = empList.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === empresa.id;
            }
        );
        if(!ifExist){
            empList.push(empresa);
            await fs.writeFile(`./${file}`,JSON.stringify(empList));
        }
        else{
            throw 'Empresa registrada';
        }
    }catch (e) {
        if(e.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${file}`,JSON.stringify([empresa]));
            } catch (eWrite) {
                throw eWrite;
            }
        }
        else{
            throw e
        }
    }
}

//Update Empresa
const updateEmp = async (empresa) => {
    try{
        let empList = await readEmp();
        const ind = empList.findIndex(
            (valorActual, indice, array) =>{
                return valorActual.id === empresa.id;
            }
        );
        if(ind >= 0){
            const {id_emp, empleado_emp} = empList[ind];
            const {nombre_emp, direccion_emp, area_emp} = empresa;
            const newEmp = new Empresa(id_emp, nombre_emp, direccion_emp, area_emp, empleado_emp);
            empList.splice(ind, 1, newEmp);
            await fs.writeFile(`./${file}`,JSON.stringify(empList));
        }else {
            throw 'Fallo en la actualización';
        }
    }catch (e) {
        throw e;
    }
}

//delete Empresa
const deleteEmp = async (emp_id) => {
    try {
        let empList = await readEmp();
        const ind = empList.findIndex(
            (valorActual, indice, array) => {
                return valorActual.id === emp_id;
            }
        );
        if(ind >= 0){
            empList.splice(ind, 1);
            await fs.writeFile(`./${file}`,JSON.stringify(empList));
        }else {
            throw 'Error al eliminar la empresa';
        }
    }catch (e) {
        throw e;
    }
}

//Add area a Empresa
const addEmp = async(empleado, empresa_id) =>{
    try {
        let empList = await readEmp();
        const empresaIndex = empList.findIndex(
            (valorActual,indice,array)=>{
            return valorActual.id === empresa_id;
        });
        if(empresaIndex >=0){
            let empresa = empList[empresaIndex];
            empresa.empleado_emp.push(empleado);
            await fs.writeFile(`./${file}`,JSON.stringify(empList));
        }else{
            throw 'Error al añadir empleado';
        }
    } catch (e) {
        throw e;
    }
}

//Empleado List of Empresa
const empleadoList = async (emp_id) =>{
    try {
        const empresa = await readEmp();
        const empIndex = empresa.find(
            (empresaActual, indice, array) =>{
                return empresaActual.id === emp_id
            }
        );
        if(empIndex!== undefined){
            return empIndex.empleado_emp;
        } else{
            throw "No se encontró la empresa";
        }
    } catch (e) {
        throw e
    }
}

//update Empleado
const updateEmpleado = async (empleado, empresa_id) =>{
    try {
        const empresa = await readEmp();
        const empIndex = empresa.find(
            (empresaActual, indice, arreglo) =>{
                return empresaActual.id === empresa_id
            }
        );
        if(empIndex!== undefined){
            const empleadoEmp = empIndex.empleado_emp;
            const index = empleadoEmp.findIndex((valorActual,indice,array)=>{
                return valorActual.id === empleado.id;
            });
            if(index>=0){
                empleadoEmp[index] = empleado;
                await fs.writeFile(`./${file}`,JSON.stringify(empresa));
            }else{
                throw 'Error al actualizar';
            }
        } else{
            throw "No se pudo actualizar";
        }
    } catch (e) {
        throw e;
    }
};

//delete Empleado
const deleteEmpleado = async (empleado_id, empresa_id) =>{
    try {
        const empresa = await readEmp();
        const empresaIndex = empresa.find(
            (empresaActual, indice, arreglo) =>{
                return empresaActual.id === empresa_id
            }
        );
        if(empresaIndex !== undefined){
            const empleadoEmp = empresaIndex.empleado_emp;
            const index = empleadoEmp.findIndex((valorActual,indice,arr)=>{
                return valorActual.id === empleado_id;
            });
            if(index>=0){
                empleadoEmp.splice(index,1);
                await fs.writeFile(`./${file}`,JSON.stringify(empresa));
            }else{
                throw 'Empleado no encontrado';
            }
        } else{
            throw "No se encontró empresa";
        }
    } catch (e) {
        throw e;
    }
};

exports.readEmp = readEmp;
exports.createEmp = createEmp;
exports.updateEmp =updateEmp;
exports.deleteEmp = deleteEmp;
exports.addEmp = addEmp;
exports.empleadoList = empleadoList;
exports.updateEmpleado = updateEmpleado;
exports.deleteEmpleado = deleteEmpleado;
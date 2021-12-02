//11-inquirer.js
const inquirer = require('inquirer');
//npm install inquirer
async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'ingresa tu Nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
           ]);
        console.log('Respuesta', respuesta);
    }catch (e){
        console.error(e);
    }
}
main()
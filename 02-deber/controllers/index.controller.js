const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'empresa',
    port: '5432'
});

const getEmp = async (req, res) => {
    const response =  await pool.query('SELECT * FROM empresa');
    res.status(200).json(response.rows);
};

const getEmprID = async (req, res) => {
    const id = req.params.id_emp;
    const response = await pool.query('SELECT * FROM empresa WHERE id_emp = $1', [id]);
    res.json(response.rows);
};

const createEmpr = async (req, res) => {
    const { nombre_empr, dir_empr, area_emp, empleado_emp } = req.body;
    const response = await pool.query(
        'INSERT INTO empresa (nombre_empr, dir_empr, area_emp, empleado_emp) VALUES ($1, $2, $3, $4)',
        [nombre_empr, dir_empr, area_emp, empleado_emp]
    );
    console.log(response);
    res.json({
        message: 'Empresa creada con éxito!',
        body: {
            empresas: {nombre_empr, dir_empr, area_emp, empleado_emp}
        }
    })
};

const updateEmpr = async (req, res) => {
    const id = req.params.id_emp;
    const { nombre_empr, dir_empr, area_emp, empleado_emp } = req.body;
    const response = await pool.query(
        'UPDATE empresa SET nombre_empr = $1, dir_empr = $2, area_emp = $3, empleado_emp = $4 WHERE id_emp = $5',
        [nombre_empr, dir_empr, area_emp, empleado_emp, id]
    );
    console.log(response);
    res.json('Empresa actualizada con éxito');
};

const deleteEmpr = async (req, res) => {
    const id = req.params.id_emp;
    const response = await pool.query('DELETE FROM empresa WHERE id_emp = $1', [id]);
    console.log(response);
    res.json('Empresa eliminada correctamente');
};
module.exports = {
    getEmp,
    getEmprID,
    updateEmpr,
    createEmpr,
    deleteEmpr
}
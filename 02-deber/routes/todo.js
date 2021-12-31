const { Router } = require('express');
const router = Router();

const { getEmp, createEmpr, getEmprID, deleteEmpr, updateEmpr } = require('../controllers/index.controller')

router.get('/empresas', getEmp);
router.get('/empresas/:id_emp', getEmprID);
router.post('/empresas', createEmpr);
router.delete('/empresas/:id_emp', deleteEmpr);
router.put('/empresas/:id_emp', updateEmpr)

module.exports = router;
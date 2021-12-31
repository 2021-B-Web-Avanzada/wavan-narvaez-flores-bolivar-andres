const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//defino rutas
app.use(require('./routes/todo'));

app.listen(3000);
console.log('Servidor listo en puerto 3000');

const express = require ('express');

const app = express();

app.use(express.json);

const PORT = 3003;

app.listen(3003, () => {console.log('Funcionando na porta ' + PORT)});
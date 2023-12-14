const express = require ('express');
const allItems = require('./allItems');

const app = express();

app.use(express.json);

const PORT = 4200;

app.listen(4200, () => {console.log('Funcionando na porta ' + PORT)});

app.get('/', async (req, res) => {
    const query = await allItems();
    return res.status(201).json(query);
});
const express = require ('express');
const allItems = require('./allItems');

const app = express();

app.use(express.json);

const PORT = 3003;

app.listen(3003, () => {console.log('Funcionando na porta ' + PORT)});

console.log('12345');

app.get('/', async (req, res) => {
    console.log(res);
    const query = await allItems();
    console.log('adb' + this.query);
    return res.status(201).json(query);
});
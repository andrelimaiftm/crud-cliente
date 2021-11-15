const express = require('express');
const port = 3000;

const routes = require('./routes');

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(routes);


// Subir o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




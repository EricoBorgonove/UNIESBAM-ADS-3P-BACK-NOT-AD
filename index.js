const express = require('express');
const app = express();
const general = require('./routes/general.routes');
const PORT = 3000;

app.use('/general', general);

// sempre o ultimo

app.use ((req, res, next) => {
    res.status(404).send("Não Encontrado")
});
app.listen(PORT, () => {
    console.log (`App rodando na porta ${PORT}`)
});
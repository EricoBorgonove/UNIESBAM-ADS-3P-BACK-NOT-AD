const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.get ('/algo', (req,res)=> {
    res.sendFile(path.resolve('algo.html'))
});

app.get ('/saude', (req, res)=>{
    res.status(200).send('Aplicação Saudável')
});
app.get ('/jack', (req, res)=>{
    res.status(500).send('MacDonalds nada Saudável')
});

// sempre o ultimo
app.listen(PORT, () => {
    console.log (`App rodando na porta ${PORT}`)
});
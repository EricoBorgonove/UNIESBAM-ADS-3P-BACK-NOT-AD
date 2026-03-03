const express = require('express');

const app = express();
const PORT = 3002;

app.get ('/saude', (req, res)=>{
    
});



// sempre o ultimo
app.listen(PORT, () => {
    console.log (`App rodando na porta ${PORT}`)
});
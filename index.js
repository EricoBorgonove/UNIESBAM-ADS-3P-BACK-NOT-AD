require ('dotenv').config();
const express = require('express');
const app = express();
const general = require('./routes/general.routes');
const usersRoutes = require('./routes/users.routes');
const UsersController = require('./controllers/Users.controller');
//const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/general', general);
app.use('/users', usersRoutes);


// sempre o ultimo

app.use ((req, res, next) => {
    res.status(404).send("Não Encontrado")
});
app.listen(process.env.PORT, () => {
    console.log (`App rodando na porta ${process.env.PORT}`)
});

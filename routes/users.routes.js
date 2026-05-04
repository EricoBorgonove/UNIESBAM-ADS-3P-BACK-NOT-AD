const express = require('express');
const UsersController = require('../controllers/Users.controller');

const router = express.Router();

// para se ter um endpoint precisa de 2 coisas:
// url / verbo http
//criar usuário
router.post('/', UsersController.createUser);
//listar todos os usuários
router.get('/', UsersController.getAllUsers);
//buscar um usuário pelo ID
router.get('/:id', UsersController.getUserById);
//Atualizar um usuário
router.put ('/:id', UsersController.updateUser);
//Deletar um usuário
router.delete('/:id', UsersController.deleteUser);

module.exports = router;
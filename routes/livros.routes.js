const express = require('express');
const LivrosController = require('../controllers/Livros.controller');

const router = express.Router();

// Criar livro
router.post('/', LivrosController.createLivro);
// Listar todos os livros
router.get('/', LivrosController.getAllLivros);
// Buscar livro pelo ID
router.get('/:id', LivrosController.getLivroById);
// Atualizar livro
router.put('/:id', LivrosController.updateLivro);
// Deletar livro
router.delete('/:id', LivrosController.deleteLivro);

module.exports = router;

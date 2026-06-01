const { Livros } = require('../models');

module.exports = {
    async createLivro(req, res) {
        try {
            const { titulo, autor, ano_publicacao, genero, isbn, quantidade } = req.body;

            const livroExistente = await Livros.findOne({ where: { isbn } });
            if (livroExistente) {
                return res.status(400).json({ message: 'ISBN já cadastrado !' });
            }

            const livro = await Livros.create({
                titulo,
                autor,
                ano_publicacao,
                genero,
                isbn,
                quantidade
            });

            return res.status(201).json(livro);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar livro', error: error.message });
        }
    },

    async getAllLivros(req, res) {
        try {
            const livros = await Livros.findAll();
            return res.json(livros);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao listar livros', error: error.message });
        }
    },

    async getLivroById(req, res) {
        try {
            const { id } = req.params;
            const livro = await Livros.findByPk(id);

            if (!livro) return res.status(404).json({ message: 'Livro não encontrado !' });

            return res.json(livro);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar livro', error: error.message });
        }
    },

    async updateLivro(req, res) {
        try {
            const { id } = req.params;
            const { titulo, autor, ano_publicacao, genero, isbn, quantidade } = req.body;

            const livro = await Livros.findByPk(id);
            if (!livro) return res.status(404).json({ message: 'Livro não encontrado !' });

            if (isbn && isbn !== livro.isbn) {
                const livroExistente = await Livros.findOne({ where: { isbn } });
                if (livroExistente) {
                    return res.status(400).json({ message: 'ISBN já cadastrado !' });
                }
            }

            await livro.update({
                titulo,
                autor,
                ano_publicacao,
                genero,
                isbn,
                quantidade
            });

            return res.status(200).json(livro);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar livro', error: error.message });
        }
    },

    async deleteLivro(req, res) {
        try {
            const { id } = req.params;
            const livro = await Livros.findByPk(id);

            if (!livro) return res.status(404).json({ message: 'Livro não encontrado !' });

            await livro.destroy();
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao excluir livro', error: error.message });
        }
    }
};

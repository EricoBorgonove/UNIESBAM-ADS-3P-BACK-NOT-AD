const { Users } = require ('../models');

module.exports = {
    // create - criar um novo usuário

    async createUser (req, res){
        try{
            
            const { nome, cpf, email, senha, tipo_usuario } = req.body;
            if (! ['admin', 'user', 'dev'].includes(tipo_usuario)){
                return res.status(400).json({message: 'Tipo de usuário inválido'});
            }
            
            const userExistente = await Users.findOne({where: { email }});
            if (userExistente){
                return res.status(400).json({message: 'Email já cadastrado !'});
            }
            // await Users.create ({nome, cpf, email, senha, tipo_user});
            const user = await Users.create ({nome, cpf, email, senha, tipo_usuario});
            // return res.status(201);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({message: 'Erro ao criar usuário', error: error.message});
        }
    },

    // READ - Listar todos os Usuários
    async getAllUsers (req, res){
        try {
            const users = await Users.findAll({
                attributes: {exclude: ['senha']}
            });
            return res.json(users);
        } catch (error) {
            return res.status(500).json({message: 'Erro ao listar usuários', error: error.message});
        }
    },

    // READ - Buscar usuário por ID

    async getUserById (req, res){
        try {
            const { id } = req.params;
            const user = await Users.findByPk(id,{
                attributes: {exclude: ['senha']}
            });
            if (!user) return res.status(404).json({message: 'Usuário não Encontrado !'});
            return res.json(user);

        } catch (error) {
            return res.status(500).json({message: 'Erro ao buscar usuário', error: error.message});
        }
    },
    // UPDATE - Atualizar usuário

    async updateUser (req, res){
        try {
            const { id } = req.params;
            const { nome, cpf, email, senha, tipo_usuario } = req.body;

            if (! ['admin', 'user', 'dev'].includes(tipo_usuario)){
                return res.status(400).json({message: 'Tipo de usuário inválido'});
            }
            const user = await Users.findByPk(id);
            if (!user) return res.status(404).json({message: 'Usuário não Encontrado !'});
            
            await user.update ({nome, cpf, email, senha, tipo_usuario});
            const userAtualizado = user.toJSON();
            delete userAtualizado.senha;
            return res.status(200).json(userAtualizado);
        } catch (error) {
            return res.status(500).json({message: 'Erro ao atualizar o usuário', error: error.message});
        }
    },
    // DELETE - Remover Usuário

    async deleteUser (req, res){
        try {
            const { id } = req.params;
            const user = await Users.findByPk(id,{
                attributes: {exclude: ['senha']}
            });
            if (!user) return res.status(404).json({message: 'Usuário não Encontrado !'});
            await user.destroy();
            return res.sendStatus(204);
            
        } catch (error) {
            return res.status(500).json({message: 'Erro ao excluir o usuário', error: error.message});
        }
    }
}

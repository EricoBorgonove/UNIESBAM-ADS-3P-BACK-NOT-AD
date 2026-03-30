const { Users } = require ('../models');
const { Op } = require('sequelize');

module.exports = {
    // create - criar um novo usuário

    async createUser (req, res){
        try{
            const { nome, cpf, email, senha, tipo_user } = req.body;
            if (! ['admin', 'user', 'dev'].includes(tipo_user)){
                return res.status(400).json({message: 'Tipo de usuário inválido'});
            }
            const userExistente = await Users.findOne({where: { email }});
            if (userExistente){
                return res.status(400).json({message: 'Email já cadastrado !'});
            }
            // await Users.create ({nome, cpf, email, senha, tipo_user});
            const user = await Users.create ({nome, cpf, email, senha, tipo_user});
            // return res.status(201);
            return res.status(201).json(user);
        }catch (error){
            return res.status(500).json({message: 'Erro ao criar usuário'});
        }
    }
}
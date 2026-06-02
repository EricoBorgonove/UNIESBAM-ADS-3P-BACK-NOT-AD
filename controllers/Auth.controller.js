const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const { use } = require('react');

module.exports = {
    async login (req, res){
        try {
            const { email, senha } = req.body;

            if (!email || !senha){
                return res.status(400).json({
                    message: 'Email e senha são obrigatórios'
                });
            }
            const user = await Users.findOne({
                where: { email}
            })
            if (!email){
                return res.status(401).json({
                    message: 'Email ou senha inválida'
                });
            }
            const senhaValida = await user.validarSenha(senha);
            if (!senhaValida){
                return res.status(401).json({
                    message: 'Email ou senha inválida'
                });
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    tipo_usuario: user.tipo_usuario
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
                }
            )
            return res.status(200).json({
                message:'Login realizado com sucessooooo',
                token,
                user:{
                    id: user.id,
                    email:user.email,
                    tipo_usuario: user.tipo_usuario
                }
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao realizar Login',
                error: error.message
            });
        }
    }
}
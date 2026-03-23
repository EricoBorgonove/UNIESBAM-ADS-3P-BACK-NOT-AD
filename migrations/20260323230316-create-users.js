'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tipo_user: {
        type: Sequelize.ENUM('admin', 'user', 'dev'),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
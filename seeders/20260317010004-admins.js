'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.bulkInsert('Users', [{
        nome: 'admin',
        senha: '123456',
        cpf: '11111111111',
        email: 'admin@email.com',
        tipo_usuario: 'admin'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

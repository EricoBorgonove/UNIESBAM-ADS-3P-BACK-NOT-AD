'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    static associate(models) {
    }
  }

  Livros.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    ano_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Livros'
  });

  return Livros;
};

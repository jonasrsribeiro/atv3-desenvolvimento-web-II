const { Sequelize, DataTypes } = require('sequelize');
const conexao = require('../db/conexao')

const Funcionario = conexao.define('funcionario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    codigo: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false
    },

    horas_trabalhadas: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false
    },

    turno: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
    },

    categoria: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
    },

    valor_hora_trabalhada: {
        type: Sequelize.INTEGER,
        require: false,
        allowNull: true
    },

    salario_minimo: {
        type: Sequelize.INTEGER,
        require: false,
        allowNull: true
    },

    salario_inicial: {
        type: Sequelize.INTEGER,
        require: false,
        allowNull: true
    },

    auxilio_alimentacao: {
        type: Sequelize.INTEGER,
        require: false,
        allowNull: true
    },

    salario_final: {
        type: Sequelize.INTEGER,
        require: false,
        allowNull: true
    }

})

module.exports = Funcionario;
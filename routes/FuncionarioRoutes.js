const express = require('express');
const router = express.Router();
const FuncionarioController = require('../controllers/FuncionarioController')

router.post('/cadastrar', FuncionarioController.criarFuncionario);
router.get('/listar', FuncionarioController.lerFuncionario);
router.get('/apagar/:id', FuncionarioController.apagarFuncionario);
router.get('/editar/:id', FuncionarioController.procurarPorIdFuncionario);
router.post('/atualizar/:id', FuncionarioController.atualizarFuncionario);

module.exports = router;
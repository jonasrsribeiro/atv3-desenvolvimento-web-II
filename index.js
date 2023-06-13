const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const conexao = require('./db/conexao');
const path = require('path');

//Importando Models
const Funcionario = require('./models/Funcionario')

// Importando as rotas
const HomeRoute = require('./routes/HomeRoutes');
const FuncionarioRoute = require('./routes/FuncionarioRoutes')

// Configurações do servidor
const handlebars = exphbs.create({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: 'views'
});

handlebars.handlebars.registerHelper('equal', (a, b) => a == b)

// Configurações Gerais
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'/public/')))

// Rotas
app.use('/', HomeRoute);
app.use('/', FuncionarioRoute);

// Conexão com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000');
    });
}).catch(erro => {
    console.log('Deu erro: ', erro);
});

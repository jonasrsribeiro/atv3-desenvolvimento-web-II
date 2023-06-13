const Funcionario = require('../models/Funcionario')

module.exports = class FuncionarioController {

    static async criarFuncionario(req, res) {
        //Recebendo dados do front
        const { codigo, horas, salario, turno, categoria } = req.body;

        //Checando se os campos estão vazios
        if (!codigo) {
            return res.render('main', { errorMessage: 'Por favor, adicione um código ao funcionário cadastrado!' });
        } else if (!horas) {
            return res.render('main', { errorMessage: 'Por favor, adicione as horas trabalhadas ao funcionário cadastrado!' });
        } else if (!salario) {
            return res.render('main', { errorMessage: 'Por favor, adicione o salário mínimo ao funcionário cadastrado!' });
        } else if (!turno) {
            return res.render('main', { errorMessage: 'Por favor, adicione o turno ao funcionário cadastrado!' });
        } else if (!categoria) {
            return res.render('main', { errorMessage: 'Por favor, adicione a categoria ao funcionário cadastrado!' });
        }

        //Fazendo os cálculos automaticamente
        let valor_hora_trabalhada, salario_inicial, auxilio_alimentacao, salario_final;

        //Definindo o valor da Hora trabalhada / mês
        if (categoria == 'G') {
            if (turno == 'M' || turno == 'V') {
                valor_hora_trabalhada = salario * 0.04
            } else {
                valor_hora_trabalhada = salario
            }
        } else {
            if (turno == 'N') {
                valor_hora_trabalhada = salario * 0.02
            } else {
                valor_hora_trabalhada = salario * 0.01
            }
        }

        //Definindo Salário inicial
        if (valor_hora_trabalhada) {
            salario_inicial = valor_hora_trabalhada * horas
        }

        //Definindo valor do Vale Alimentação
        if (salario_inicial) {
            if (salario_inicial <= 800) {
                auxilio_alimentacao = salario_inicial * 0.25
            } else if (salario_inicial > 800 && salario_inicial <= 1200) {
                auxilio_alimentacao = salario_inicial * 0.20
            } else {
                auxilio_alimentacao = salario_inicial * 0.15
            }
        }

        //Definindo valor do Salário final
        salario_final = salario_inicial + auxilio_alimentacao

        //Salvando os dados na tabela Funcionario
        const funcionario = {
            codigo,
            horas_trabalhadas: horas,
            turno,
            categoria,
            valor_hora_trabalhada,
            salario_minimo: salario,
            salario_inicial,
            auxilio_alimentacao,
            salario_final
        }

        try {
            const novoFuncionario = await Funcionario.create(funcionario)
            res.render('main', { successMessage: 'Funcionário cadastrado com sucesso!' });
        } catch (error) {
            res.render('main', { errorMessage: 'Ops, algo deu errado, tente novamente!' });
        }


    }

    static async lerFuncionario(req, res) {
        try {
            const funcionarios = await Funcionario.findAll()
            res.render('lista', { layout: 'lista', funcionarios: funcionarios });
        } catch (error) {
            res.render('lista', { layout: 'lista', errorMessage: 'Ops, algo deu errado, tente novamente!' });
        }
    }

    static async procurarPorIdFuncionario(req, res) {
        const id = req.params.id

        console.log(id)
        const funcionario = await Funcionario.findByPk(id)
        console.log(funcionario);
        res.render('atualizar', { layout: 'atualizar', funcionario: funcionario });
    }

    static async atualizarFuncionario(req, res) {
        const id = req.params.id;

        const { codigo, horas, salario, turno, categoria } = req.body;

        //Checando se os campos estão vazios
        if (!codigo) {
            return res.render('main', { errorMessage: 'Por favor, adicione um código ao funcionário cadastrado!' });
        } else if (!horas) {
            return res.render('main', { errorMessage: 'Por favor, adicione as horas trabalhadas ao funcionário cadastrado!' });
        } else if (!salario) {
            return res.render('main', { errorMessage: 'Por favor, adicione o salário mínimo ao funcionário cadastrado!' });
        } else if (!turno) {
            return res.render('main', { errorMessage: 'Por favor, adicione o turno ao funcionário cadastrado!' });
        } else if (!categoria) {
            return res.render('main', { errorMessage: 'Por favor, adicione a categoria ao funcionário cadastrado!' });
        }

        //Fazendo os cálculos automaticamente
        let valor_hora_trabalhada, salario_inicial, auxilio_alimentacao, salario_final;

        //Definindo o valor da Hora trabalhada / mês
        if (categoria == 'G') {
            if (turno == 'M' || turno == 'V') {
                valor_hora_trabalhada = salario * 0.04
            } else {
                valor_hora_trabalhada = salario
            }
        } else {
            if (turno == 'N') {
                valor_hora_trabalhada = salario * 0.02
            } else {
                valor_hora_trabalhada = salario * 0.01
            }
        }

        //Definindo Salário inicial
        if (valor_hora_trabalhada) {
            salario_inicial = valor_hora_trabalhada * horas
        }

        //Definindo valor do Vale Alimentação
        if (salario_inicial) {
            if (salario_inicial <= 800) {
                auxilio_alimentacao = salario_inicial * 0.25
            } else if (salario_inicial > 800 && salario_inicial <= 1200) {
                auxilio_alimentacao = salario_inicial * 0.20
            } else {
                auxilio_alimentacao = salario_inicial * 0.15
            }
        }

        //Definindo valor do Salário final
        salario_final = salario_inicial + auxilio_alimentacao

        //Salvando os dados na tabela Funcionario
        const funcionario = {
            codigo,
            horas_trabalhadas: horas,
            turno,
            categoria,
            valor_hora_trabalhada,
            salario_minimo: salario,
            salario_inicial,
            auxilio_alimentacao,
            salario_final
        }

        try {
            const funcionarioAtualizado = await Funcionario.update(funcionario, {
                where: { id: id }
            });
            if (funcionarioAtualizado[0] === 0) {
                return res.render('atualizar', { layout: 'atualizar', errorMessage: 'Funcionário não encontrado!' });
            } else {
                return res.render('atualizar', { layout: 'atualizar', successMessage: 'Funcionário atualizado com sucesso!' });
            }
        } catch (erro) {
            return res.render('atualizar', { layout: 'atualizar', errorMessage: 'Ops, algo deu errado, tente novamente!' });
        }
    }

    static async apagarFuncionario(req, res) {
        const id = req.params.id
        try {
            const funcionarioApagado = await Funcionario.destroy({
                where: { id: id }
            });
            return res.render('lista', { layout: 'lista', successMessage: 'Funcionário apagado com sucesso!' });
        } catch (erro) {
            return res.render('lista', { layout: 'lista', errorMessage: 'Ops, algo deu errado, tente novamente!' });
        }
    }
}
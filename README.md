# AtvIII Desenvolvimento Web II

Este é um projeto de desenvolvimento de uma solução de informatização básica para folha de pagamento em uma hotelaria. O objetivo é automatizar e otimizar o processo de cálculo e gerenciamento dos salários dos funcionários de um hotel.

## Executando o Sistema

Siga os passos abaixo para rodar o sistema localmente:

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js
- MySQL

### Passo 1: Clonar o repositório

Clone este repositório em sua máquina local:

```
git clone https://github.com/seu-usuario/atv3-desenvolvimento-web-II.git
```

### Passo 2: Instalar as dependências

Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências:

```shell
npm install
```

### Passo 3: Configurar o banco de dados

- Crie um banco de dados MySQL.
- Renomeie o arquivo `.env.example` para `.env` e preencha as informações de conexão do banco de dados no arquivo.

### Passo 4: Iniciar o servidor

Execute o seguinte comando para iniciar o servidor:

```shell
npm start
```

### Passo 5: Acessar o sistema

Abra o navegador e acesse o seguinte endereço:

```
http://localhost:3000/home
```

A partir desse ponto, você poderá cadastrar funcionários, visualizar a lista de funcionários, atualizar informações e excluir funcionários.

## Tecnologias utilizadas

- Node.js
- Express
- Handlebars
- MySQL
- Sequelize

## Contribuindo

Sinta-se à vontade para contribuir com o projeto. Faça um fork do repositório, faça suas modificações e envie um pull request. Agradecemos suas contribuições!

## Licença

Este projeto está licenciado sob a Licença MIT.

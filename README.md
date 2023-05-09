<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Tecnologias utilizadas

As tecnologias principais utilizadas foram: node com Nest, Sequelize como ORM, e Swagger para documentação

## Instalação

```bash
$ npm install
```

## Executando a aplicação

Para rodar o projeto, é necessário que tenha a máquina tenha docker e node. O node sendo utilizado no desenvolvimento é o 19.8.1.

Primeiramente, é necessário rodar o docker
```bash
# Comando docker
$ docker-compose up -d
```

Depois, só iniciar o programa.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Caso queira acessar o visualizador do banco de dados Postgres, após a incialização é possível através do link: http://localhost:5050/

Onde os dados para entrar são: email: admin@email.com e senha: user

Para acessar a url do Swagger, basta entrar através dessa url: http://localhost:3000/api

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Configurações do Banco de Dados
1. Inicialize o projeto com o comando
    ```bash
    # development
    $ npm run start
    ```
2. Após a inicialização, acesse o visualizador do banco de dados Postgres através do link: http://localhost:5050/
3. Informe os seguintes dados de login: email: admin@email.com e senha: user
4. Na aba "Dashboard", crie um novo 'server' clicando em "Add New Server"
5. Faça as seguintes configurações a salve seu 'server':
    - Name: construcao_software
    - Host name/address: postgres
    - Port: 5432
    - Maintenance databse: postgres
    - Username: admin
6. Após isso, finalize criando um 'Database' chamado 'construcao_software'.

## Observações gerais sobre o projeto
### Arquitetura
Neste projeto, utilizamos 'Clean Architecture', pois tem como objetivo fornecer um sistema modular, escalável, independente de frameworks e tecnologias e fácil de testar e manter. Ao separar as responsabilidades em camadas com propósitos específicos, é possível garantir que cada camada possa ser alterada sem afetar as outras camadas do sistema, facilitando a evolução e manutenção do software ao longo do tempo.


### Node
No projeto, utilizamos Node com Nest. O Node.js é uma plataforma que permite a criação de aplicações em JavaScript. O Nest é um framework para Node que utiliza a arquitetura do Angular e do Express, oferecendo recursos para a criação de APIs RESTful, com suporte a injeção de dependências e modularidade.

### Sequelize (ORM)
O Sequelize é um ORM (Object-Relational Mapping) para Node.js que permite a criação de modelos de dados para bancos de dados relacionais, como o MySQL e o PostgreSQL. Com o Sequelize, é possível mapear objetos JavaScript para tabelas de banco de dados, além de oferecer recursos para manipulação de dados e criação de queries de forma mais simples.

### Swagger
O Swagger é uma ferramenta para documentação de APIs RESTful que permite a geração automática de documentação a partir do código-fonte. Com o Swagger, é possível documentar endpoints, modelos de dados, parâmetros e respostas de forma padronizada e interativa, o que facilita o uso e a manutenção da API.


## Licença

Nest is [MIT licensed](LICENSE).

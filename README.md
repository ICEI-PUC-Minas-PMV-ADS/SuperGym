#  Supergym 💪

`Análise e Desenvolvimento de Sistemas`

`Desenvolvimento de uma Aplicação Interativa`

`3º Semestre`

Um app para personais trainers enviarem seus treinos de qualquer lugar. Ainda estamos em fase de idealização do projeto, então temos apenas uma estrutura inicial.
## Integrantes

* Bruno Roberto Olympio   
* Guilherme Henrique
* Gustavo Augusto
* Rafael Jordão
* Lúcia Raquel
* Warlen Alves


## Orientador

* Mateus Curcino De Lima

## Instruções de utilização

Antes de tudo, acesse a pasta correta do [server](https://github.com/rafael-jordao/supergym/tree/main/server) 🗂️

```bash
cd server
```

Instale as dependências 📦

```bash
npm install
```

Em seguida, nós inicializaremos a aplicação utilizando o [Docker](https://www.docker.com/), então siga os comandos abaixo:

```bash
docker compose up -d
```

Serão criados 2 containers: app_supergym e db_supergym.

Aplicação inicializada 🚀.

## Testes unitários

Para garantia de qualidade de código e menos dor de cabeça para o time de desenvolvimento, estaremos utilizando a biblioteca de testes unitários [JestJS](https://jestjs.io/pt-BR/docs/getting-started)

Crie os testes dentro da pasta [__tests__](https://github.com/rafael-jordao/supergym/tree/main/server/src/__tests__) e utilize o script abaixo para realizar os testes unitários.

```bash
npm run test
```

Fique à vontade para contribuir 😉.

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="presentation/README.md"> Apresentação da solução</a></li>

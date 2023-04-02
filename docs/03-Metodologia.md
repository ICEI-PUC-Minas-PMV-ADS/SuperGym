
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia utilizada pelo grupo é a Scrum, classificado como metodologia ágil e considerado um framework simples recomendado para o desenvolvimento de projetos de software. O Scrumé um método de trabalho realizado a partir de pequenos ciclos de atividades dentro de um projeto, tem como característica a flexibilidade nas decisões de desenvolvimento do software por conta da divisão das tarefas em Sprints.
Cada ciclo de atividade realizada pelo grupo é uma Sprint, sendo esta planejada previamente, e composta por um período de tempo predefinido em que as tarefas devem ser realizadas pela equipe. As Sprints são realizadas 1 vez por semana, sendo o prazo de 1 semana o suficiente para o desenvolvimento das funcionalidades do projeto. Desse modo, a metodologia Scrum permite potencializar o trabalho em equipe, acompanhar a evolução do produto, sempre com foco na qualidade da produção e nos prazos estipulados.



Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

As ferramentas utilizadas nesta etapa do projeto estão especificadas abaixo, além disso o desenvolvimento do API está sendo realizado com o uso da plataforma .NET Core em linguagem C#, enquanto o React Native é o Framework que está sendo utilizado para o desenvolvimento do aplicativo móvel multiplataforma com linguagem Typescript. O gerenciador do Banco de Dados escolhido pela equipe é o Microsoft SQL Server hospedado no Microsoft Azure.

<table border="1">
    <tr>
        <td>Ambiente</td>
        <td>Plataforma</td>
        <td>Link de Acesso</td>
    </tr>
    <tr>
        <td>Repositório de código fonte</td>
        <td>GitHub</td>
        <td>https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym</td>
    </tr>
    <tr>
        <td>Documentação do projeto</td>
        <td>Google.docs</td>
        <td>https://docs.google.com/document/d/1O494LyIf48wss_2yUxAqCOLgkKYulfyEXgFFr4eic6M/edit</td>
    </tr>
    <tr>
        <td>Gerenciamento do projeto</td>
        <td>GitHub</td>
        <td>https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym</td>
    </tr>
     <tr>
        <td>Elaboração dos Wireframes</td>
        <td>Figma</td>
        <td>https://www.figma.com/file/nBudBVVuNTNL6sRZGmkv5R/SuperGym?node-id=0-1</td>
    </tr>
     <tr>
        <td>Ferramenta para Comunicação do Grupo</td>
        <td>Teams</td>
        <td>https://teams.microsoft.com/_#/school/conversations/Grupo%203%20-%20quinta-feira%20-%2020h00?threadId=19:67e0752d41bf428397533cd569317261@thread.tacv2&ctx=channel</td>
    </tr>
    <tr>
        <td>Gerenciamento de Projeto</td>
        <td>Trello</td>
        <td>https://trello.com/b/pIB0ygTd/supergym</td>
    </tr>
</table>


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

A gestão do código fonte do projeto esta sendo realizada através do Git com a utilização de 2 branchs principais: Master e Develop, sendo a Master usada para subir uma release (entregável) e Develop (branch principal) recebe a branch atraves das seguintes etapas: 1) um dos desenvolvedores faz o clone do projeto do grupo, 2) cria uma branch a partir de Develop (ex: new branch Lucia), 3) Lucia faz as alterações no código através desta branch, criando assim uma task, 3) Lucia sobe esta branch via Git push, 4) em seguida Lucia cria um pull request lucia>develop, 5) o desenvolvedor principal do grupo revisa e analisa este pull request, 5) estando ok, o desenvolvedor principal faz um merge pra branch Develop.  Desse modo, ocorre a gestão do código fonte pela equipe, sendo a ferramenta Git utilizada como um sistema de controle de versionamento de código-fonte distribuído. Através do qual, é possível realizar: Suporte para desenvolvimento não-linear, ou seja permite criar branchs que são áreas distintas para separar em cada área, o que irá fazer no projeto; o histórico do Git também gera uma árvore de hash para cada commit (publicação de código) efetuado; além do Git apresentar uma estratégia de merge conectáveis, ou seja, o Git possui um conjunto de algoritmos bem definidos para mesclagem de códigos, realizando autocompletes do código e avisando o desenvolvedor quando ocorrer conflitos entre o mesmo arquivo, só que de versões distintas.
Quando o projeto estiver finalizado será realizada uma merge da branch Develop com a Main, e a Main será a branch do app finalizado.
Desse modo, o grupo decidiu utilizar o Git também para a gestão de código por ser uma ferramenta aplicada em outras finalidades durante o decorrer do curso.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida



> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Bruno;
- Product Owner: Lúcia, Warlen;
- Equipe de Desenvolvimento: Rafael, Gustavo;
- Equipe de Design: Fred, Guilherme.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas: 

> - ` Cronograma:`  Lista com as datas de entrega de cada etapa.
> - ` Andamento:`  Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
> - ` Pendências:`  Backlog com as tarefas a serem trabalhadas e representa o Product Backlog.
> - ` Testes:`  Lista de todas as tarefas que precisam ser testadas.
> - ` Finalizado:`  Lista  com as tarefas que passaram pelos testes e controle de qualidade e estão prontos para serem entregues. 
> - ` Dúvidas:`  Lista de perguntas e informações que precisam ser perguntadas ao orientador.


O quadro kanban do grupo no Trello está disponível através da URL https://trello.com/b/pIB0ygTd/supergym e é apresentado, no estado atual, na Figura 2. A definição desta estrutura se baseou na proposta feita por Littlefield (2016).


<div align="center">
<img src=".png" width="1000px" />
</div>
Figura 2 - Tela do kanban utilizada pelo grupo


A tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores:


<img src="https://user-images.githubusercontent.com/103081069/188251053-5cca07a7-138b-40e5-97f4-cab3bd4a3689.png" width="300px" />
</div>

> - `Vermelho:` Tarefa deve ser entregue imediatamente.
> - `Amarelo:` Atenção a data de entrega.
> - `Verde:` Próxima tarefa a ser feita. 
> - `Azul:` Tarefa a ser feita.

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)

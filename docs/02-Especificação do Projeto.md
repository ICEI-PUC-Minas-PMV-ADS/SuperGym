# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As Personas do projeto foram construídas a partir de entrevistas individuais, suas histórias têm envolvimento tanto direto como indiretamente com o tema proposto para construção desse trabalho. Com as informações coletadas poderemos ter uma diversidade de visões no qual nos permitirá entender melhor cada usuário. Abaixo iremos relatar a história das pessoas entrevistadas.

**Jessica Alencar**
<div align="left">
<img src="https://user-images.githubusercontent.com/101758971/221326351-61e0f439-167b-49df-aef7-fa3350f54a9d.jpg" width="200px" />
</div>

| Idade    | Ocupação  | Objetivo   | Dificuldades | História  | 
|:---------------|:------------------|:---------------------|:-----------------|:-----------------|
|26 anos | Personal traine.| Busco criar um treino de maneira mais rápida. | Levo muito tempo buscando exercícios e escrevendo-os a mão.| Trabalho em varias academias e escrever as fichas a mão me leva muito tempo.| 


**Maria Teresa**
<div align="left">
<img src="https://user-images.githubusercontent.com/103081069/188247598-4753c8b8-150c-4be9-892e-2f7865af4647.jpeg" width="200px" />
</div>

| Idade    | Ocupação  | Objetivo   | Dificuldades | História  | 
|:---------------|:------------------|:---------------------|:-----------------|:-----------------|
|32 anos | Proprietária de academia.| Busco uma maneira de criar treinos de maneira digital.|criar um sistema exclusivo para minha academia, ficaria muito caro.|Quero reduzir o impacto ambiental gerado com as fichas de papel. 

**Paulo Santos**
<div align="left">
<img src="https://user-images.githubusercontent.com/101758971/221717969-dbc82442-8c9f-4c1d-ab83-13cb584717a1.jpg" width="200px" />
</div>

| Idade    | Ocupação  | Objetivo   | Dificuldades | História  | 
|:---------------|:------------------|:---------------------|:-----------------|:-----------------|
|20 anos | Aluno de academia.| Gostaria de receber meu treino via whats app.|Tenho dificuldade de encontrar uma aplicação que me ajude com os treinos|Quero conseguir acessar o meu treino de maneira otimizada via PDF.

**Joã Ricardo**
<div align="left">
<img src="https://user-images.githubusercontent.com/101758971/221720104-a5e982e0-c30d-4ad9-9786-fbc71b8cd827.svg" width="200px" />
</div>

| Idade    | Ocupação  | Objetivo   | Dificuldades | História  | 
|:---------------|:------------------|:---------------------|:-----------------|:-----------------|
|49 anos | Educador físico.| Busco uma forma de compartilhar meu treino com meus alunos.|Tenho alunos em todos os estados e levo muito tempo montando os treinos e enviando por escrito|Quero poder enviar o mesmo treino para vários alunos, asiim poupando meu tempo.
**Maurício Varella**
<div align="left">
<img src="[https://user-images.githubusercontent.com/103081069/188248387-c90e7c90-fc5e-4d72-90b3-457c2e0df417.png](https://user-images.githubusercontent.com/103081069/188248480-28306035-193e-46a6-be80-77212144a877.png)" width="200px" />
</div>

## Histórias de Usuários

A partir das informações passadas pelas Personas acima, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Jessica Alencar      | criar um treino de maneira mais rápida. | Ganhar tempo ao fazer o treino. |
|Maria teresa       | Criar treinos de maneira digital. | Reduzir o impacto ambiental gerado com as folhas. |
|Paulo Santos      | Receber meu treino via whats app. | Acessar o treino de maneira otimizada |
|Joã Ricardo      | Compartilhar os treinos com meus alunos  | Reduzir o tempo que levo escrevendo e enviando os treinos.|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

Existem 2 etapas de produção para a conclusão do produto. Devemos construir uma API Rest, que será responsável pela integração dos dados com o cliente e o App Mobile, onde o usuário realizará as requisições HTTP para o servidor, que deverá enviar as respostas. Tratamento de exceções (eventos anormais que interrompem a execução do programa) devem ser feitos no servidor e no cliente, para que o usuário final tenha uma experiência agradável e com um aplicativo de fácil utilização.

### Requisitos Funcionais - API Rest

A tabela a seguir apresenta os requisitos da API, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A api deve poder receber solicitações HTTP do cliente e responder com dados correspondentes | ALTA | 
|RF-002| A api deve ter as operações de CREATE, READ, UPDATE e DELETE   | MÉDIA |
|RF-003| A api deve ser capaz de autenticar e autorizar usuários a acessar diferentes recursos  | MÉDIA |
|RF-004| A api deve ter tratamento de erros com base no status da resposta HTTP  | MÉDIA |
|RF-005| A api deve ser capaz de lidar com solicitações mais complexas, como capturar dados via ID  | MÉDIA |

### Requisitos não Funcionais - API Rest

A tabela a seguir apresenta os requisitos não funcionais que a API deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A api deve ter um tempo de resposta adequado| MÉDIA | 
|RNF-002| Todas as senhas devem ser encriptadas no banco de dados |  ALTA | 
|RNF-003| A api deve ser segura e proteger os dados do usuário contra acesso não autorizado |  MEDIA | 
|RNF-004| Api deve ser fácil para os desenvolvedores trabalharem |  BAIXA | 
|RNF-005| A api deve ser documentada de forma clara e de fácil entendimento |  MÉDIA | 

### Requisitos Funcionais - App Mobile

A tabela a seguir apresenta os requisitos do App Mobile, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve ser capaz de funcionar em diferentes sistemas operacionais móveis (Android, iOS) | ALTA | 
|RF-002| O aplicativo deve ser capaz de permitir o usuário registrar uma conta | ALTA | 
|RF-002| O aplicativo deve ser capaz de permitir o fazer login | ALTA | 
|RF-003| O aplicativo deve fazer a validação dos dados antes de finalizar a requisição para o servidor | ALTA | 
|RF-004| O aplicativo deve redirecionar o usuário autenticado para a página inicial | ALTA | 
|RF-004| O aplicativo deve permitir que o usuário leia todos os exercícios listados | MÉDIA | 
|RF-005| O aplicativo deve permitir que o usuário leia espicificações de um exercício | MÉDIA | 
|RF-005| O aplicativo deve permitir que o usuário selecione mais de um exercício | MÉDIA | 
|RF-006| O aplicativo deve oferecer opções de confirmação antes de realizar uma ação que o usuário esteja solicitando | MÉDIA | 
|RF-007| O aplicativo deve permitir que o usuário faça logout | MÉDIA | 
|RF-008| O aplicativo deve permitir que o usuário envie seus treinos por um arquivo PDF | ALTA | 

### Requisitos não Funcionais - App Mobile

A tabela a seguir apresenta os requisitos não funcionais que o App Mobile deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser fácil de usar e ter uma interface de usuário atraente| MÉDIA | 
|RNF-002| O aplicativo deve ter um tempo de resposta rápido e consistente. |  ALTA | 
|RNF-003| O aplicativo deve ter um consumo de recursos (bateria e dados móveis) baixo. |  MEDIA | 
|RNF-004| O aplicativo deve ser seguro e proteger os dados do usuário contra acessos não autorizados|  ALTA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O aplicativo deve ter funcionalidades básicas que possam ser feitas no prazo estipulado     |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.     |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/tabela_cronograma.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gantt_1](img/gantt_parte1.png)
![Gantt_2](img/gantt_parte2.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Equipe](img/pessoas.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/orcamento.png)

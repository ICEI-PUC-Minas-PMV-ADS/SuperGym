# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

### Tela 1 Index

<img src="https://user-images.githubusercontent.com/103080396/227782232-7f8d2bc3-df43-4e97-ab0f-b099fef496bd.jpg" width="400px"/> 

- Caso de Teste 1: Teste de usabilidade do botão LOGIN/CADASTRO.
Objetivo: O botão deve redirecionar o usuário para uma tela onde ele possa efetuar o login ou o cadastro dele na aplicação.

### Tela 2 Login

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/36e80b01-242a-4957-ab29-c8e75cfaff76" />  

- Caso de Teste 1: Teste de usabilidade dos inputs do formulário do login
Objetivo: Avaliar se todos os campos de preenchimento são clicáveis e se o usuário consegue preencher sem dificuldades.

- Caso de Teste 2: Teste de  do botão ENTRAR
Objetivo: Verificar se ao preencher os campos, eles passam por validação e em caso positivo e garantem acesso as demais funções da plataforma ao usuário e no caso não passe pela validação informe ao usuário um erro na tela com o motivo do problema.

- Caso de Teste 3: Teste do botão CADASTRE-SE
Objetivo: O usuário recém chegado na plataforma deve poder clicar neste botão e acessar uma tela onde poderá preencher os dados.

### Tela 3 Cadastro

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/4a3c0a46-78b7-4c53-86b7-f4650df7e4cd" />  

- Caso de Teste 1: Teste do preenchimento e validação dos inputs do formulário
Objetivo: Verificar se os campos podem ser preenchidos corretamente e se o preenchimento está sujeito a validações, para que o usuário não preencha com informações desconexas.

- Caso de Teste 2: Teste do botão CRIAR CONTAR
Objetivo: Ao clicar neste botão, o formulário deve ser verificado para que todos os campos tenham sido preenchido corretamente, e em seguida enviar os dados desde usuário ao banco de dados e redirecionar o usuário novamente para a tela de login (tela 2)

### Tela 4 Home

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/9e90fd32-5d32-4d55-9567-0ceb7f2100a1" />  

- Caso de Teste 1: Teste do botão SAIR DO APP
Objetivo: Avaliar se o botão responde adequadamente a função estabelecida.

- Caso de Teste 2: Teste de usabilidade do botão NOVO TREINO
Objetivo: Ao clicar neste botão um modal deve ser apresentado onde será preenchido o nome do aluno.

- Caso de Teste 3: Teste de usabilidade dos exercícios
Objetivo: Após inserido o nome do aluno que receberá o treino o usuário deverá ser capaz de acrescentar ou remover os exercícios que deseja a ficha, e isso poderá ser feito com todas as categorias disponíveis simultaneamente, mesclando as várias categorias em uma só ficha de treino.

### Tela 5 Modal Home

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/f8f56493-bb47-4793-9a92-5374f5cc4f94" />  

- Caso de Teste 1: O input deve pode ser de preenchido com um nome
Objetivo: Permitir a inserção do nome do aluno que receberá a ficha de treino

- Caso de Teste 2: Botão SALVAR
Objetivo: Ao clicar neste botão, o input deverá estar preenchido e logo em seguida o modal deverá fechar, permitindo o usuário iniciar o cadastro da nova ficha de treino do aluno informado.

### Tela 6 Detalhes do Exercício

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/f29ce2ea-6517-4003-9430-05c0fff1b4db" />  

- Caso de Teste 1: Verificar as informações condizem com o exercício
Objetivo: Ao selecionar um dos exercícios da home deverá ser apresentada esta tela onde haverão instruções sobre como o exercício deverá ser executado.

- Caso de Teste 2: Botão ADICIONAR EXERCÍCIO
Objetivo: Verificar se ao ser clicado este botão, acrescenta o exercício em questão a ficha do aluno e em seguida retorna a tela SELECIONAR EXERCICIO (tela 8) , onde poderão ser escolhidos outros exercícios.

### Tela 7 Selecionar Exercícios

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/885c08aa-15a1-49af-a3eb-6888a4483a5e" /> 

- Caso de Teste 1: Botão CONFIRMAR TREINO
Objetivo: O botão deve permanecer inativo (representado visualmente) e após o usuário selecionar ao menos 1 exercício o botão deverá ser habilitado para o usuário selecionar.

### Tela 8 Confirmação de Treino

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/SuperGym/assets/103080396/850fc6d0-a13c-4c8a-b381-776bff2830bd" />  

- Caso de  Teste 1:
Objetivo: Após finalizado o cadastro da ficha o usuário deverá receber confirmação visual e poder baixar o PDF do treino para compartilhar com qualquer usuário a ficha.

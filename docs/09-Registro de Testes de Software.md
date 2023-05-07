# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| CENÁRIO  | CASO DE TESTE  | DESCRIÇÃO  | RESULTADO | 
| ------------ | ------------ | ------------ | -------- |
| 001 - LOGIN  |  CT01 - Login com e-mail inválido  |    Estando na tela de login; Quando preencher usuário e o email não for encontrado; O sistema deve exibir mensagem de erro “usuario não encontrado”  |O acesso ao sistema é negado |
| 001 - LOGIN  | CT02 - Login válido com email e senha  |  Estando na tela de login; Quando o usuário preecnher corretamente os seus dados de email e senha; Então o sistema o direcionará para a tela principal (Lista de treino);  | O acesso ao sistema está sendo autorizado com exito |
| 002 - REGISTER  | CT03 - Preenchimento campos obrigatórios |  Caso os campos obrigatórios não sejam preenchidos a mensagem: “Preencha “todos os campos e tente novamente. será exibida ”. | Mensagem sendo exibida corretamente  |
| 002 - REGISTER  | CT04 - Cadastro com email já existente | Ao tentar utilizar um e-mail já existente uma mensagem será exibida  “Este e-mail já está em uso. “.  | Mensagem sendo exibida corretamente  |
| 002 - REGISTER  | CT05 - Cadastro criado com sucesso |Ao inserir os dados corretamente, o usuário está sendo criado e redirecionado para a página Login com sucesso;  | O usúario está sendo redirecionado |
|  002 - MAIN | CT06 - Criar treino    |  Na tela principal (Criação de treino); Após o usúario selecionar os treinos e clicar no botão de 'confirmar treino' no centro inferior da tela, o sistema irá confirmar o treino criado; O sintema exibira uma mensagem "treino criado com sucesso". | Criação de nova atividade no sistema está sendo registrada  |
|  003 - MAIN | CT07 - Seleção exercícios | Ao clicar nos botões de adicionar ou diminuir o número de séries o número de séries é adicionado e removido com exito; | Programação correta da atividade está sendo exibida na tela |
| 003 - MAIN  | CT08 - carrinho exercícios   |  Se o carrinho estiver vazio o botão de confirmar exercício fica desabilitado caso o carrinho estiver vazio o botão de confirmar exercício fica habilitado   | Funçãoestá sendo executada corretamente |
| 003 -MAIN  | CT09 - Auto login   |  Ao fechar o App sem realizar o Logout, a função de AutoLogin é executada e o token de autenticação do usuário está sendo removido  | Função está sendo executada corretamente|

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)

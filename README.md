# Gerenciador de Tarefas

# Descrição

O Gerenciador de Tarefas é um aplicativo baseado em React, que permite aos usuários criar e gerenciar equipes e as tarefas respectivas. O intuito é permitir uma melhor organização dos projetos permitindo que usuários criem equipes e atribuam tarefa a estas, especificando prazos para as tarefas. 

# Funcionalidades 

- Criação de Equipes: O usuário pode adicionar novas equipes e adicionar membros às mesmas.
- Atribuição de Tarefas: O usuário pode criar tarefas e atribuí-las a membro de determinada equipe  definindo uma data para entrega.
- Gerenciamento de Status das Tarefas: As tarefas podem estar no status "Pendente", "Em Progresso" e "Concluída" (as tarefas podem ter seu status alterado).
- Persistência de Dados: As tarefas e as equipes ficam salvas em armazenamento local do navegador, garantindo que os dados sejam mantidos até mesmo após o recarreamento da página.

# Como funciona? 

# 1. Adicionar equipes

- Formulário de Equipes: O usuário informa o nome da equipe e os nomes dos membros que desejaria adicionar, sendo que ao menos um membro deve ser adicionado antes de salvar a equipe.
- Validações: O aplicativo confere se nome da equipe e os membros foram informados, liberando a adição somente após que as informações tenham sido previamente inseridas.

# 2. Criar tarefas 

- Formulário de Tarefas: O usuário informa uma nova tarefa, seleciona a equipe e o membro que será responsável, e define uma data para entrega.
- Validações: O aplicativo assegura que toda informação necessária (equipe, membro responsável e data de entrega) foi informada antes de adicionar a tarefa. 

# 3. Visualizar e Gerenciar Tarefas 

- Lista de Tarefas: As tarefas criadas ficam visíveis em uma lista onde o usuário pode ver detalhes como a tarefa, responsável e data para entrega.
- Atualização de Status: O status de cada tarefa pode ser atualizado diretamente em lista.
- Exclusão de Tarefas: O usuário pode excluir tarefas que não são mais necessárias.

# 4. Persistência dos Dados

- O aplicativo faz uso do "localStorage" do navegador para o armazenamento das equipes e tarefas, possibilitando que as informações sejam carregadas ao recarregar a página.

# Estrutura do Código

- Principais Componentes:
  - FormularioDeEquipas: Componente que adiciona novas equipes e seus membros.
  - FormularioDeTarefas: Componente que cria e atribui tarefas.
  - ListaDeTarefas: Componente que apresenta todas as tarefas e permite gerenciá-las.
  - ItemDeTarefa: Componente que representa uma única tarefa, permitindo a atualização de status e a exclusão.

- Estado Global: O estado do aplicativo é tratado por meio do hook "useState" e informações armazenadas utilizando "useEffect".

# Como Executar o Aplicativo

# 1. Clone o Repositório:
   git clone 
   

# 2. Instale as Dependências:
   Entre no diretório do projeto e execute:
   npm install


# 3. Inicie o Servidor:
   npm start
 

# 4. Abra o Navegador:
   Navegue para "http://localhost:3000" ou http://localhost:5173/ para visualizar o aplicativo.

# Conclusão

O Gerenciador de Tarefas é uma solução prática para equipes que procuram organizar suas atividades com eficiência. Sinta-se livre para explorar o código e propor melhorias! 
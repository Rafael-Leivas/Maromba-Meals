# Projeto de API de Gestão de Usuários e Refeições

**Grupo: Felipe Loche, Matias Gonzalvez e Rafael Leivas**

## Resumo

Este projeto foi desenvolvido como parte de uma avaliação prática do curso de **Análise e Desenvolvimento de Sistemas** no **Centro Universitário SENAI**. O objetivo é criar uma API funcional que permita a criação e gestão de usuários e suas refeições, com recursos como autenticação de usuários, registro de refeições, recuperação de métricas e controle de acesso. A aplicação foi construída usando **Node.js**, e frameworks como **Fastify**, **Express**, ou **NestJS**, além de um **ORM** (Prisma) para a manipulação de banco de dados.

### Funcionalidades Implementadas:

#### Endpoints de usuário:

1. **Criação de Usuário:**
   - Cadastro de novos usuários no sistema.

     Endpoint:  
     ```
     [POST]: /users/create
     ```

     Body:
     ```
     {
	    "name": "User",
	      "email": "user@email.com"
     }
      ```

3. **Listar Users:**
   - Listar todos os usuários cadastrados.
  
     Endpoint: 
     ```
     [GET]: /users/show
     ```

4. **Editar User:**
   - Editar um usuário cadastrado.
  
     Endpoint: 
     ```
     [PUT]: /users/update/:{id}
     ```

4. **Delete User:**
   - Excluir um usuário cadastrado.
  
     Endpoint: 
     ```
     [DELETE]: /users/delete/:{id}
     ```

#### Endpoints de refeições:

1. **Registro de Refeições:**
   - Inclusão de refeições contendo nome, descrição, data, hora e a indicação se está dentro da dieta.
  
    Endpoint:  
     ```
     [POST]: /meals/create
     ```

     Body:
     ```
     {
        "name": "Strogonoff de carne",
        "description": "Prato de comida no almoço da família",
        "date": "2024-09-25T12:00:00Z",
        "dietMeal": true,
        "userId": "{ID_user}"
      }
      ```

2. **Edição de Refeições:**
   - Permite alterar as informações das refeições já cadastradas.
  
     Endpoint: 
     ```
     [PUT]: /meals/update/:{id}
     ```

3. **Exclusão de Refeições:**
   - Deletar refeições do sistema.

    Endpoint: 
     ```
     [DELETE]: /meals/delete/:{id}
     ```

4. **Listagem de Refeições:**
   - Exibe todas as refeições associadas ao usuário.

     Endpoint: 
     ```
     [GET]: /meals/show
     ```

5. **Visualização de Detalhes de uma Refeição:**
   - Exibe os detalhes de uma refeição específica.

    Endpoint: 
     ```
     [GET]: /meals/show-meals/:{id}
     ```

6. **Recuperação de Métricas do Usuário:**
   - Quantidade total de refeições registradas, dentro ou fora da dieta e a melhor sequência de refeições saudáveis.
  
    Endpoint: 
     ```
     [GET]: /meals/user-metrics/:{id}
     ```

7. **Listar refeição de um usuário:**
   - Vizualiza todas as refeições de um usuário.
  
    Endpoint: 
     ```
     [GET]: /meals/user-meals/:{id}
     ```

### Requisitos

- Node.js
- Docker
- Docker Compose
- Prisma (ORM)

## Como Rodar o Projeto

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
    ```

2. **Configurar as variáveis de ambiente:**

Crie um arquivo .env com as seguintes variáveis:

    DATABASE_URL="postgresql://docker:docker@localhost:5432/maromba-meals"

3. **Executar com Docker Compose:**

Certifique-se de ter o Docker e Docker Compose instalados.

    docker-compose up

4. **Instalar dependências do projeto:**

Rode o seguinte comando

    npm install

5. **Executare a aplicação:**

Após a instalação das dependências, inicie o servidor:

    npm start

6. **Visualizar o banco de dados com Prisma Studio (opcional):**

Caso queira visualizar e manipular os dados do banco de forma gráfica, utilize o Prisma Studio:

    npx prisma studio

7. **Testar a API:**

Utilize ferramentas como Postman ou Insomnia para realizar testes das rotas de criação, edição, exclusão e recuperação de dados.

## Estrutura do Projeto

- Rotas: Definidas para os endpoints de criação, listagem, edição e exclusão de usuários e refeições.
- Controllers: Manipulam as requisições HTTP, conectando-se ao banco de dados e retornando as respostas.
- Prisma ORM: Facilita a comunicação com o banco de dados relacional (PostgreSQL).



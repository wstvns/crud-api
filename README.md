# API de Gerenciamento de Tarefas

## Visão Geral

Esta é uma API RESTful para gerenciamento de tarefas, desenvolvida com **TypeScript**, **Node.js**, **Express.js** e **MongoDB**. Ela oferece operações completas de **CRUD**, e foi projetada para ser escalável, de fácil manutenção e consumo por aplicações **web** (React, Vue, Angular) ou **mobile**.

Ideal para desenvolvedores e equipes que desejam gerenciar tarefas ou projetos de forma eficiente.

---

## Tecnologias

- **TypeScript** – Tipagem estática e melhor organização do código.
- **Node.js** – Ambiente de execução para o servidor.
- **Express.js** – Framework para criação de rotas e middlewares.
- **MongoDB** – Banco de dados NoSQL para armazenamento das tarefas.
- **Mongoose** – ODM para modelagem e interação com o MongoDB.
- **Dotenv** – Gerenciamento de variáveis de ambiente.

---

## Configuração do Ambiente

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/wstvns/crud-api
    cd crud-api
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente**:
    - Crie um arquivo `.env` na raiz do projeto com base no `.env.example` (renomeie ou copie).
    - Exemplo de conteúdo:
      ```
      PORT=3000
      MONGO_URI=mongodb://localhost:27017/taskmanager
      ```

    > **Dica**: Altere a `MONGO_URI` conforme a configuração do seu MongoDB local ou em nuvem.

---

##  Como Executar

- **Modo de desenvolvimento**:
  ```bash
  npm run dev
  ```
  Usa `nodemon` para reinicialização automática e `ts-node` para executar TypeScript.

- **Build para produção**:
  ```bash
  npm run build
  ```
  Compila o código TypeScript para a pasta `dist`.

- **Modo de produção**:
  ```bash
  npm start
  ```
  Executa o código JavaScript compilado da pasta `dist`.

---

## Endpoints da API

> Base URL: `/api/tasks`

### 1. Criar Tarefa

- **POST** `/api/tasks`
- **Body**:
  ```json
  {
    "title": "Nova Tarefa",
    "description": "Descrição detalhada da tarefa",
    "startDate": "2025-06-01T00:00:00.000Z",
    "dueDate": "2025-06-10T00:00:00.000Z",
    "status": "pending"
  }
  ```
- **Resposta (201)**: Objeto da tarefa criada.

---

### 2. Listar Tarefas

- **GET** `/api/tasks`
- **Query Params (opcional)**:
  - `status`: Filtra por status (`pending`, `in-progress`, `completed`)
  - `sortBy`: Campo para ordenação (`createdAt`, `dueDate`)
  - `order`: `asc` ou `desc` (padrão: `asc`)
- **Resposta (200)**: Array de tarefas.

---

### 3. Obter Tarefa por ID

- **GET** `/api/tasks/:id`
- **Resposta (200)**: Objeto da tarefa.
- **Erro (404)**: Se não encontrada.

---

### 4. Atualizar Tarefa

- **PUT** `/api/tasks/:id`
- **Body**: Campos que deseja atualizar (formato igual ao da criação).
- **Resposta (200)**: Tarefa atualizada.
- **Erro (404)**: Se não encontrada.

---

### 5. Excluir Tarefa

- **DELETE** `/api/tasks/:id`
- **Resposta (200)**:
  ```json
  { "message": "Task removed" }
  ```
- **Erro (404)**: Se não encontrada.

---
## Suporte e Contato

Para dúvidas, suporte ou personalizações adicionais, entre em contato que ficarei feliz em te ajudar:

- **Email**: [wstevandev@gmail.com](mailto:wstevandev@gmail.com)
- **GitHub**: [wstvns](https://github.com/wstvns)
- **LinkedIn**: [Wallisson Stevan](https://www.linkedin.com/in/wallisson-stevan-985b9375//)

---
Feito com ❤️ por [W. Stevan](https://www.youtube.com/watch?v=wi8yJdKO1j0). ⬅️ abra para uma surpresa!
---

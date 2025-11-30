# Jitterbit API — Orders CRUD (Node.js + Express + MongoDB)

Este projeto é uma API simples para gerenciar pedidos (orders), desenvolvida como parte do desafio técnico da Jitterbit.
A API permite criar, listar, buscar, atualizar e deletar pedidos, armazenando todos os dados em um banco MongoDB, com transformação do payload antes de salvar.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- Nodemon (ambiente de desenvolvimento)

## Estrutura do projeto
```txt
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── server.js
 ├── app.js
.env.example
```

## Instalação e execução
### 1. Clone o repositório
```sh
git clone https://github.com/mttomaz/jitterbit-api
cd jitterbit-api
```

### 2. Instale dependências
```sh
npm install
```

### 3. Configure o .env

Crie um arquivo .env baseado no .env.example:
```conf
MONGO_URI=mongodb://localhost:27017/jitterbit
```

### 4. Inicie o servidor
```sh
npm run dev
```

A API estará rodando em:
```url
http://localhost:3000
```

## Modelo de dados
### Estrutura salva no MongoDB

A API transforma o JSON recebido antes de persistir:
```json
{
  "orderId": "v10089016vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```


## Rotas da API
### ➤ Criar novo pedido
```sql
POST /order
```

Payload de entrada:
```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

### ➤ Buscar pedido por ID
```sql
GET /order/:orderId
```

Exemplo:
```sql
GET /order/v10089015vdb-01
```

### ➤ Listar todos os pedidos
```sql
GET /order/list
```

### ➤ Atualizar pedido
```sql
PUT /order/:orderId
```

### ➤ Deletar pedido
```sql
DELETE /order/:orderId
```

Exemplo de criação via cURL
```sh
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
    "numeroPedido": "v10089015vdb-01",
    "valorTotal": 10000,
    "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
    "items": [
        {
            "idItem": "2434",
            "quantidadeItem": 1,
            "valorItem": 1000
        }
    ]
}'
```

## Licença

Projeto desenvolvido para fins educacionais/desafio técnico.

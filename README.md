# Web Back Noturno

API back-end desenvolvida em Node.js com Express, Sequelize e MySQL para as aulas de Back-End da UNIESBAM.

## Tecnologias

- Node.js
- Express
- Sequelize
- MySQL
- bcrypt
- dotenv
- jsonwebtoken

## Como executar

Instale as dependencias:

```bash
npm install
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Configure as variaveis no `.env`:

```env
DB_USER=root
DB_PASSWORD=
DB_DATABASE=
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=
JWT_EXPIRES_IN=1d
PORT=3006
```

Crie o banco de dados e execute as migrations:

```bash
npx sequelize db:create
npx sequelize db:migrate
```

Opcionalmente, execute os seeders:

```bash
npx sequelize db:seed:all
```

Inicie o projeto em modo desenvolvimento:

```bash
npm run dev
```

A aplicacao roda na porta configurada em `PORT`.

## Rotas

### Geral

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/general/saude` | Verifica se a aplicacao esta saudavel |
| GET | `/general/algo` | Retorna a pagina HTML de exemplo |
| GET | `/general/jack` | Retorna uma resposta de erro para teste |

### Usuarios

| Metodo | Rota | Descricao |
| --- | --- | --- |
| POST | `/users` | Cria um usuario |
| GET | `/users` | Lista todos os usuarios |
| GET | `/users/:id` | Busca um usuario pelo ID |
| PUT | `/users/:id` | Atualiza um usuario |
| DELETE | `/users/:id` | Remove um usuario |

Exemplo de corpo para criar usuario:

```json
{
  "nome": "Usuario Exemplo",
  "cpf": "12345678901",
  "email": "usuario@email.com",
  "senha": "123456",
  "tipo_usuario": "user"
}
```

O campo `tipo_usuario` aceita os valores `admin`, `user` e `dev`.

## Estrutura

```text
config/       Configuracao do Sequelize
controllers/  Controllers da API
migrations/   Migrations do banco
models/       Models do Sequelize
routes/       Rotas da aplicacao
seeders/      Dados iniciais
public/       Arquivos estaticos
```

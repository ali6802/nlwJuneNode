### [01:03:00] Install Ts-node-dev -D
Pega o codigo typescript e converte para js

### Criando migrations com o npm

Tente adicionar o -- antes do -n

npm run typeorm migration:create -- -n Nome_da_migration

npm run typeorm entity:create -- -n User

## typeorm criando migrations. terminal output
```
$ yarn typeorm migration:run
yarn run v1.22.10
$ ts-node-dev ./node_modules/typeorm/cli.js migration:run
[INFO] 23:20:37 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.3.4)
query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'migrations'
query: CREATE TABLE "migrations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "timestamp" bigint NOT NULL, "name" varchar NOT NULL)query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
0 migrations are already loaded in the database.
1 migrations were found in the source code.
1 migrations are new migrations that needs to be executed.
query: BEGIN TRANSACTION
query: CREATE TABLE "users" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (false), "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))
query: INSERT INTO "migrations"("timestamp", "name") VALUES (?, ?) -- PARAMETERS: [1624326828534,"CreateUsers1624326828534"]
Migration CreateUsers1624326828534 has been executed successfully.
query: COMMIT
Done in 3.70s.
```
## Services 01:10
- server -> ( ) -> SERVICE (Regras, validação, verificação) antes de enviar a requisição ao banco de dados -> Repositories -> Banco de dados

#### Regras
- Cadastro de Usuario
   - Não é permitido cadastrar mais de um usuário com o mesmo e-mail
   - Não é permitido cadastrar usuário sem email

- Cadastro de Tag
   - Não é permitido cadastrar mais de uma tag com o mesmo nome
   - Não é permitido cadastrar tag sem nome
   - Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios
   - Não é permitido um usuário cadastrar um elogio para si
   - Não é permitido cadastrar elogios para usuários inválidos
   - Usuários precisam estar autenticados na aplicação.

   ## Live Dani 22/06
   Extensões VSCode

   Import Cost - biblioteca import
   Bracker Pair Colorizer
   Code Spell Checker
   Code snap


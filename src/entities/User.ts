import {
   Entity,
   PrimaryColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from "typeorm";
 import { Exclude } from "class-transformer";
 import { v4 as uuid } from "uuid";
 //referencia class User a tabela users no db
 @Entity("users")
 class User {
   @PrimaryColumn()
   //a entidade insere este valor e este valor não podera ser alterado por nenhuma outra classe
   readonly id: string;
 
   @Column()
   name: string;
 
   @Column()
   email: string;
 
   @Column()
   admin: boolean;
   @Exclude()
   @Column()
   password: string;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 
   constructor() {
      //cria uma id para o usuario caso ele ainda nao seja cadastrado
     if (!this.id) {
       this.id = uuid();
     }
   }
 }
 
 export { User };

/*
[52:38]
Entidade < - > ORM < - > Banco de Dados
Entidade class User < - > ORM < - > Banco de Dados (users)
[54:43] Abilitar em tsconfig
"emitDecoratorMetadata":true,
"experimentalDecoreators":true,
"strictPropertyInitialization": false, Enable strict checking of property initialization in classes. evitam erros de inicialização de atributos

Repositórios : faz o acesso ao banco de dados. ponte entre a entidade e banco de dados 

*/
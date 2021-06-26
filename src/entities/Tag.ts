import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Expose } from "class-transformer";

//Tag entity também pode ser criado pela CLI
import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {

   @PrimaryColumn()
   readonly id: string;

   @Column()
   name: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   @Expose({name: "nameCustom"})
   nameCustom(): string {
      return `#${this.name}`;
   }

   constructor() {
      if(!this.id) {
         this.id=uuid();
      }
   }
}

export { Tag };
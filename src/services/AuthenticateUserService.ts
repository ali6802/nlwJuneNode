import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../respositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
   email: string;
   password: string;
}

class AuthenticateUserService {

   async execute({email, password}: IAuthenticateRequest){
      //verificar se email existe
      const usersRepositories = getCustomRepository(UsersRepositories);

      const user = await usersRepositories.findOne({email});

      if(!user) {
         throw new Error("Email/Password incorrect")
      }

      const passwordMatch = await compare(password, user.password);

      if(!passwordMatch) {
         throw new Error("Email/Password incorrect")
      }
      // Gerar token
      const token = sign({
         email: user.email,
      },"44ac425cf56332e0756a8483a2bcb864",
      {
         subject: user.id,
         expiresIn: "1d"
      }
      );

      return token;
   }
}

export { AuthenticateUserService }
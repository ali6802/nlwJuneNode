import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../respositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    //creates a new instance of respository. new UsersRepository is not valid
    const usersRepository = getCustomRepository(UsersRepositories);

    console.log("Email", email);
   //verifica se ja há um usuário cadastrado com o email
    if (!email) {
      throw new Error("Email invalid");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
       //erro é sempre lançado para a 'camada' que esta chamando a classe
      throw new Error("User already exists");
    }
    //cria uma nova instance para o usuario com o email entrado 01:23 - Não precisa ser asincrono
    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
  
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
//Error handling option 1: try/catch
/* 
[09:00]

server-> routes - (controller) -> Service (throw new Error)
colocar uma tratativa de error handling no server ao inves de try catch : middlewares
middlewares:interceptadores de uma requisição.
*/

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin, password });

    return response.json(user);
  }
}

export { CreateUserController };
//[40:00] Explicação sobre o middleware usuario admin
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../respositories/UsersRepositories";

export async function ensureAdmin( request: Request, response: Response, next: NextFunction) {
   const { user_id } = request;
   
   const usersRepositories = getCustomRepository(UsersRepositories);

   const { admin } = await usersRepositories.findOne(user_id);

   if(admin) {
      return next();
   }
   // Status 401 Unauthorized
   return response.status(401).json({
      error:"Unauthorized user",
   });
}
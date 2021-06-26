import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
   sub: string;
}

export function ensureAuthenticated (request:Request, response: Response, next: NextFunction) {
   //Receber o token
   const authtoken = request.headers.authorization;   
   //Validar se token esta preenchido
   if(!authtoken) {
      return response.status(401).end();
   }
   const [,token] = authtoken.split(" ");

   try {
      const { sub } = verify(token,process.env.HASH_TOKEN) as IPayload;

      request.user_id = sub;
      return next();
   } catch (err) {
      return response.status(401).end();
   }
  
}
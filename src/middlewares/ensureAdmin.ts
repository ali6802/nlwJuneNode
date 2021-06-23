//[40:00] Explicação sobre o middleware usuario admin
import { Request, Response, NextFunction } from "express";

export function ensureAdmin( request: Request, response: Response, next: NextFunction) {
   //verificar se usuario admin
   const admin = true;// provisorio enquanto JWT não é implantado

   if(admin) {
      return next();
   }
   // Status 401 Unauthorized
   return response.status(401).json({
      error:"Unauthorized user",
   });
}
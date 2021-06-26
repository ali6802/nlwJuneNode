import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();

import { router } from "./routes";

import "./database";

const app = express();
const port = process.env.PORT || 3000;

//this is necessary otherwise the body does not support json
app.use(express.json());

app.use(router);

//criando middleware de tratativas de erro: 4 parametros
//instalar express-async-error
app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
   if(err instanceof Error) {
      return response.status(400).json({error: err.message})
   }
   return response.status(500).json({
      status:"error",
      message: "Internal Server Error"
   })
})

app.listen(port, () => console.log("The server is listening on port ",port));
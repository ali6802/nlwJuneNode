import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();
const port = process.env.PORT || 3000;

//this is necessary otherwise the body does not support json
app.use(express.json());

app.use(router);

app.listen(port, () => console.log("The server is listening on port ",port));
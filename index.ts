import express, { Express, Request,Response } from "express"; 
import * as dotenv from 'dotenv'

//TODAS LAS INSTALACIONES
//Para usar typescript para algo mucho mas tipado y seguro
//npm i -D typescript @types/express @types/node
//npm i -D webpack webpack-cli webpack node-externals webpack-shell-plugin
//npm i -D eslint jest ts-jest @types/jest supertest
//npx tsc --init

//Configuration .env file
dotenv.config();

//Create application
const app: Express = express();
const port: string | number = process.env.PORT || 9999;

//Define the first Route of APP
app.get("/", (request:Request, response:Response) => {
   //Send hello World
   // response.send("Welcome to my API RESTful: Express + TS + Nodemon + Jest + SWAGGER + Mongoose");

   response.json({message: "Goodbye, world"});

 });
 

app.get("/hello", (request:Request, response:Response) => {
   //Send hello World
   response.send("Hello World");
 });

//Execute APP and Listen requests to Port
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}`)
);

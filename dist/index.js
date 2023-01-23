"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
//TODAS LAS INSTALACIONES
//Para usar typescript para algo mucho mas tipado y seguro
//npm i -D typescript @types/express @types/node
//npm i -D webpack webpack-cli webpack node-externals webpack-shell-plugin
//npm i -D eslint jest ts-jest @types/jest supertest
//npx tsc --init
//Configuration .env file
dotenv.config();
//Create application
const app = (0, express_1.default)();
const port = process.env.PORT || 9999;
//Define the first Route of APP
app.get("/", (request, response) => {
    //Send hello World
    // response.send("Welcome to my API RESTful: Express + TS + Nodemon + Jest + SWAGGER + Mongoose");
    response.json({ message: "Goodbye, world" });
});
app.get("/hello/:name?", (request, response) => {
    //Send hello World
    const name = request.params.name ? request.params.name : "anonimo";
    response.send(`Hello ${name}`);
});
//Execute APP and Listen requests to Port
app.listen(port, () => console.log(`Express server running at http://localhost:${port}`));
//# sourceMappingURL=index.js.map
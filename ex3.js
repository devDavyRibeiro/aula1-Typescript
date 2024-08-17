"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let x = Number(prompt("Digite um número para o começo do intervalo: "));
let y = Number(prompt("Digite um número número para o final do intervalo: "));
let z = Number(prompt("Digite um número qualquer: "));
if (z > x && z < y) {
    console.log(`Número ${z} esta dentro do intervalor [${x},${y}]`);
}
else {
    console.log(`Número ${z} não esta dentro do intervalor [${x},${y}]`);
}

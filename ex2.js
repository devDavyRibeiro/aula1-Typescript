"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = Number(prompt("Digite um número maior que 10: "));
if (numero > 10) {
    lista.push(numero);
    console.log(lista);
}
else {
    console.log(`Você não digitou um número maior que 10. 
    Número digitado --> ${numero}`);
}

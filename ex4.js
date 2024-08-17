"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
const numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) { // três iguais
    console.log(`Número ${numero} é par`);
}
else {
    console.log(`Número ${numero} é impar`);
}

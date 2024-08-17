"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function calculos(num1, num2) {
    let resultado;
    resultado = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${resultado}`);
    resultado = num1 - num2;
    console.log(`Soma: ${num1} - ${num2} = ${resultado}`);
    resultado = num1 * num2;
    console.log(`Soma: ${num1} * ${num2} = ${resultado}`);
    if (num2 != 0) {
        resultado = num1 / num2;
        console.log(`Soma: ${num1} + ${num2} = ${resultado}`);
    }
    else {
        console.log("Não foi possível realizar divisao. Divisão por zero");
    }
}
let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite outro número:"));
calculos(numero1, numero2);

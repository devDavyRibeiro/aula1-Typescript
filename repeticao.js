"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let anoI;
let idade = 0;
let nascimento = Number(prompt("Digite o seu ano de nascimento: "));
anoI = nascimento;
while (anoI <= 2024) {
    idade += 1;
    anoI = +1;
    console.log("ANO :" + anoI + "\n" + "IDADE : " + idade);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
const numero = prompt("Escreva um número: ");
let primeiro = Number(numero) - 2;
let segundo = Number(numero) - 1;
let terceiro = Number(numero) + 1;
let quarto = Number(numero) + 2;
console.log(`${primeiro}, ${segundo}, ${numero}, ${terceiro}, ${quarto}`);

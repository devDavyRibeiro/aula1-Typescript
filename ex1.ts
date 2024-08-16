import PromptSync from "prompt-sync";
var prompt = PromptSync()
const numero : string = prompt("Escreva um número: ")

let primeiro : number  = Number(numero) - 2
let segundo : number = Number(numero) - 1
let terceiro : number = Number(numero) + 1
let quarto : number = Number(numero) + 2
console.log(`Antecessores: ${primeiro} e ${segundo}, ${numero}.
    Sucessores: ${terceiro}, ${quarto}`)


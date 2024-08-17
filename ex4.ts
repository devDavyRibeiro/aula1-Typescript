import PromptSync from "prompt-sync"
var prompt = PromptSync()
const numero = Number(prompt("Digite um número: "))
if(numero % 2 === 0 ){ // três iguais
    console.log(`Número ${numero} é par`)
} 
else{
    console.log(`Número ${numero} é impar`)
}
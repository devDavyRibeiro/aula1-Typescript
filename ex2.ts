import PromptSync from "prompt-sync"
var prompt = PromptSync()
let lista : Array<number> = [1,2,3,4,5,6,7,8,9,10]
let numero : number = Number(prompt("Digite um número maior que 10: "))

if(numero > 10 ){
    lista.push(numero)
    console.log(lista)
}
else{
    console.log(`Você não digitou um número maior que 10. 
    Número digitado --> ${numero}`)
}

import PromptSync from "prompt-sync"
const prompt = PromptSync()
let anoI : number
let idade: number = 0
let nascimento: number = Number(prompt("Digite o seu ano de nascimento: "))
anoI = nascimento
while(anoI <= 2024){
    idade += 1
    anoI =+ 1
    console.log("ANO :" + anoI +"\n" + "IDADE : " + idade)
}
import PromptSync from "prompt-sync"
let prompt = PromptSync()
let x : number = Number(prompt("Digite um número para o começo do intervalo: "))
let y : number = Number(prompt("Digite um número número para o final do intervalo: "))

let z:number = Number(prompt("Digite um número qualquer: "))
if(z > x && z < y){
    console.log(`Número ${z} esta dentro do intervalor [${x},${y}]`)
}
else{
    console.log(`Número ${z} não esta dentro do intervalor [${x},${y}]`)
}
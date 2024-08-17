import PromptSync from "prompt-sync"
const prompt = PromptSync()

function calculos(num1:number, num2:number){
    let resultado: number
    resultado = num1 + num2
    console.log(`Soma: ${num1} + ${num2} = ${resultado}`)

    resultado = num1 - num2
    console.log(`Soma: ${num1} - ${num2} = ${resultado}`)

    resultado = num1 * num2
    console.log(`Soma: ${num1} * ${num2} = ${resultado}`)

    if(num2 != 0){
        resultado = num1 / num2
        console.log(`Soma: ${num1} + ${num2} = ${resultado}`)
    }
    else{
        console.log("Não foi possível realizar divisao. Divisão por zero")
    }
}

let numero1:number = Number(prompt("Digite um número:")) 
let numero2:number = Number(prompt("Digite outro número:")) 
calculos(numero1,numero2)
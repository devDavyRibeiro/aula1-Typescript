"use strict";
//funcção sem parâmetro e sem retorno
function imprime() {
    console.log("sem parametro e sem retorno");
}
imprime(); //chamada da funcao
//função com parametro e sem retorno
function soma(num1, num2) {
    console.log(`Soma${num1 + num2}`);
}
soma(1, 2); // chamada da função
//função com paramentro e com retorno
function sunbtrai(num1, num2) {
    return num1 - num2;
}
let resultado = sunbtrai(1, 2);
console.log(resultado);

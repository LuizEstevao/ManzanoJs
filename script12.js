/* 
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos.          
*/

let A = parseFloat(prompt("Digite o valor da primeira variável: ")); // solicita o valor da primeira variável.
let B = parseFloat(prompt("Digite o valor da segunda variável: ")); // solicita o valor da segunda variável.
let C = parseFloat(prompt("Digite o valor da terceira variável: ")); // solicita o valor da terceira variável.

let calculo = Math.pow(A, 2) + Math.pow(B, 2) + Math.pow(C, 2); //realiza o calculo pedido

alert(`O valor da soma de quadrados dos valores solicitados é: ${calculo}  `); //exibindo do resultado em um alert

console.log(
  `O valor da soma de quadrados dos valores solicitados é: ${calculo}  `
); //exibindo o valor do resultado em um console.log

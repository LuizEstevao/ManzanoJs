/* 
Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
quadrado da soma dos três valores lidos.           
*/

let A = parseFloat(prompt("Digite o valor da primeira variável: ")); // solicita o valor da primeira variável.
let B = parseFloat(prompt("Digite o valor da segunda variável: ")); // solicita o valor da segunda variável.
let C = parseFloat(prompt("Digite o valor da terceira variável: ")); // solicita o valor da terceira variável.

let calculo = A + B + C; //realiza o calculo pedido
let resultado = Math.pow(calculo, 2); // calcula o quadrado da soma dos

alert(`O valor da soma de quadrados dos valores solicitados é: ${resultado}  `); //exibindo do resultado em um alert

console.log(
  `O valor da soma de quadrados dos valores solicitados é: ${resultado}  `
); //exibindo o valor do resultado em um console.log

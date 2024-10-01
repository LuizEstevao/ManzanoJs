/* 
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500.    (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

let numero = 1;
let soma = 0;

do {
  if (numero % 2 == 0) {
    soma += numero;
  }
  numero++;
} while (numero <= 500);

console.log(`A somatória os valores é: ${soma}`);

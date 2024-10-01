/* 
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido.  (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

let somaFatoriais = 0;
let contador = 1;

do {
  let valor = parseInt(prompt(`Digite o ${contador}º número inteiro:`)); // Lê o valor do usuário
  let fatorial = 1;

  // Calcula o fatorial do valor
  for (let i = valor; i > 1; i--) {
    fatorial *= i;
  }

  somaFatoriais += fatorial; // Soma o fatorial ao total
  contador++;
} while (contador <= 15);

console.log(`O somatório dos fatoriais é: ${somaFatoriais}`);

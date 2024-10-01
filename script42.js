/* 
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. 
*/

//laço de repetição for para exxecutar oq se pede
let somaTotal = 0;  // Inicializar a variável somaTotal
let resultado;

for (let contador = 1; contador <= 500; contador++) {
  if (contador % 2 == 0) {  // Verifica se o número é par
    somaTotal = somaTotal + contador;  // Acumula os números pares
  }
}

console.log(`A somatória de todos os termos é: ${somaTotal}`);






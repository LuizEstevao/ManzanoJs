/* 
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10.   (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

// Variável para armazenar o resultado do fatorial
let resultadoFatorial = "";
let numero = 1; // Inicia com o primeiro número ímpar

do {
  // Verifica se o número é ímpar
  if (numero % 2 !== 0) {
    let fatorial = 1;
    let contador = 1;

    // Calcula o fatorial do número
    do {
      fatorial *= contador;
      contador++;
    } while (contador <= numero);

    // Armazena o resultado no formato "número! = fatorial"
    resultadoFatorial += `${numero}! = ${fatorial}\n`;
  }
  numero++; // Incrementa para o próximo número
} while (numero <= 10); // Continua até o número 10

// Exibe o resultado
console.log(resultadoFatorial);

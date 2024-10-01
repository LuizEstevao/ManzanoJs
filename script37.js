/* 
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.    (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

// Variáveis para armazenar o maior e o menor valor
let maiorValor = null;
let menorValor = null;

let valor; // Declara a variável para o valor

do {
  valor = parseInt(
    prompt("Digite um valor inteiro positivo (ou um valor negativo para sair):")
  );

  // Verifica se o valor é positivo antes de atualizar maior e menor
  if (valor >= 0) {
    // Atualiza o maior e o menor valor
    if (maiorValor === null || valor > maiorValor) {
      maiorValor = valor; // Atualiza o maior valor
    }
    if (menorValor === null || valor < menorValor) {
      menorValor = valor; // Atualiza o menor valor
    }
  }
} while (valor >= 0); // Continua enquanto o valor for positivo

// Verifica se algum valor positivo foi informado
if (maiorValor !== null && menorValor !== null) {
  console.log(`O maior valor informado é: ${maiorValor}`);
  console.log(`O menor valor informado é: ${menorValor}`);
} else {
  console.log("Nenhum valor positivo foi informado.");
}

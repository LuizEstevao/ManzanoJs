/* 

Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média.   (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

// Declarando as variáveis do programa
let soma = 0;
let quantidade = 0;

// Iniciando o programa
let valor = parseInt(prompt("Digite um valor positivo para começar: "));

// Laço de repetição do para realizar o que o enunciado pede
do {
  if (valor >= 0) {
    soma += valor;
    quantidade++;
  }
  valor = parseInt(prompt("Digite outro valor (negativo para sair): "));
} while (valor >= 0); // Continua enquanto o valor for positivo

// Verifica se foram lidos valores positivos
if (quantidade > 0) {
  let media = soma / quantidade;
  alert(
    `O total do somatório é: ${soma}\nA média aritmética é: ${media.toFixed(2)}\nO total de valores lidos é: ${quantidade}`
  );
} else {
  alert(
    "Não foi possível calcular a média pois não foram lidos valores positivos."
  );
}

// Fim do programa
console.log(
  `O total do somatório é: ${soma}\nA média aritmética é: ${media}\nO total de valores lidos é: ${quantidade}`
);

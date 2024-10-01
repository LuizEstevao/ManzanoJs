/* 
 Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos.    (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/





// Função para calcular o somatório e a média aritmética de 10 valores
function calculo() {
  let contador = 1; // Contador inicial
  let total = 0; // Variável para armazenar o somatório dos valores

  // Estrutura de repetição while para solicitar 10 valores
  while (contador <= 10) {
    let valor = parseFloat(prompt(`Digite o valor ${contador}: `)); // Solicita o valor do usuário
    total += valor; // Soma o valor ao total
    contador++; // Incrementa o contador
  }

  let media = total / 10; // Calcula a média aritmética

  return [total, media]; // Retorna o somatório e a média aritmética
}

// Chamar a função e obter o total e a média
let [total, media] = calculo();

// Exibir o resultado no console
console.log(`O resultado final somando todos os valores é: ${total}`);
console.log(`A média aritmética dos valores é: ${media}`);

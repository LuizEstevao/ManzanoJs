/* 
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10.   (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

// Variável para armazenar a área total da residência
let areaTotal = 0;

// Laço para continuar solicitando cômodos
let continuar = "SIM"; // Inicializa com "SIM" para entrar no loop

do {
  // Solicita o nome do cômodo
  let nomeComodo = prompt("Digite o nome do cômodo:");

  // Solicita a largura e o comprimento do cômodo
  let largura = parseFloat(
    prompt(`Digite a largura do ${nomeComodo} (em metros):`)
  );
  let comprimento = parseFloat(
    prompt(`Digite o comprimento do ${nomeComodo} (em metros):`)
  );

  // Calcula a área do cômodo
  let areaComodo = largura * comprimento;
  areaTotal += areaComodo; // Adiciona a área do cômodo à área total

  // Apresenta a área do cômodo lido
  alert(`A área do ${nomeComodo} é: ${areaComodo} m²`);

  // Pergunta se o usuário deseja continuar
  continuar = prompt(
    "Deseja calcular a área de outro cômodo? (SIM/NAO)"
  ).toUpperCase();
} while (continuar === "SIM"); // Continua enquanto o usuário responder "SIM"

// Apresenta o total acumulado da área residencial
alert(`A área total da residência é: ${areaTotal} m²`);
console.log(`A área total da residência é: ${areaTotal} m²`);

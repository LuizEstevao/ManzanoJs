/* 
 Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área - 46 - 
MANZANO, José Augusto N. G., Estudo Dirigido: ALGORITMOS - Editora Érica, 2000. 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial.  (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

// Função para calcular a área de um cômodo
function calcularArea(largura, comprimento) {
  return largura * comprimento;
}

let continuar = true; // Variável para controlar a repetição
let areaTotal = 0; // Variável para armazenar a área total da residência

// Loop enquanto o usuário quiser adicionar novos cômodos
while (continuar) {
  // Solicita os dados do cômodo
  let nomeComodo = prompt("Digite o nome do cômodo:");
  let largura = parseFloat(
    prompt(`Digite a largura do(a) ${nomeComodo} em metros:`)
  );
  let comprimento = parseFloat(
    prompt(`Digite o comprimento do(a) ${nomeComodo} em metros:`)
  );

  // Calcula a área do cômodo
  let areaComodo = calcularArea(largura, comprimento);

  // Exibe a área do cômodo
  console.log(`A área do(a) ${nomeComodo} é: ${areaComodo.toFixed(2)} m²`);

  // Acumula a área total
  areaTotal += areaComodo;

  // Pergunta se o usuário deseja continuar
  let resposta = prompt(
    "Deseja continuar calculando a área de novos cômodos? (Digite 'NAO' para encerrar)"
  );

  // Verifica se a resposta foi "NAO" (ignorando letras maiúsculas ou minúsculas)
  if (resposta.toUpperCase() === "NAO") {
    continuar = false;
  }
}
// Exibe a área total da residência
console.log(`A área total da residência é: ${areaTotal.toFixed(2)} m²
`);
// Exibe a mensagem de encerramento
console.log("Obrigado por utilizar o programa!");

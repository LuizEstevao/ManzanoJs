/* Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).          
*/

let valor = parseFloat(prompt("Digite o valor: ")); // solicitando o valor 
let taxa = parseFloat(prompt("Digite a taxa de juros (em %): ")); // solicitando a taxa de juros
let tempo = parseFloat(prompt("Digite o valor do tempo (dias): ")); // solicitando o tempo de atraso a taxa

let prestacao = valor + (valor * taxa / 100) * tempo

// Exibindo um alerta com o valor da prestação
alert(`O valor da prestação é: ${prestacao.toFixed(2)} reais`);

// Exibindo no console os mesmos valores
console.log(`O valor da prestação é: ${prestacao.toFixed(2)} reais`);

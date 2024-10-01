/* Efetuar o cálculo da quantidade de litros de combustível gasta  em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem.         
*/

let velocidade = parseFloat(prompt("Digite o valor da velocidade (km/h): ")); // solicitando a velocidade
let tempo = parseFloat(prompt("Digite o valor do tempo (horas): ")); // solicitando o tempo de viagem

let distanciaPercorrida = velocidade * tempo; // calculando a distância percorrida
let litrosUsados = distanciaPercorrida / 12; // considerando que o veículo consome 1 litro a cada 12 km
let velocidadeMedia = distanciaPercorrida / tempo; // calculando a velocidade média

// Exibindo um alerta com o valor de litros usados, distância percorrida e velocidade média arredondados
alert(`Foi utilizado ${litrosUsados.toFixed(2)} litros nesse percurso\n
O valor da distância percorrida é ${distanciaPercorrida.toFixed(2)} km\n
A velocidade média é ${velocidadeMedia.toFixed(2)} km/h`);

// Exibindo no console os mesmos valores
console.log(`Foi utilizado ${litrosUsados.toFixed(2)} litros nesse percurso\n
O valor da distância percorrida é: ${distanciaPercorrida.toFixed(2)} km \n
A velocidade média é: ${velocidadeMedia.toFixed(2)} km/h`);

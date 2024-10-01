/* 
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas.    (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

// Declarando e atribuinddo valores a variáveis
let Celsius = 10;
let Fahrenheit;

// laço dde repetição while para realizar
while (Celsius <= 100) {
  Fahrenheit = (Celsius * 9 / 5 ) + 32;
  Celsius = Celsius + 10;
  console.log(
    `A temperatura de ${Celsius} C° é igual a ${Fahrenheit} F°`
  );
}


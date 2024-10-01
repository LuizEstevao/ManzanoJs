/* 
E laborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas.
*/

alert("Conversão de Celsius para Fahrenheit de 10°C a 100°C:");

for (let celsius = 10; celsius <= 100; celsius += 10) {
  let Fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C é igual a ${Fahrenheit}°F`);
}

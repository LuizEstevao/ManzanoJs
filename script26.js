/* 
 
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70.   (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

let soma = 0;
let contador = 50;

while (contador <= 70) {
  if (contador % 2 == 0) {
    soma += contador; 
    console.log(contador)
  }
  contador++;
}
  media = soma / contador;

console.log(
  `A soma dos valores pares é: ${soma}` +
    `\nA média dos valores pares é: ${media.toFixed(2)}`);

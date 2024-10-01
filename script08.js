/* 
Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME  COMPRIMENTO * LARGURA * ALTURA.         
*/

let comprimento = parseFloat(prompt("Digite o valor do comprimento: ")); // solicitando o valor do comprimento do retangulo
let largura = parseFloat(prompt("Digite o valor da largura")); // solicitando o valor da largura do retangulo
let altura = parseFloat(prompt("Digite o terceiro altura: ")); // solicitando o valor da altura do retangulo

let volume = comprimento * largura * altura;

console.log(`O volume da caixa retangular é: ${volume.toFixed(2)} m³`); // apresentando o volume

alert(`O volume da caixa retangular é: ${volume.toFixed(2)} m³`); // apresentando o volume, agora em um alert

/* 
Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e 
D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma 
(variável S) do segundo com o quarto valor.          
*/

let A = parseFloat(prompt("Digite o valor da primeira variável: ")); // solicita o valor da primeira variável.
let B = parseFloat(prompt("Digite o valor da segunda variável: ")); // solicita o valor da segunda variável.
let C = parseFloat(prompt("Digite o valor da terceira variável: ")); // solicita o valor da terceira variável.
let D = parseFloat(prompt("Digite o valor da quarta variável: ")); // solicita o valor da quarta variável.

//realiza os calculo pedido
let P = A * C;
let S = B + D;



alert(`O resultado das operações pedidas são: \n
       Produto do primeiro valor com o terceiro : ${P} \n
       Produto do segundo valor com o quarto : ${S} \n`); //exibindo do resultado em um alert

console.log(`O resultado das operações pedidas são: \n
  Produto do primeiro valor com o terceiro : ${P} \n
  Produto do segundo valor com o quarto : ${S} \n`); //exibindo o valor do resultado em um console.log

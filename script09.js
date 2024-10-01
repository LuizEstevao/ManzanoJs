/* 
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
segundo.         
*/

let A = parseFloat(prompt("Digite o valor do primeiro valor: ")); // solicitando o primeiro valor
let B = parseFloat(prompt("Digite o valor do segundo valor")); // solicitando o segundo valor

let diferenca = A - B;

console.log(`A diferença entre o primeiro valor e o segundo é ${diferenca}`); // apresentando a diferença

alert(`A diferença entre o primeiro valor e o segundo é:  ${diferenca}`); // apresentando a diferença, agora em um alert

/* 
Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.          
*/

let A = parseFloat(prompt("Digite o primeiro valor: ")); // solicitando o primeiro valor
let B = parseFloat(prompt("Digite o segundo valor")); // solicitando o segundo juros
let C = parseFloat(prompt("Digite o terceiro valor: ")); // solicitando o terceiro valor
let D = parseFloat(prompt("Digite o quarto valor")); // solicitando o quarto juros

//adição
let somaAB = A + B;
let somaAC = A + C;
let somaAD = A + D;
let somaBC = B + C;
let somaBD = B + D;
let somaCD = C + D;

//multiplicação
let multiAB = A * B;
let multiAC = A * C;
let multiAD = A * D;
let multiBC = B * C;
let multiBD = B * D;
let multiCD = C * D;

//exibir um alert com todos os resultados
alert(`Os resultados das operações são: \n
    soma  AB: ${somaAB}\n
    soma  AC: ${somaAC}\n
    soma  AD: ${somaAD}\n
    soma  BC: ${somaBC}\n
    soma  BD: ${somaBD}\n
    soma  CD: ${somaCD}\n

    multiplicação AB: ${multiAB}\n
    multiplicação AC: ${multiAC}\n
    multiplicação AD: ${multiAD}\n
    multiplicação BC: ${multiBC}\n
    multiplicação BD: ${multiBD}\n
    multiplicação CD: ${multiCD}\n`);

console.log(`Os resultados das operações são: \n
    soma  AB: ${somaAB}\n
    soma  AC: ${somaAC}\n
    soma  AD: ${somaAD}\n
    soma  BC: ${somaBC}\n
    soma  BD: ${somaBD}\n
    soma  CD: ${somaCD}\n

    multiplicação AB: ${multiAB}\n
    multiplicação AC: ${multiAC}\n
    multiplicação AD: ${multiAD}\n
    multiplicação BC: ${multiBC}\n
    multiplicação BD: ${multiBD}\n
    multiplicação CD: ${multiCD}\n`);

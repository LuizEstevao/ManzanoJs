/* 
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da 
variável A. Apresentar os valores trocados          
*/

let valor1 = prompt("Digite o primeiro valor: "); // solicitando o primeiro valor
let valor2 = prompt("Digite o segundo valor"); // solicitando o segundo juros
let alterador;

alterador = valor1;
valor1 = valor2;
valor2 = alterador;

// Exibindo um alerta com os valores trocados
alert(`O primeiro valor informado agora é:  ${valor1} \n
    O segundo valor informado agora é:  ${valor2}`);

// Exibindo o mesmo  no console
console.log(`O primeiro valor informado agora é:  ${valor1} \n
    O segundo valor informado agora é:  ${valor2}`);

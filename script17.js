/* 
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

// Solicitar o número da tabuada
let numero = prompt("Digite um número para ver a tabuada de multiplicar:");
let contador = 1;

// Exibir a tabuada de multiplicação de 1 até 10
while (contador <= 10) {
    let resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    alert(numero + " x " + contador + " = " + resultado)
    contador++;
}


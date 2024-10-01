/* 

Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor 
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
portuguol (^).    (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/


// Solicitar base e expoente
let base = parseInt(prompt("Digite o valor da base: "));
let expoente = parseInt(prompt("Digite o valor do expoente: "));
let resultado = 1;

// Se o expoente for maior ou igual a 0, calculamos a potência
if (expoente >= 0) {
  let contador = 0;

  // Repetir a multiplicação da base pelo número de vezes do expoente
  while (contador < expoente) {
    resultado *= base;
    contador++;
  }

  console.log(base + " elevado a " + expoente + " = " + resultado);
  alert(base + " elevado a " + expoente + " = " + resultado);
} else {
  console.log("O expoente deve ser um número inteiro não negativo.");
  alert("O expoente deve ser um número inteiro não negativo.");
}


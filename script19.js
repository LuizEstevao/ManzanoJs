/* 
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500.   (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

// informa o valor as variaveis
let contador = 1;
let somatotal = 0;

// contador de 1 até 500 (somente os pares)
while (contador <= 500) {
  if (contador % 2 == 0) {
    somatotal = somatotal + contador;
  }
  contador++;
}

console.log(`A soma de todos os pares é: ${somatotal}`);
alert(`A soma de todos os pares é: ${somatotal}`);

/* 
Apresentar os quadrados dos números inteiros de 15 a 200.   (ESTRUTURA DE REPETIÇÃO REPITA)   
*/


let numero = 15;

do {
  let quadrado = numero * numero;
  console.log(`O quadrado de ${numero} é ${quadrado}`);
  numero++;
} while (numero <= 200);



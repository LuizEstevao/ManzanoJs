/* 
Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor 
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
portuguol (^). 
*/

let base = parseFloat(prompt("Digite um número: "));
let expoente = parseInt(prompt("Digite o expoente: "));

let resultado = 1;

// Para expoente positivo
if (expoente >= 0) {
  for (let contador = 1; contador <= expoente; contador++) {
    resultado *= base;
  }
} else {
  // Para expoente negativo (base elevada ao inverso)
  for (let contador = 1; contador <= -expoente; contador++) {
    resultado /= base;
  }
}

console.log(`${base} elevado a ${expoente} = ${resultado}`);



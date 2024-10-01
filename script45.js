/* 
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
*/

let base = 3; // declaração de variavél da base 3

//laço de repetição for para exxecutar oq se pede

for (let expoente = 0; expoente <= 15; expoente++) {
  let resultado = 1;
  if (expoente == 0) {
    resultado = 1;
  } else {
    for (let contador = 0; contador <= expoente; contador++) {
      resultado = resultado * base;
    }
  }
  console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
}

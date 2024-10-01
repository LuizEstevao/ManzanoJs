/* 
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).    (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

//declaração e variaveis
let base = 3;
let expoente = 0;
let resultado;

// contador de 0 até 15 (expoentes)
while (expoente <= 15) {
  resultado = 1;

  // Verificar se o expoente é maior que 0 para calcular a potência
  if (expoente > 0) {
    let contador = 1;
    while (contador <= expoente) {
      resultado *= base; // Multiplica repetidamente para calcular a potência
      contador++;
    }
  }

  console.log(base + " elevado a " + expoente + " = " + resultado);
  expoente++;
}





/* LÓGICA VISUALG



para expoente de 0 ate 15 faca
      resultado <- 1
      se expoente = 0 entao
         resultado <- 1
      senao
         para contador de 1 ate expoente faca
            resultado <- resultado * base
         fimpara
      fimse

      escreval("3 elevado a ", expoente, " = ", resultado)
   fimpara*/

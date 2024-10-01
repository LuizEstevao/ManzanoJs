/* 
Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar 
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução 
, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.    (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/


//declaração e variaveis
let contador = 1;
let ímpar;

// contador de 1 até 20 (verificar ímapares)
while (contador <= 20) {
  if (contador % 2 == 1) {
    console.log(`${contador} <- esse valor é ímpar`);
  }
  contador++;
}


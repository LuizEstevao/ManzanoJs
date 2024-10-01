/* 
Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).  (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

// informa o valor as variaveis
let contador = 1;
let somatotal = 0;

// contador de 1 até 100
while (contador <= 100) {
  somatotal = somatotal + contador;
  contador++;
}

console.log(`A soma de todos os termos é: ${somatotal}`);
  alert(`A soma de todos os termos é: ${somatotal}`);

/* 
 Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).  
*/

//laço de repetição for para exxecutar oq se pede
let somaTotal = 0;

for(let contador = 1; contador <= 100; contador++ ){
  somaTotal = somaTotal + contador
  let resultado = contador + contador  
  console.log(`A somatória de todos os termos é: ${somaTotal}`);
}




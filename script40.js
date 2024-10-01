/* 
 Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).  
*/

//laço de repetição for para exxecutar oq se pede
let numero = parseInt(prompt("Digite um numero para ser efetuado sua taboada: "))

for(let contador = 1; contador <= 10; contador++ ){
  console.log(` ${numero} X ${contador} = ${numero * contador}`);
}




/* 
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.   (ESTRUTURA DE REPETIÇÃO ENQUANTO)   
*/

//declarando a variavel do programa
let programa;

//iniciando o programa
let valor = parseInt(prompt("Digite um valor positivo para começar: "))

//laço de repetição while para realizar oque o enunciado pede
while( valor >= 0){ 
  programa = valor
  valor = parseInt(prompt("Digite outro valor: "))
  }

  //apresentando o maior e o menor valor
  console.log(`O maior valor informado foi: ${Math.max(programa, valor)}`
  + `\nO menor valor informado foi: ${Math.min(programa, valor)}`
  )



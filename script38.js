/* 
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.   (ESTRUTURA DE REPETIÇÃO REPITA)   
*/

// Solicita ao usuário o dividendo e o divisor
let dividendo = parseInt(prompt("Digite o dividendo (número a ser dividido):"));
let divisor = parseInt(prompt("Digite o divisor (número pelo qual dividir):"));

// Verifica se o divisor é zero para evitar divisão por zero
if (divisor === 0) {
  alert("O divisor não pode ser zero.");
} else {
  let quociente = 0; // Inicializa o quociente

  // Loop para contar quantas vezes o divisor cabe no dividendo
  while (dividendo >= divisor) {
    dividendo -= divisor; // Subtrai o divisor do dividendo
    quociente++; // Incrementa o quociente
  }

  // Exibe o resultado
  alert(`O resultado inteiro da divisão é: ${quociente}`);
  console.log(`O resultado inteiro da divisão é: ${quociente}`);
}

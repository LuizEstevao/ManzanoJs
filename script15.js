/* 
 Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do 
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).       
*/

// Função para calcular o novo salário
function calcularNovoSalario(salarioMensal, percentualReajuste) {
       let novoSalario = salarioMensal + (salarioMensal * (percentualReajuste / 100));
       return novoSalario;
   }
   
   // Ler o valor do salário mensal (SM) e o percentual de reajuste (PR)
   let SM = parseFloat(prompt("Digite o valor do salário mensal:"));
   let PR = parseFloat(prompt("Digite o percentual de reajuste:"));
   
   // Calcular o novo salário (NS)
   let NS = calcularNovoSalario(SM, PR);
   
   // Exibir o resultado
   console.log("O novo salário é: R$ " + NS.toFixed(2));
   alert("O novo salário é: R$ " + NS.toFixed(2));





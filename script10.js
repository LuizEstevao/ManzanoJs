/* 
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana.          
*/

let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar: ")); // insirá o valor da cotação do dólar (Na epoca que esse programa está sendo feito a cotação atual é 5,54 real brasileiro).
let valorReais = parseFloat(prompt("Digite o valor da quantidade de reais: ")); // insira o valor da quantidade dísponivel de reais.

let conversao = valorReais / cotacaoDolar; //calculo de conversão

alert(
  `O valor de reais disponíveis convertidos para dólar é: ${conversao.toFixed(
    2
  )} US$ `
); //exibindo o valor da conversão em um alert

console.log(
  `O valor de reais disponíveis convertidos para dólar é: ${conversao.toFixed(
    2
  )} US$ `
); //exibindo o valor da conversão em um console.log

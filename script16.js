/* 
Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a 
apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para 
cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de 
votos válidos para cada candidato, além de efetuar  também a leitura da quantidade de votos nulos e 
votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos 
válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de 
eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último 
o percentual correspondente de votos em branco em relação à quantidade de eleitores.        
*/

// Introduza os valores
// Introduza os valores
let votosA = parseFloat(prompt("Digite o valor de votos do candidato A: "));
let votosB = parseFloat(prompt("Digite o valor de votos do candidato B: "));
let votosC = parseFloat(prompt("Digite o valor de votos do candidato C: "));
let nulos = parseFloat(prompt("Digite o valor de votos nulos: "));
let brancos = parseFloat(prompt("Digite o valor de votos em branco: "));

// Função para cálculo dos percentuais
function eleicao(votosA, votosB, votosC, nulos, brancos) {
  let total = votosA + votosB + votosC + nulos + brancos;

  // Garantindo que o total não seja zero para evitar divisão por zero
  if (total === 0) {
    return {
      total: total,
      porcentagemValidos: 0,
      porcentagemVotosA: 0,
      porcentagemVotosB: 0,
      porcentagemVotosC: 0,
      porcentagemNulos: 0,
      porcentagemBrancos: 0
    };
  }

  // Cálculos de percentuais
  let porcentagemValidos = ((votosA + votosB + votosC) / total * 100).toFixed(2); // Cálculo da porcentagem de votos válidos
  let porcentagemVotosA = ((votosA / total) * 100).toFixed(2);
  let porcentagemVotosB = ((votosB / total) * 100).toFixed(2);
  let porcentagemVotosC = ((votosC / total) * 100).toFixed(2);
  let porcentagemNulos = ((nulos / total) * 100).toFixed(2);
  let porcentagemBrancos = ((brancos / total) * 100).toFixed(2);

  // Retorna um objeto com os resultados
  return {
    total: total,
    porcentagemValidos: porcentagemValidos,
    porcentagemVotosA: porcentagemVotosA,
    porcentagemVotosB: porcentagemVotosB,
    porcentagemVotosC: porcentagemVotosC,
    porcentagemNulos: porcentagemNulos,
    porcentagemBrancos: porcentagemBrancos
  };
}

let resultado = eleicao(votosA, votosB, votosC, nulos, brancos);

// Criar a mensagem a ser exibida
let mensagem =
  `Total de eleitores: ${resultado.total}\n` +
  `Percentual de votos válidos em relação ao total de eleitores: ${resultado.porcentagemValidos}%\n` +
  `Percentual de votos válidos do candidato A: ${resultado.porcentagemVotosA}%\n` +
  `Percentual de votos válidos do candidato B: ${resultado.porcentagemVotosB}%\n` +
  `Percentual de votos válidos do candidato C: ${resultado.porcentagemVotosC}%\n` +
  `Percentual de votos nulos: ${resultado.porcentagemNulos}%\n` +
  `Percentual de votos em branco: ${resultado.porcentagemBrancos}%`;

// Exibir o resultado no console
console.log(mensagem);

// Exibir o resultado em um alerta
alert(mensagem);




//lógica VisualG

/*
escreval("Digite a quantidade de votos válidos para o candidato A: ")
   leia(votosA)
   escreval("Digite a quantidade de votos válidos para o candidato B: ")
   leia(votosB)
   escreval("Digite a quantidade de votos válidos para o candidato C: ")
   leia(votosC)
   escreval("Digite a quantidade de votos nulos: ")
   leia(votosNulos)
   escreval("Digite a quantidade de votos em branco: ")
   leia(votosBrancos)


   totalEleitores <- votosA + votosB + votosC + votosNulos + votosBrancos
   percentualValidos <- ((votosA + votosB + votosC) / totalEleitores) * 100
   percentualA <- (votosA / totalEleitores) * 100
   percentualB <- (votosB / totalEleitores) * 100
   percentualC <- (votosC / totalEleitores) * 100
   percentualNulos <- (votosNulos / totalEleitores) * 100
   percentualBrancos <- (votosBrancos / totalEleitores) * 100


   escreval("Total de eleitores: ", totalEleitores)
   escreval("Percentual de votos válidos: ", percentualValidos:2:2, "%")
   escreval("Percentual de votos para o candidato A: ", percentualA:2:2, "%")
   escreval("Percentual de votos para o candidato B: ", percentualB:2:2, "%")
   escreval("Percentual de votos para o candidato C: ", percentualC:2:2, "%")
   escreval("Percentual de votos nulos: ", percentualNulos:2:2, "%")
   escreval("Percentual de votos em branco: ", percentualBrancos:2:2, "%") */

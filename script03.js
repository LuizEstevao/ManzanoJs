/* Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:  π*raio² * altura         
*/


let diametro = parseFloat(prompt("Digite o valor do diamêtro da lata: ")); // solicitando que o usuário insira o valor do diâmetro da lata
let altura = parseFloat(prompt("Digite o valor da altura da lata: ")); // solicitando que o usuário insira o valor da altura da lata 

let raio = diametro / 2
let volume = Math.PI * Math.pow(raio, 2) * altura

// Exibindo um alerta com o valor do volume arredondado a 2 casas decimais
alert(`O volume da lata tem o valor de ${volume.toFixed(2)}`);

// Exibindo o volume arredondado no console com 2 casas decimais
console.log(`O volume da lata tem o valor de ${volume.toFixed(2)}`);
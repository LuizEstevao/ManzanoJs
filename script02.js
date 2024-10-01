/* Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let temperaturaFahrenheit = parseFloat(
  prompt("Digite a temperatura em graus fahremheit: ")
);
let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);
alert("A temperatura em graus Celsius é : " + temperaturaCelsius + "°");

if (temperaturaCelsius < 100) {
  alert("não atingiu o ponto de ebulição");
} else {
  alert("atingiu o ponto de ebulição");
}

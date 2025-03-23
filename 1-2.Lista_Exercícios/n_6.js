/* Exercício 6
Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) 
para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.*/

// Declara uma variável chamada 'rain' usando 'let' e atribui o valor booleano 'true' a ela.
// Isso significa que inicialmente está chovendo.
let rain = true;

// Inicia um bloco 'if' que verifica se 'rain' é verdadeiro.
if (rain) {
  // Se 'rain' for verdadeiro, imprime a mensagem "(-)Leve um guarda-chuva para não se molhar(-)" no console.
  console.log("(-)Leve um guarda-chuva para não se molhar(-)");
} else {
  // Se 'rain' for falso, imprime a mensagem "(-)Aproveite o dia de sol(-)" no console.
  console.log("(-)Aproveite o dia de sol(-)");
}

// Reatribui o valor da variável 'rain' para 'false'.
// Agora, não está mais chovendo.
rain = false;

// Inicia outro bloco 'if' que verifica se 'rain' é verdadeiro.
if (rain) {
  // Se 'rain' for verdadeiro, imprime a mensagem "(--)Leve um guarda-chuva para não se molhar(--)" no console.
  console.log("(--)Leve um guarda-chuva para não se molhar(--)");
} else {
  // Se 'rain' for falso, imprime a mensagem "(--)Aproveite o dia de sol(--)" no console.
  console.log("(--)Aproveite o dia de sol(--)");
}
/* Exercício 5
Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco.
Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados.
Faça o mesmo processo utilizando let e compare com os resultados anteriores. */

// Declara uma variável 'var1' usando 'var' e atribui o valor 10 a ela.
var var1 = 10;

// Inicia um bloco 'if' que verifica se 'var1' é estritamente igual a 10.
if (var1 === 10) {
  // Declara uma variável 'var2' usando 'var' dentro do bloco 'if' e atribui o valor 15 a ela.
  var var2 = 15;
  // Imprime o valor de 'var1' no console dentro do bloco 'if'.
  console.log(`Consulta de dentro do bloco var1(10): ${var1}`);
  // Imprime o valor de 'var2' no console dentro do bloco 'if'.
  console.log(`Consulta de dentro do bloco var2(15): ${var2}`);
}

// Imprime o valor de 'var1' no console fora do bloco 'if'.
// 'var1' está acessível aqui porque 'var' tem escopo de função (ou escopo global, se declarado fora de uma função).
console.log(`Consulta de fora do bloco var1(10): ${var1}`);
// Imprime o valor de 'var2' no console fora do bloco 'if'.
// 'var2' também está acessível aqui porque 'var' não respeita o escopo de bloco.
console.log(`Consulta de fora do bloco var2(15): ${var2}`);

// Imprime uma linha separadora no console.
console.log("-------------------------------------------------");

// Declara uma variável 'let1' usando 'let' e atribui o valor 10 a ela.
let let1 = 10;

// Inicia um bloco 'if' que verifica se 'let1' é estritamente igual a 10.
if (let1 === 10) {
  // Declara uma variável 'let2' usando 'let' dentro do bloco 'if' e atribui o valor 15 a ela.
  let let2 = 15;
  // Imprime o valor de 'let1' no console dentro do bloco 'if'.
  console.log(`Consulta de dentro do bloco let1(10): ${let1}`);
  // Imprime o valor de 'let2' no console dentro do bloco 'if'.
  console.log(`Consulta de dentro do bloco let2(15): ${let2}`);
}

// Imprime o valor de 'let1' no console fora do bloco 'if'.
// 'let1' está acessível aqui porque foi declarado fora do bloco 'if'.
console.log(`Consulta de fora do bloco let1(10): ${let1}`);
// Tenta imprimir o valor de 'let2' no console fora do bloco 'if'.
// Isso resultará em um erro, pois 'let2' tem escopo de bloco e não está acessível fora do bloco 'if'.
console.log(`Consulta de fora do bloco let2(15): ${let2}`);
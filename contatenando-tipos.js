// Declara uma variável chamada 'nota1' usando 'let' e atribui o valor numérico 10 a ela.
let nota1 = 10;
// Declara uma variável chamada 'nota2' usando 'let' e atribui o valor numérico 2.5 a ela.
let nota2 = 2.5;
// Declara uma variável chamada 'nota3' usando 'let' e atribui o valor numérico -2 a ela.
let nota3 = -2;
// Declara uma variável chamada 'nota4' usando 'let' e atribui o resultado da conversão da string "10" para um número inteiro a ela.
// Number.parseInt() converte uma string para um número inteiro.
let nota4 = Number.parseInt("10");

// Declara uma variável chamada 'total' usando 'let' e atribui a soma de 'nota1', 'nota2', 'nota3' e 'nota4' a ela.
let total = nota1 + nota2 + nota3 + nota4;
// Imprime a string "Total das notas é: " seguida pelo valor da variável 'total' no console.
console.log("Total das notas é: " + total);

// Declara uma variável chamada 'media' usando 'let' e atribui o resultado da divisão de 'total' por 4 a ela.
let media = total / 4;
// Imprime a string "A média das notas é: " seguida pelo valor da variável 'media' formatado com uma casa decimal no console.
// toFixed(1) formata um número com uma casa decimal.
console.log("A média das notas é: " + media.toFixed(1));

// Declara uma variável chamada 'firstN' usando 'let' e atribui a string "Gabriel" a ela.
let firstN = "Gabriel";
// Imprime a string "Meu nome é: " seguida pelo valor da variável 'firstN' no console.
console.log("Meu nome é: " + firstN);
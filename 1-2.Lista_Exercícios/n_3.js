/* Exercício 3
Declare duas variáveis, uma contendo um número e outra contendo uma string.
Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console. */

// Declara uma variável chamada 'var1' usando 'let' e atribui a string "Idade?" a ela.
let var1 = "Idade?";

// Declara uma variável chamada 'var2' usando 'let' e atribui o valor numérico 25 a ela.
let var2 = 25;

// Declara uma variável chamada 'var3' usando 'let' e atribui a ela uma string formatada usando template literals.
// A string inclui o valor de 'var1', uma quebra de linha (\n), o texto "Eu tenho", o valor de 'var2', o texto "anos, e vc?".
let var3 = `${var1} \nEu tenho ${var2} anos, e vc?`;

// Declara uma variável chamada 'var4' usando 'let' e atribui a ela o resultado da concatenação de 'var1' e 'var2'.
// Como 'var1' é uma string e 'var2' é um número, o JavaScript converterá 'var2' para uma string antes de concatenar.
let var4 = var1 + var2;

// Imprime o valor da variável 'var3' no console.
console.log(var3);

// Imprime o valor da variável 'var4' no console.
console.log(var4);



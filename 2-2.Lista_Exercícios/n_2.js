/* 2 - Crie um array chamado numeros contendo números de 1 a 10.
Utilize o método slice para criar um novo array chamado parteNumeros 
que contenha apenas os números de índice 3 a 7 de numeros. */

// Declara uma constante chamada 'numeros' e atribui a ela um array de números inteiros de 1 a 10.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declara uma constante chamada 'parteNumeros' e atribui a ela uma porção do array 'numeros' criada com o método 'slice()'.
// 'slice(3, 8)' extrai os elementos do array 'numeros' a partir do índice 3 (inclusive) até o índice 8 (exclusive).
const parteNumeros = numeros.slice(3, 8);

// Imprime o array original 'numeros' no console.
// O método 'slice()' não modifica o array original.
console.log(numeros);

// Imprime o novo array 'parteNumeros' no console, contendo a porção extraída de 'numeros'.
console.log(parteNumeros);
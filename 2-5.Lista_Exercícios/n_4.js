/* 4 - Escreva uma função que receba um array de números 
e retorne um array contendo apenas os números pares. */


// Declara uma constante chamada 'arr1' e atribui a ela um array de números inteiros de 1 a 9.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// A função utiliza o método 'filter()' no array de entrada ('arr').
// O método 'filter()' cria um novo array com todos os elementos que passam no teste implementado pela função de callback fornecida.
const numPares = (arr) => arr.filter((elem) => !(elem % 2));
// A função de callback recebe cada 'elem' (elemento) do array 'arr' como argumento.
// A expressão 'elem % 2' calcula o resto da divisão de 'elem' por 2.
// Se o resto for 0, significa que o número é par.
// O operador de negação lógica '!' inverte o valor booleano.
// Portanto, '!(elem % 2)' será 'true' se o resto for 0 (o número é par) e 'false' se o resto for diferente de 0 (o número é ímpar).
// A função de callback retorna 'true' para os elementos pares, fazendo com que eles sejam incluídos no novo array retornado por 'filter()'.

// Chama a função 'numPares' passando o array 'arr1' como argumento.
// O resultado (um novo array contendo apenas os números pares de 'arr1') é impresso no console.
console.log(numPares(arr1));

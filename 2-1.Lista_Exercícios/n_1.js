/* Exercício 
Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).
Imprima no console o array e também a informação de comprimento do array.
*/

// Declara uma constante chamada 'sparseArray' e atribui a ela um array esparso.
// Um array esparso é um array que contém "buracos", ou seja, elementos que não foram inicializados.
const sparseArray = [, "segundo elemento", , "quarto elemento", , , , "oitavo elemento"];

// Imprime o array esparso no console.
// Os "buracos" são representados por 'empty' no console.
console.log(sparseArray);

// Imprime o comprimento do array esparso no console.
// O comprimento de um array esparso é determinado pelo índice do último elemento + 1, mesmo que haja "buracos" no meio.
console.log(sparseArray.length);


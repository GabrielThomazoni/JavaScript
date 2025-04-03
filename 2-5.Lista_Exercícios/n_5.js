/* 5 - Crie uma função que filtre os números de um array 
que são múltiplos de 3 e maiores que 5. */

// Declara uma constante chamada 'arr1' e atribui a ela um array de números inteiros.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];

// Declara uma constante chamada 'mult3Maior5' e atribui a ela uma arrow function que recebe um array ('arr') como argumento.
// A função utiliza o método 'filter()' no array de entrada ('arr').
// O método 'filter()' cria um novo array com todos os elementos que passam no teste implementado pela função de callback fornecida.
const mult3Maior5 = (arr) => arr.filter((elem) => !(elem % 3) && (elem > 5))
// A função de callback recebe cada 'elem' (elemento) do array 'arr' como argumento.
// A condição para o elemento ser incluído no novo array é definida pela expressão dentro do 'return'.
// '!(elem % 3)' verifica se o elemento é divisível por 3 (o resto da divisão por 3 é 0).
// 'elem > 5' verifica se o elemento é maior que 5.
// O operador lógico '&&' (AND) garante que ambas as condições devem ser verdadeiras para o elemento ser incluído no array resultante.

// Chama a função 'mult3Maior5' passando o array 'arr1' como argumento.
// O resultado (um novo array contendo apenas os números de 'arr1' que são múltiplos de 3 E maiores que 5) é impresso no console.
console.log(mult3Maior5(arr1));

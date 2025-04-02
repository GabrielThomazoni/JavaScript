/* 5 - Considere um array de números inteiros.
const numeros = [6, 9, 12, 15, 18, 21];
Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação.
Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original. */

// Declara uma constante chamada 'numeros' e atribui a ela um array de números inteiros.
const numeros = [6, 9, 12, 15, 18, 21];
// Utiliza o método 'forEach' para iterar sobre cada elemento do array 'numeros'.
// A função de callback recebe o 'element' atual como argumento.
numeros.forEach((element) => {
  // Imprime no console uma string usando template literals, mostrando o valor original do 'element' multiplicado por 3.
  console.log(`${element}x3:`);
  // Multiplica o valor da variável local 'element' por 3 e atualiza o valor dessa variável.
  // IMPORTANTE: Esta operação não modifica o array 'numeros' original, pois 'element' é uma cópia do valor do array para cada iteração do 'forEach'.
  element *= 3;
  // Imprime no console o novo valor da variável local 'element' (o resultado da multiplicação por 3).
  console.log(element);
});

// Declara uma constante chamada 'posicao18' e atribui a ela o resultado da busca no array 'numeros' usando o método 'findIndex()'.
// O método 'findIndex()' itera sobre cada elemento do array e executa a função de callback fornecida.
// A função de callback '(element) => element === 18' verifica se o 'element' atual é estritamente igual ao número 18.
// 'findIndex()' retorna o índice do primeiro elemento no array que satisfizer a função de callback. Se nenhum elemento satisfizer a condição, 'findIndex()' retorna -1.
const posicao18 = numeros.findIndex((element) => element === 18);
// Inicia uma estrutura condicional 'if' que verifica se o valor de 'posicao18' é estritamente igual a -1.
// Se for -1, significa que o número 18 não foi encontrado no array.
if (posicao18 === -1) {
  // Se 'posicao18' for -1, imprime a mensagem "Número 18 não localizado no array!" no console.
  console.log("Número 18 não localizado no array!");
} else {
  // Se 'posicao18' não for -1, significa que o número 18 foi encontrado. Imprime a mensagem "Posição do Elemento 18: " seguida pelo valor do índice encontrado.
  console.log("Posição do Elemento 18: " + posicao18);
}
// Imprime no console uma mensagem indicando que o array inicial permanece inalterado, seguido pelo conteúdo do array 'numeros'.
console.log("Array inicial continua igual: " + numeros);
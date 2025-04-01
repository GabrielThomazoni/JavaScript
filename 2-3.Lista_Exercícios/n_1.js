// 1.Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

// Declara uma constante chamada 'array1' e atribui a ela um array de strings contendo as letras do nome "Gabriel".
const array1 = ["G", "a", "b", "r", "i", "e", "l"];

// Inicia um loop 'for...of' que itera diretamente sobre os valores dos elementos do array 'array1'.
// Em cada iteração, a variável 'i' (declarada com 'const', pois seu valor é reatribuído a cada iteração) recebe o valor do elemento atual do array.
for (const i of array1) {
  // Imprime o valor do elemento atual ('i') no console.
  console.log(i);
}

/* ou */ console.log("--------------------------"); // Imprime uma linha separadora no console.

// Declara uma constante chamada 'array2' e atribui a ela um array de números inteiros de 1 a 9.
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inicia um loop 'for' tradicional que itera sobre os índices do array 'array2'.
// A variável 'i2' é inicializada com 0, a condição de continuação é 'i2 < array2.length' (enquanto 'i2' for menor que o comprimento do array), e 'i2' é incrementada em 1 após cada iteração.
for (let i2 = 0; i2 < array2.length; i2++) {
  // Acessa o elemento do array 'array2' no índice atual ('i2') e imprime seu valor no console.
  console.log(array2[i2]);
}
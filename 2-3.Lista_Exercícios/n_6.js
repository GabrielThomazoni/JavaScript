// 6.Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

// Declara uma constante chamada 'array1' e atribui a ela um array de números inteiros de 1 a 9.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Declara uma variável chamada 'somaArray' usando 'let' e a inicializa com o valor 0.
// Esta variável será usada para armazenar a soma dos elementos do array.
let somaArray = 0;
// Declara uma variável chamada 'medArray' usando 'let' e a inicializa com o valor 0.
// Esta variável será usada para armazenar a média dos elementos do array.
let medArray = 0;

// Inicia um loop 'for...of' que itera diretamente sobre os valores dos elementos do array 'array1'.
// Em cada iteração, a variável 'element' recebe o valor do elemento atual do array.
for (const element of array1) {
  // Adiciona o valor do elemento atual ('element') à variável 'somaArray'.
  somaArray += element;
}

// Calcula a média dos números no array dividindo a 'somaArray' pelo número de elementos no array ('array1.length').
medArray = somaArray / array1.length;
// Imprime uma mensagem no console usando template literals, exibindo a média calculada dos números dentro do array.
console.log("Média dos números dentro do array:", medArray);

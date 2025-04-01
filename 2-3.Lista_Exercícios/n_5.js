/* 4.Crie um programa que utilize um laço for para percorrer uma array 
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array. */

// Declara uma constante chamada 'numeros' e atribui a ela um array de números inteiros.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
// Inicia um loop 'for...of' que itera diretamente sobre os valores dos elementos do array 'numeros'.
// Em cada iteração, a variável 'element' recebe o valor do elemento atual do array.
for (const element of numeros) {
  // Inicia uma estrutura condicional 'if' que verifica se o resto da divisão do 'element' por 2 é igual a 0.
  // O operador módulo (%) retorna o resto de uma divisão. Se o resto for 0, significa que o número é par.
  if (element % 2 === 0) {
    // Se a condição do 'if' for verdadeira (o elemento é par), imprime o valor do 'element' no console.
    console.log(element);
  }
}
/* Exercício 4
Crie uma função que receba três números como parâmetros
e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else)
para comparar os valores e determinar o maior. Imprima o maior valor no console. */

// Declarão de constantes atribuindo os valores a serem analisados.
const num1 = 51;
const num2 = 20;
const num3 = 50;

// Declara uma constante chamada 'isBigger' e atribui a ela uma função anônima.
// Esta função recebe três números como argumentos e retorna o maior deles.
const isBigger = function (num1, num2, num3) {
  // Inicia um bloco 'if' que verifica se 'num1' é maior que 'num2' e 'num3'.
  // O operador lógico '&&' (AND) retorna 'true' somente se ambas as condições forem verdadeiras.
  if (num1 > num2 && num1 > num3) {
    // Se a condição for verdadeira, retorna 'num1'.
    return num1;
  } else if (num2 > num3) {
    // Se a condição do 'if' anterior for falsa, verifica se 'num2' é maior que 'num3' e se for, retorna 'num2'.
    return num2;
  } else {
    // Se ambas as condições anteriores forem falsas, retorna 'num3'.
    return num3;
  }
}

// Chama a função 'isBigger' com os argumentos 'num1', 'num2' e 'num3', e imprime o resultado no console usando Template string/literals.
console.log(`O número ${isBigger(num1, num2, num3)} é o maior`);
/*Exercício 2
 *Crie uma variável numérica com um valor. Utilize um operador ternário para verificar 
 *se esse valor é par ou ímpar. Exiba o resultado no console. 
*/

// Declaração de constante
const num = 24;

// Declara uma constante chamada 'result' e atribui a ela o resultado de uma expressão condicional (operador ternário).
// A expressão 'num % 2' verifica se o resto da divisão de 'num' por 2 é diferente de zero.
// Se for diferente de zero (ou seja, se o número for ímpar), 'result' recebe a string 'Ímpar'.
// Caso contrário (o resto da divisão é 0), 'result' recebe a string 'Par'.
const result = num % 2 ? 'Ímpar' : 'Par';

// Imprime o valor da variável 'result' no console.
console.log(result);
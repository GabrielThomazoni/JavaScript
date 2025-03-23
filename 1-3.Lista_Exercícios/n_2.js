/*Exercício 2
 * Declare duas variáveis, uma inicializada com valor null e 
 * outra que não recebe atribuição (resultando em undefined). Exiba os valores no console. 
 */
// Declara uma variável chamada 'vazia' usando 'let' e atribui o valor 'null' a ela.
// 'null' representa a ausência intencional de qualquer valor de objeto.
let vazia = null;
// Declara uma variável chamada 'indefinida' usando 'let', mas não atribui nenhum valor a ela.
// Isso significa que a variável está 'undefined', ou seja, não foi definida.
let indefinida;

// Imprime o valor da variável 'vazia' no console.
console.log(vazia);
// Imprime o valor da variável 'indefinida' no console.
console.log(indefinida);

/* null:
null é um valor especial em JavaScript que representa a ausência intencional de qualquer valor de objeto.
É usado quando você quer indicar explicitamente que uma variável não tem valor.

undefined:
undefined é um valor atribuído automaticamente a variáveis que foram declaradas, mas não inicializadas (ou seja, não receberam um valor).
Também é retornado quando você tenta acessar uma propriedade inexistente de um objeto ou um elemento inexistente de um array.

Diferença entre null e undefined:
Embora ambos representem a ausência de valor, eles têm significados ligeiramente diferentes.
null é uma atribuição explícita de "nenhum valor", enquanto undefined indica que uma variável ainda não foi inicializada.
Em comparações com ==, null == undefined retorna true, mas null === undefined retorna false. */

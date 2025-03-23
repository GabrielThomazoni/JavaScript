/*Exercício 5 
 *Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
 *Declare duas variáveis que determinem a idade mínima e qual a idade do usuário 
 *e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
 */

// Declaração de constantes
// Representa a idade mínima para comprar um ingresso.
const idadeMin = 18;
// Representa a idade do usuário que deseja comprar o ingresso.
const idadeUser = 17;

// Inicia um bloco 'if' que verifica se 'idadeUser' é maior ou igual a 'idadeMin'.
if (idadeUser >= idadeMin) {
  // Se a condição for verdadeira, imprime a mensagem de compra de ingresso bem-sucedida no console.
  console.log("Ingresso comprado com sucesso!");
} else {
  // Se a condição for falsa, imprime a mensagem indicando que o ingresso é apenas para maiores de 18 anos e que um responsável é necessário para a compra.
  console.log("Ingresso apenas para maiores de 18 anos. Necessário responsável para compra!");
}
 
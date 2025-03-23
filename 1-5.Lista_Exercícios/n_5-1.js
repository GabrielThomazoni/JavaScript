/* Exercício 1
 *Crie uma função que receba o nome de uma pessoa como argumento 
 *e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
 */

// Definição da função 'saudacao' que recebe um parâmetro 'nome'.
function saudacao(nome) {
  // A função retorna uma string formatada usando template literal, que inclui a saudação e o nome fornecido.
  return `Relou ${nome}, bom te ver aqui!`;
}

// Chama a função 'saudacao' com o argumento "Gabriel" e armazena o resultado na constante 'relou'.
const relou = saudacao("Gabriel");

// Imprime o valor da constante 'relou' no console.
console.log(relou);
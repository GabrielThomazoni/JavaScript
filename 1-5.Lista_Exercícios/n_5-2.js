/* Exercício 2
 *Crie uma função que receba a idade de uma pessoa 
 *e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
 */

// Define uma função chamada 'maiorIdade' que recebe como parâmetro 'idade'.
function maiorIdade(idade) {
    // Inicia um bloco 'if' que verifica se 'idade' é maior ou igual a 18.
    if (idade >= 18) {
      // Se a condição for verdadeira, retorna a string "Pessoa maior de idade.".
      return "Pessoa maior de idade.";
    } else {
      // Se a condição for falsa, retorna a string "Pessoa menor de idade.".
      return "Pessoa menor de idade.";
    }
}
  
// Chama a função 'maiorIdade' com o argumento 18 e imprime o resultado no console.
console.log(maiorIdade(18));

/* Exercício 3
Crie uma função que receba uma string e verifique se é um 
palíndromo (uma palavra que é lida da mesma forma de trás para frente) 
utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário.
Imprima o resultado no console. 
*/

// Declara uma constante chamada 'palavra' e atribui a string "ovo" a ela.
const palavra = "ovo";

// A função isPalindrome é uma função anônima, ou seja, não tem um nome próprio. Ela é atribuída à constante isPalindrome.
// Esta função verifica se uma string é um palíndromo (lê-se da mesma forma de trás para frente).
const isPalindrome = function (palavra) {
  // 'palavra.split('')' divide a string em um array de caracteres.
  // '.reverse()' inverte a ordem dos elementos do array.
  // '.join('')' junta os elementos do array em uma string novamente.
  // Retorna o resultado da comparação entre a string original e a string invertida.
  return palavra === palavra.split('').reverse().join('');
}

// Chama a função 'isPalindrome' com o argumento 'palavra' e imprime o resultado no console.
console.log(isPalindrome(palavra));
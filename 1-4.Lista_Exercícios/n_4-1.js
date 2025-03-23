/*Exercício 1
 *Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
 *depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
 *considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
 */

// Declaração de constantes
const saldo = 1000;
const deposito = 50;
const saque = 100;

// Declara uma constante chamada 'operacao' e atribui o resultado da operação 'saldo + deposito - saque' a ela.
// Essa operação simula um depósito e um saque em uma conta bancária.
const operacao = saldo + deposito - saque;

// Imprime uma string formatada no console, exibindo os valores do depósito, saque, saldo final e saldo inicial.
// Template literals (crases) são usados para inserir os valores das variáveis diretamente na string.
console.log(`Foi realizado um deposito de ${deposito} e um saque de ${saque}. Saldo final é de ${operacao} (valor inicial: ${saldo})`);

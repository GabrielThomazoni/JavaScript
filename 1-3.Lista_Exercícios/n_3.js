/*Execício 3
 *Crie 3 variáveis de tipos diferentes, utilize template strings para combinar 
 *os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
 */

// Declara uma constante chamada 'oneNumber' e atribui o valor numérico 10 a ela.
const oneNumber = 10;
// Declara uma constante chamada 'oneString' e atribui a string "Dez" a ela.
const oneString = "Dez";
// Declara uma constante chamada 'oneBoolean' e atribui o valor booleano 'false' a ela.
const oneBoolean = false;

// Declara uma constante chamada 'allTogether' e atribui a ela uma string formatada usando template literals.
// Neste caso, oneNumber (que é um número), oneString (que já é uma string) e oneBoolean (que é um booleano) 
// são todos convertidos para strings antes de serem concatenados na string final.
const allTogether = `${oneNumber} ${oneString} ${oneBoolean}`;

// Imprime o valor da variável 'allTogether' no console.
console.log(allTogether);

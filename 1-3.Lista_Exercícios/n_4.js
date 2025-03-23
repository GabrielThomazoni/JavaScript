/*Exercício 4
 *Crie uma variável numérica e uma string. 
 *Faça a conversão da variável numérica para string e da string para número. 
 *Exiba os tipos de dados resultantes no console.
*/

// Declara duas variáveis chamadas 'oneNumber' e 'oneString' usando 'let' e 
// atribui os valores 25 númerico e a frase "Vinte e Cinco", respectivamente a elas.
let oneNumber = 25;
let oneString = "Vinte e Cinco"; // Tente trocar para "25" e veja o que imprime agora

// Converte o valor da variável 'oneNumber' para uma string usando o método 'toString()'.
// O valor original (25) é agora a string "25".
oneNumber = oneNumber.toString();
// Tenta converter o valor da variável 'oneString' para um número inteiro usando a função 'parseInt()'.
// Como "Vinte e Cinco" não pode ser convertido para um número inteiro, o resultado será 'NaN' (Not a Number).
oneString = parseInt(oneString);

// Imprime o valor e o tipo da variável 'oneNumber' no console.
// 'typeof oneNumber' retorna o tipo de dado da variável, que agora é "string".
console.log(`Variável 'oneNumber' contém: ${oneNumber} e é do tipo: ${typeof oneNumber}`);
// Imprime o valor e o tipo da variável 'oneString' no console.
// 'typeof oneString' retorna o tipo de dado da variável, que agora é "number" (mesmo sendo NaN).
console.log(`Variável 'oneString' contém: ${oneString} e é do tipo: ${typeof oneString}`);

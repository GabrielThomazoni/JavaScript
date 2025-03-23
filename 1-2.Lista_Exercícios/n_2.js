/* Exercício 2
Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta 
variável usando template strings. Por fim, imprima os resultados obtidos no console.*/

// Declara uma constante chamada 'name' e atribui a string "Gabriel" a ela.
const firstName = "Gabriel";

// Declara uma constante chamada 'lastName' e atribui a string "Thomazoni" a ela.
const lastName = "Thomazoni";

// Declara uma constante chamada 'nameComp' e atribui a concatenação das strings 'name', um espaço e 'lastName'.
const nameComp = firstName + " " + lastName;

// Template literals permitem inserir variáveis diretamente dentro de uma string usando ${}.
// Declara uma constante chamada 'nameComp1' e atribui a concatenação das strings 'name' e 'lastName' usando template literals.
const nameComp1 = `${firstName} ${lastName}`;

// Imprime o valor da variável 'nameComp' ("Gabriel Thomazoni") no console.
console.log(nameComp);

// Imprime uma string formatada usando template literals, exibindo "Nome completo : Gabriel Thomazoni" no console.
console.log(`Nome completo : ${nameComp1}`);

/* Exercício 2
Crie um programa em Node.js que inicie com um array de cinco elementos e
atribua um novo valor para a primeira posição (índice 0) desse array.
Em seguida, exiba o array antes e depois da alteração.
 */

// Declara uma constante chamada 'listNames' e atribui a ela um array de strings contendo nomes.
const listNames = ["Bernards", "Gerald", "Ivy", "Gabriel", "Leonardo"];

// Imprime o array 'listNames' no console.
console.log(listNames);

// Altera o primeiro elemento do array 'listNames' (índice 0) para a string "Carlinhos".
// Embora 'listNames' seja declarado como 'const', os elementos do array podem ser modificados.
listNames[0] = "Carlinhos";

// Imprime o array 'listNames' atualizado no console.
console.log(listNames);



/* Exercício 3
Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push().
Imprima no console os itens presentes no array para verificar se os números foram adicionados.
Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual.
Imprima no console o array atualizado para verificar a mudança.
 */

// Declara uma constante chamada 'meuArray' e atribui a ela um array vazio.
const meuArray = [];

// Adiciona os valores 5, 50 e 500 (sempre ao final) do array 'meuArray' usando o método 'push()'.
meuArray.push(5);
meuArray.push(50); //ou meuArray.push(5, 50, 500);
meuArray.push(500);

// Imprime o array 'meuArray' no console.
console.log(meuArray);

// Multiplica o primeiro elemento do array 'meuArray' (índice 0) por 2 e atribui o resultado de volta ao mesmo elemento.
meuArray[0] = meuArray[0] * 2;

// Imprime o array 'meuArray' atualizado no console.
console.log(meuArray);


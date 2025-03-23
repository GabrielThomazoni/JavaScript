/* 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
'const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"]'
Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices. */

// Declara uma constante chamada 'frutas' e atribui a ela um array de strings contendo nomes de frutas.
const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];

// Imprime o array 'frutas' no console.
console.log(frutas);

// Modifica o array 'frutas' usando o método 'splice()'.
// 'splice(2, 2, "Kiwi", "Pêssego")' faz o seguinte:
// - Começa a modificar o array a partir do índice 2 ("Laranja").
// - Remove 2 elementos a partir desse índice ("Laranja" e "Limão").
// - Insere os elementos "Kiwi" e "Pêssego" na posição do índice 2.
frutas.splice(2, 2, "Kiwi", "Pêssego");

// Imprime o array 'frutas' modificado no console.
console.log(frutas);

/* 3 - Você recebeu um array 'numeros' contendo valores numéricos. 
Crie um programa que verifique se um número específico está presente nesse array.
Se estiver, o programa deve retornar a posição (índice) desse número. 
Caso contrário, se o número não estiver presente, o programa deve retornar "-1". */

/* let achou = false;
const numeroEscolhido = 12; 
const numeros = [1, 3, 1, 5, 7, 9];

numeros.forEach((element, index) => {
    if(element === numeroEscolhido){
        console.log(`Número encontrado no índice ${index}`);
        achou = true;
    }
})

if(!achou) console.log(-1);
 */

//---------------------------------------------------------------------------------------------

// Declara uma constante chamada 'numeroEscolhido' e atribui o valor 2 a ela.
// Este é o número que estamos procurando no array.
const numeroEscolhido = 2;
// Declara uma constante chamada 'numeros' e atribui a ela um array de números inteiros.
const numeros = [1, 3, 1, 5, 7, 9];
// Declara uma variável chamada 'verificado' usando 'let' e a inicializa como um array vazio.
// Este array será usado para armazenar os índices onde o 'numeroEscolhido' é encontrado.
let verificado = [];
// Utiliza o método 'forEach' para iterar sobre cada elemento do array 'numeros'.
// A função de callback recebe dois argumentos: 'element' (o valor do elemento atual) e 'index' (o índice do elemento atual).
numeros.forEach((element, index) => {
    // Verifica se o 'element' atual é estritamente igual ao 'numeroEscolhido'.
    if (element === numeroEscolhido) {
        // Se o número for encontrado, adiciona o 'index' atual ao array 'verificado'.
        verificado.push(index);
    }
});
// Após o loop 'forEach' terminar, verifica se o array 'verificado' está vazio.
// Se estiver vazio, significa que o 'numeroEscolhido' não foi encontrado no array 'numeros'.
if (verificado.length === 0) {
    // Se 'verificado' estiver vazio, adiciona o valor -1 ao array, indicando que o número não foi encontrado.
    verificado.push(-1);
}
// Imprime o conteúdo do array 'verificado' no console.
console.log(verificado);
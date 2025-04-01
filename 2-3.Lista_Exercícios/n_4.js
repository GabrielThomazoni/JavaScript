/* 4.Crie uma função que receba uma array de números inteiros e 
retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'. */

// Define uma função chamada 'analisArray' que recebe um array de números como argumento.
function analisArray(array) {
    // Inicializa a variável 'maiorNum' com o primeiro elemento do array.
    // Isso garante que a comparação inicial seja feita com um valor real do array.
    let maiorNum = array[0];
    // Inicializa a variável 'menorNum' com o primeiro elemento do array.
    // Isso também garante que a comparação inicial seja feita com um valor real do array.
    let menorNum = array[0];

    // Inicia um loop 'for' que itera sobre os índices do array, começando do primeiro elemento (índice 0) até o último.
    for (let i = 0; i < array.length; i++) {
        // Verifica se o elemento atual do array é maior que o valor atual de 'maiorNum'.
        if (array[i] > maiorNum) {
            // Se for maior, atualiza 'maiorNum' com o valor do elemento atual.
            maiorNum = array[i];
        }
        // Verifica se o elemento atual do array é menor que o valor atual de 'menorNum'.
        if (array[i] < menorNum) {
            // Se for menor, atualiza 'menorNum' com o valor do elemento atual.
            menorNum = array[i];
        }
    }
    // Retorna o resultado da impressão no console usando template literals.
    // Novamente, lembre-se que 'console.log()' retorna 'undefined'. Se você precisar usar os valores em outro lugar, retorne um objeto ou string diretamente.
    return console.log(`O maior número do array é ${maiorNum} e o menor é ${menorNum}`);
}

// Declara uma constante chamada 'array1' e atribui a ela um array de números inteiros, incluindo zero e um número negativo.
const array1 = [25, 10, 5, 0, 7, 14, -25];
// Chama a função 'analisArray' passando 'array1' como argumento.
analisArray(array1);
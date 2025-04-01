// 3.Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

// Define uma função chamada 'somaArray' que recebe um array de números como argumento.
function somaArray(array) {
    // Declara uma variável chamada 'total' usando 'let' e a inicializa com o valor 0.
    // Esta variável será usada para armazenar a soma dos elementos do array (usando o loop 'for' tradicional).
    let total = 0;
    // Inicia um loop 'for' tradicional que itera sobre os índices do array.
    // A variável 'i' é inicializada com 0, a condição de continuação é 'i < array.length' (enquanto 'i' for menor que o comprimento do array), e 'i' é incrementada em 1 após cada iteração.
    for (i = 0; i < array.length; i++) {
        // Adiciona o valor do elemento atual do array ('array[i]') à variável 'total'.
        total += array[i];
    }

    // Declara uma variável chamada 'total2' usando 'let' e a inicializa com o valor 0.
    // Esta variável será usada para armazenar a soma dos elementos do array (usando o loop 'for...of').
    let total2 = 0;
    // Inicia um loop 'for...of' que itera diretamente sobre os valores dos elementos do array.
    // Em cada iteração, a variável 'elem' recebe o valor do elemento atual do array.
    for (const elem of array) {
        // Adiciona o valor do elemento atual ('elem') à variável 'total2'.
        total2 += elem;
    }

    // A função retorna o valor da variável 'total' (a soma calculada usando o loop 'for' tradicional).
    return total;
    // A linha abaixo está comentada, então a função não retornará o valor de 'total2' a menos que esta linha seja descomentada e a linha 'return total;' seja comentada.
    // return total2;
}

// Declara uma constante chamada 'array1' e atribui a ela um array de números inteiros.
const array1 = [5, 5, 5, 5, 5];
// Chama a função 'somaArray' passando 'array1' como argumento e imprime o resultado retornado no console.
console.log(somaArray(array1));

/* 3.Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somaArray(array){
    let total = 0;
    for(i = 0; i < array.length; i++){
        total += array[i];
    }
    let total2 = 0;
    for (const elem of array) {
        total2 += elem - 1;
    }

    return {
        first: total,
        second: total2
    }
}

const array1 = [5, 5, 5, 5, 5];
const result = somaArray(array1) 
console.log(result.first, result.second); */


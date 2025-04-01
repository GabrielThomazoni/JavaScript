// 2.Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

// Define uma função chamada 'contaArray' que recebe um array como argumento.
function contaArray(array) {
    // Inicia um loop 'for' tradicional que itera sobre os índices do array.
    // A variável 'i' é inicializada com 0, a condição de continuação é 'i < array.length' (enquanto 'i' for menor que o comprimento do array), e 'i' é incrementada em 1 após cada iteração.
    for (i = 0; i < array.length; i++) {
        // Imprime o índice atual ('i') e o elemento correspondente do array ('array[i]') no console.
        console.log(i, array[i]);
    }
}

// Declara uma constante chamada 'array1' e atribui a ela um array de strings contendo as estações do ano.
const array1 = ["Verão", "Outono", "Inverno", "Primavera"];

// Chama a função 'contaArray' passando 'array1' como argumento.
contaArray(array1);

/* ou */ console.log("--------------------------"); // Imprime uma linha separadora no console.

// Utiliza o método 'forEach' diretamente no array 'array1'.
// O método 'forEach' executa uma função de callback para cada elemento do array.
array1.forEach(function (elemento, indice) {
    // A função de callback recebe dois argumentos:
    // - 'elemento': o valor do elemento atual do array.
    // - 'indice': o índice do elemento atual no array.
    // Imprime o índice ('indice') e o elemento ('elemento') no console.
    console.log(indice, elemento);
});
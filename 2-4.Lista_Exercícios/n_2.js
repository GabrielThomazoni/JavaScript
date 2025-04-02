/* 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: 
um array e uma função de callback que executa alguma operação matemática. 
Essa função deve iterar por cada elemento do array e 
aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console. */


// Define uma função chamada 'operacao' que recebe um valor como argumento.
function operacao(value) {
    // Incrementa o valor recebido em 5 e atualiza a variável 'value'.
    value += 5;
    // Imprime o valor modificado no console.
    console.log(value);
}

// Define uma função chamada 'executaOperacaoEmArray' que recebe um array e uma função como argumentos.
function executaOperacaoEmArray(array, funcao) {
    // Imprime o array original no console.
    console.log(array);
    // Utiliza o método 'forEach' para iterar sobre cada elemento do array.
    // Para cada elemento, a função de callback 'funcao' (que foi passada como argumento) é executada, recebendo o elemento atual como parâmetro.
    array.forEach(funcao);
}

// Declara uma constante chamada 'array1' e atribui a ela um array de números.
const array1 = [0, 5, 10, 15];
// Chama a função 'executaOperacaoEmArray', passando 'array1' como o array e a função 'operacao' como a função de callback.
// Isso fará com que a função 'operacao' seja executada para cada elemento de 'array1'.
executaOperacaoEmArray(array1, operacao);

/* ou */ console.log("----------------------------");

// Define uma função chamada 'operacao2' que recebe um valor como argumento.
function operacao2(valor) {
    // Decrementa o valor recebido em 5 e retorna o resultado.
    return valor -= 5;
}

// Define uma função chamada 'executaOperacaoEmArray2' que recebe um array e uma função como argumentos.
function executaOperacaoEmArray2(array, funcao) {
    // Imprime o array original no console.
    console.log(array);
    // Utiliza o método 'map' para criar um novo array.
    // O método 'map' itera sobre cada elemento do array original e chama a função de callback 'funcao' (que foi passada como argumento) para cada elemento.
    // A função de callback 'funcao' deve retornar um novo valor, e esses novos valores são usados para criar um novo array ('arrayOperado').
    const arrayOperado = array.map(funcao);
    // Imprime o novo array ('arrayOperado') que contém os resultados da operação aplicada a cada elemento do array original.
    console.log(arrayOperado);
}

// Declara uma constante chamada 'array2' e atribui a ela um array de números.
const array2 = [0, 5, 10, 15];
// Chama a função 'executaOperacaoEmArray2', passando 'array2' como o array e a função 'operacao2' como a função de callback.
// Isso fará com que a função 'operacao2' seja executada para cada elemento de 'array2', e os valores retornados serão armazenados em um novo array.
executaOperacaoEmArray2(array2, operacao2);
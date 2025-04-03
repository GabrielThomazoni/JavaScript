/* 6 - Crie uma função que receba um array de números
e retorne a soma de todos os elementos. */

// Declara uma constante chamada 'arr1' e atribui a ela um array de números inteiros.
const arr1 = [10, 15, 5, 3, 2, 20, 10]

// Declara uma constante chamada 'somaArr1' e atribui a ela uma arrow function que recebe um array ('array') como argumento.
// A função utiliza o método 'reduce()' no array de entrada ('array').
// O método 'reduce()' executa uma função de callback (reducer) para cada elemento do array,
// resultando em um único valor de retorno.
const somaArr1 = (array) => array.reduce((acum, elem) => acum + elem, 0)
// A função de callback (reducer) recebe dois argumentos:
// - 'acum' (acumulador): Acumula o valor de retorno da última chamada da callback. Na primeira chamada,
//   é inicializado com o segundo argumento passado para 'reduce()' (neste caso, 0).
// - 'elem' (elemento atual): O valor do elemento atual sendo processado no array.
// A função de callback retorna a soma do 'acum' atual com o 'elem' atual.
// O segundo argumento para 'reduce()' (0) é o valor inicial do acumulador.

// Chama a função 'somaArr1' passando o array 'arr1' como argumento.
// O resultado (a soma de todos os elementos de 'arr1') é impresso no console.
console.log(somaArr1(arr1));

/* ou */ console.log("------------------------------");

// Define uma função chamada 'somaArray' que recebe um array ('arr') como argumento.
function somaArray(arr) {
  // Esta função utiliza o método 'reduce()' para somar os elementos do array.
  // O método 'reduce()' aplica uma função (o reducer) a cada elemento do array,
  // acumulando um único valor.
  return arr.reduce((acum, elem) => {
    // A função de callback (reducer) recebe dois argumentos:
    // - 'acum' (acumulador): Acumula o valor de retorno da última chamada da callback. Na primeira chamada,
    //   é inicializado com o segundo argumento passado para 'reduce()' (neste caso, 0).
    // - 'elem' (elemento atual): O valor do elemento atual sendo processado no array.
    // A função de callback retorna a soma do 'acum' atual com o 'elem' atual.
    return acum + elem;
  }, 0); // O segundo argumento para 'reduce()' (0) é o valor inicial do acumulador.
}

// Chama a função 'somaArray' passando o array 'arr1' como argumento.
// O resultado (a soma de todos os elementos de 'arr1') é impresso no console.
console.log(somaArray(arr1));

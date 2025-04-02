// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// Declara uma constante chamada 'array1' e atribui a ela um array de strings contendo itens de uma lista de compras.
const array1 = ["Leite", "Arroz", "Tomate", "Ervilha", "Cebola", "Cenoura"];

// Utiliza o método 'forEach' diretamente no array 'array1'.
// O método 'forEach' executa uma função de callback para cada elemento do array.
array1.forEach((element, index) =>
  // A função de callback é uma arrow function que recebe dois argumentos:
  // - 'element': o valor do elemento atual do array.
  // - 'index': o índice do elemento atual no array.
  // Imprime o índice e o elemento no console, separados por um espaço.
  console.log(index, element)
);
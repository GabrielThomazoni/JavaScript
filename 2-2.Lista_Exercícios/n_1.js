// 1 - Crie uma função que receba dois arrays e os concatene em um único array.

// Declara uma constante chamada 'list1' e atribui a ela um array de strings contendo nomes de frutas.
const list1 = ["Orange", "Apple", "Strawberry", "Banana", "Pineapple"];

// Declara uma constante chamada 'list2' e atribui a ela um array de strings contendo nomes de animais.
const list2 = ["Cow", "Pig", "Chicken", "Fish"];

// Declara uma constante chamada 'allList' e atribui a ela uma arrow function.
// Esta função recebe dois arrays como parâmetros ('param1' e 'param2') e retorna um novo array que é a concatenação dos dois arrays de entrada.
const allList = (param1, param2) => param1.concat(param2);

// Chama a função 'allList' passando 'list1' e 'list2' como argumentos.
// O resultado (um novo array contendo todos os elementos de 'list1' seguidos por todos os elementos de 'list2') é impresso no console.
console.log(allList(list1, list2));

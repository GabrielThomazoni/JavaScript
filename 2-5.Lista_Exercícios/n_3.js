/* 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final. */

// Declara uma constante chamada 'coresLista1' e atribui a ela um array de strings contendo nomes de cores.
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

// Declara uma constante chamada 'coresLista2' e atribui a ela um array de strings contendo nomes de cores.
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// Declara uma constante chamada 'allListas' e atribui a ela o resultado da concatenação dos arrays 'coresLista1' e 'coresLista2' usando o método 'concat()'.
// 'concat()' cria um novo array contendo todos os elementos de 'coresLista1' seguidos por todos os elementos de 'coresLista2', incluindo duplicatas.
const allListas = coresLista1.concat(coresLista2); //*ou direto 'const allColors = [...new Set([...coresLista1,...coresLista2])]';

// Declara uma constante chamada 'allColors' e atribui a ela um novo array contendo apenas as cores únicas presentes em 'allListas'.
// Isso é feito utilizando uma combinação do operador spread (...) e do objeto Set.
// 1. 'new Set(allListas)': Cria um novo objeto Set a partir dos elementos de 'allListas'.
//    Um Set é uma coleção de valores únicos, então quaisquer duplicatas em 'allListas' serão automaticamente removidas ao serem adicionadas ao Set.
// 2. '[...new Set(allListas)]': Utiliza o operador spread (...) para "espalhar" os elementos únicos do Set de volta em um novo array.
const allColors = [...new Set(allListas)];

// Imprime o array 'allColors' no console. Este array conterá todas as cores das duas listas originais, mas sem nenhuma repetição.
console.log(allColors);

// *
// Esta linha faz exatamente a mesma coisa que esta linha e a seguinte, mas de forma mais concisa:
// 1. '...coresLista1': Espalha os elementos de 'coresLista1'.
// 2. '...coresLista2': Espalha os elementos de 'coresLista2'.
// 3. '[...coresLista1,...coresLista2]': Cria um novo array contendo todos os elementos de ambas as listas (equivalente a 'allListas').
// 4. 'new Set([...coresLista1,...coresLista2])': Cria um Set com os elementos desse array, removendo as duplicatas.
// 5. '[...new Set([...coresLista1,...coresLista2])]': Espalha os elementos únicos do Set de volta para um novo array 'allColors'.
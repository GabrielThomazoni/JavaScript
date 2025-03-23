/* 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas 
contendo opções do cardápio de um restaurante.Utilize o método concat 
para criar um novo array menuCompleto contendo todos os elementos de 
menuPrincipal seguidos pelos elementos de menuDeSobremesas. */

// Declara uma constante chamada 'menuDeSobremesas' e atribui a ela um array de strings contendo nomes de sobremesas.
const menuDeSobremesas = ["Petit", "Brownie", "Sagu"];

// Declara uma constante chamada 'menuPrincipal' e atribui a ela um array de strings contendo nomes de pratos principais.
const menuPrincipal = ["Grão de Bico", "Massa", "Sopa", "Legumes"];

// Declara uma constante chamada 'menuCompleto' e atribui a ela o resultado da concatenação de 'menuPrincipal' e 'menuDeSobremesas' usando o método 'concat()'.
// O método 'concat()' cria um novo array contendo todos os elementos do array ao qual foi chamado, seguidos por todos os elementos dos arrays passados como argumentos.
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

// Imprime o array 'menuCompleto' no console.
console.log(menuCompleto);

// 2 - Crie um array de números chamado 'valores'.
// Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [5, 5, 5, 5, 5];
const somaVal = valores.reduce((acum, elem) => acum + elem, 0);

console.log(somaVal);

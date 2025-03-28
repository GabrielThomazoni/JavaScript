// 6.Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somaArray = 0;
let medArray = 0;

for (const element of array1) {
    somaArray += element;
}

medArray = somaArray/array1.length;
console.log("Média dos números dentro do array:",medArray);

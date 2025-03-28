// 3.Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somaArray(array){
    let total = 0;
    for(i = 0; i < array.length; i++){
        total += array[i];
    }
    let total2 = 0;
    for (const elem of array) {
        total2 += elem;
    }

    return total;
    //return total2;
}

const array1 = [5, 5, 5, 5, 5];

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


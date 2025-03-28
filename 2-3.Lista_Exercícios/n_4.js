/* 4.Crie uma função que receba uma array de números inteiros e 
retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'. */

function analisArray(array){
    let maiorNum = 0;
    let menorNum = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] >= maiorNum){
            maiorNum = array[i];
        }
    }
    menorNum = maiorNum;
    for (let i = 0; i < array.length; i++) {
        if(array[i] <= menorNum){
            menorNum = array[i];
        }
    }

    return console.log(`O maior número do array é ${maiorNum} e o menor é ${menorNum}`);
    
}

const array1 = [25, 10, 5, 7, 14, 25];
analisArray(array1);
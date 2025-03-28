// 2.Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function contaArray(array){
    for(i = 0; i < array.length; i++){
        console.log(i, array[i]);
    }
}

const array1 = ["Verão", "Outono", "Inverno", "Primavera"];
contaArray(array1);

/* ou */console.log("--------------------------");

array1.forEach(function(elemento, indice){ 
    console.log(indice, elemento);
});
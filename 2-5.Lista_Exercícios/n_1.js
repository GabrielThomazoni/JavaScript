/* 1 - Faça uma função que aceite vários arrays como argumentos 
e retorne um único array contendo todos os elementos dos arrays fornecidos,
utilizando Spread Operator. */

function allArrays(...arr) {
    // A sintaxe rest parameter (...arr) permite que a função receba um número indefinido de argumentos como um array chamado 'arr'.
    // Neste caso, 'arr' será um array de arrays (array1, array2, array3, array4, array5).
  
    // Cria um novo array chamado 'arrayMaster'.
    const arrayMaster = [].concat(...arr);
    // O método 'concat()' é usado para mesclar arrays.
    // O spread syntax (...arr) dentro do 'concat()' "espalha" os elementos de cada array dentro de 'arr' como argumentos individuais para o 'concat()'.
    // Por exemplo, se arr for [[1, 2], [3, 4]], então [...arr] se torna [1, 2], [3, 4] como argumentos para [].concat().
    // Isso resulta na criação de um único array contendo todos os elementos de todos os arrays passados para a função.
  
    return arrayMaster;
  }
  
  const array1 = [1, 2];
  const array2 = [3, 4];
  const array3 = [5, 6];
  const array4 = [7, 8];
  const array5 = [9, 10];
  
  // Chama a função 'allArrays' passando os cinco arrays como argumentos.
  // A função irá concatenar todos esses arrays em um único array.
  console.log(allArrays(array1, array2, array3, array4, array5));

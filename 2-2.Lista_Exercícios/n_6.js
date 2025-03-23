/* 6 - Acesse e imprima o elemento na segunda linha e terceira coluna 
da lista bidimensional matriz criada no exercício anterior. */
// Declara uma variável chamada 'matriz' usando 'let' e a inicializa como um array contendo três arrays vazios (representando as linhas da matriz).
let matriz = [[], [], []];

// Inicia um loop 'for' que itera de 0 até 2 (total de 3 vezes), representando os índices das colunas que serão preenchidas em cada linha.
for (let i = 0; i < 3; i++) {
  // Adiciona o valor de 'i + 1' ao final do primeiro array dentro de 'matriz' (índice 0, a primeira linha).
  // Na primeira iteração (i=0): matriz[0].push(1) -> [1]
  // Na segunda iteração (i=1): matriz[0].push(2) -> [1, 2]
  // Na terceira iteração (i=2): matriz[0].push(3) -> [1, 2, 3]
  matriz[0].push(i + 1);

  // Adiciona o valor de 'i + 4' ao final do segundo array dentro de 'matriz' (índice 1, a segunda linha).
  // Na primeira iteração (i=0): matriz[1].push(4) -> [4]
  // Na segunda iteração (i=1): matriz[1].push(5) -> [4, 5]
  // Na terceira iteração (i=2): matriz[1].push(6) -> [4, 5, 6]
  matriz[1].push(i + 4);

  // Adiciona o valor de 'i + 7' ao final do terceiro array dentro de 'matriz' (índice 2, a terceira linha).
  // Na primeira iteração (i=0): matriz[2].push(7) -> [7]
  // Na segunda iteração (i=1): matriz[2].push(8) -> [7, 8]
  // Na terceira iteração (i=2): matriz[2].push(9) -> [7, 8, 9]
  matriz[2].push(i + 7);
}

// Utiliza o método 'forEach' para iterar sobre cada 'row' (linha) dentro da 'matriz'.
matriz.forEach(row => console.log(row)); // Para cada linha, imprime o array da linha no console, visualizando a matriz em linhas e colunas.

// Acessa um elemento específico da 'matriz' usando a notação de colchetes duplos.
// 'matriz[1]' acessa o segundo array dentro de 'matriz' (a linha com os números 4, 5, 6).
// '[2]' acessa o terceiro elemento dentro desse segundo array (o elemento no índice 2, que é o número 6).
console.log(matriz[1][2]);
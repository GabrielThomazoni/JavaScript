/* 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas,
onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. */

// Declara uma variável chamada 'matriz' usando 'let' e a inicializa como um array contendo três arrays vazios.
let matriz = [[], [], []];

// Inicia um loop 'for' que itera de 0 até 2 (total de 3 vezes).
for (let i = 0; i < 3; i++) {
  // Adiciona o valor de 'i + 1' ao final do primeiro array dentro de 'matriz' (índice 0).
  matriz[0].push(i + 1); // Na primeira iteração: 1, na segunda: 2, na terceira: 3

  // Adiciona o valor de 'i + 4' ao final do segundo array dentro de 'matriz' (índice 1).
  matriz[1].push(i + 4); // Na primeira iteração: 4, na segunda: 5, na terceira: 6

  // Adiciona o valor de 'i + 7' ao final do terceiro array dentro de 'matriz' (índice 2).
  matriz[2].push(i + 7); // Na primeira iteração: 7, na segunda: 8, na terceira: 9
}
// Utiliza o método 'forEach' para iterar sobre cada 'row' (linha) dentro da 'matriz'.
matriz.forEach(row => console.log(row)); // Para cada linha, imprime o array da linha no console.
// Isso proporciona uma visualização da matriz em linhas e colunas.

console.log("---------------------------");

// Declara uma variável chamada 'matriz2' usando 'let' e a inicializa como um array vazio.
let matriz2 = [];
// Declara uma variável chamada 'elemento' usando 'let' e a inicializa com o valor 1.
// Esta variável será usada para preencher a matriz com valores sequenciais.
let elemento = 1;
// Inicia um loop 'for' que itera de 0 até 2 (total de 3 vezes) para criar as linhas da matriz.
for (i = 0; i < 3; i++) {
  // Declara uma variável chamada 'linha' usando 'let' e a inicializa como um array vazio para representar uma nova linha da matriz.
  let linha = [];
  // Inicia um loop 'for' aninhado que itera de 0 até 2 (total de 3 vezes) para preencher os elementos da linha atual.
  for (i2 = 0; i2 < 3; i2++) {
    // Adiciona o valor atual de 'elemento' ao final do array 'linha'.
    linha.push(elemento++); // Após adicionar, incrementa o valor de 'elemento' para a próxima iteração.
  }
  // Após o loop interno terminar (a linha estar completa), adiciona o array 'linha' ao final de 'matriz2'.
  matriz2.push(linha);
}
// Utiliza o método 'forEach' para iterar sobre cada 'row' (linha) dentro de 'matriz2'.
matriz2.forEach(row => console.log(row)); // Para cada linha, imprime o array da linha no console.
// Isso proporciona uma visualização da matriz em linhas e colunas.
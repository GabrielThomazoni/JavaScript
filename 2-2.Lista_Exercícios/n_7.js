/* 7 - Adicione um novo elemento (por exemplo,15) na terceira linha
e segunda coluna da lista bidimensional matriz criada anteriormente. */

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

// Utiliza o método 'forEach' para iterar sobre cada 'row' (linha) dentro de 'matriz2' e imprime cada linha no console.
matriz2.forEach(row => console.log(row));
console.log("------------------------------"); // Imprime uma linha separadora no console.

// Modifica a segunda linha (índice 2) de 'matriz2' usando o método 'splice()'.
// 'matriz2[2]' acessa a terceira linha da matriz (o array [7, 8, 9]).
// '.splice(1, 1, 15)' faz o seguinte nessa linha:
// - Começa a modificar a partir do índice 1 (o segundo elemento, que é 8).
// - Remove 1 elemento a partir desse índice (o número 8).
// - Insere o valor 15 na posição do índice 1.
matriz2[2].splice(1, 1, 15);

// Utiliza o método 'forEach' para iterar novamente sobre cada 'row' dentro de 'matriz2' e imprime cada linha no console, mostrando a modificação feita com 'splice()'.
matriz2.forEach(row => console.log(row));

console.log("-------------ou----------------"); // Imprime outra linha separadora no console.

// Modifica a segunda linha (índice 2) de 'matriz2' acessando diretamente o elemento pelo seu índice.
// 'matriz2[2]' acessa a terceira linha da matriz (que agora é [7, 15, 9]).
// '[1]' acessa o segundo elemento dessa linha (o elemento no índice 1, que agora é 15).
// '=' atribui o novo valor 15 a esse elemento, sobrescrevendo o valor anterior.
matriz2[2][1] = 15;

// Utiliza o método 'forEach' para iterar pela terceira vez sobre cada 'row' dentro de 'matriz2' e imprime cada linha no console, mostrando a modificação feita pela atribuição direta.
matriz2.forEach(row => console.log(row));

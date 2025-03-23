/* Exercício 5
Crie uma arrow function chamada calculaPotencia que receba dois parâmetros:
a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado. */

// Declara as contantes 'base' e 'expoente' atribuindo os valores a serem calculados.
const base = 3;
const expoente = 5;

// Declara uma constante chamada 'calculaPotencia' e atribui a ela uma função anônima em formato Arrow Function.
// Esta função recebe duas funções como argumentos: 'baseFunction' e 'expoenteFunction'.
const calculaPotencia = (baseFunction, expoenteFunction) => {
  // Calcula a potência da base elevada ao expoente usando o operador '**'.
  // O resultado é armazenado na constante 'result'.
  const result = baseFunction ** expoenteFunction;

  // Retorna o resultado do cálculo da potência.
  return result;
}

// Imprime uma string formatada no console, exibindo a base, o expoente e o resultado do cálculo da potência.
// Template literals (crases) são usados para inserir os valores das variáveis e o resultado da função diretamente na string.
console.log(`${base} elevado a ${expoente} é igual a: ${calculaPotencia(3, 5)}.`);


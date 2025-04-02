/* 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = [ 'João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. 
Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, 
retorne uma mensagem de aviso, por exemplo Aluno não encontrado. */

const nomesTurmaA = [ 'João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];
// Declara uma constante chamada 'todasAsTurmas' e atribui a ela o resultado da concatenação dos arrays 'nomesTurmaA' e 'nomesTurmaB' usando o método 'concat()'.
// 'concat()' cria um novo array contendo todos os elementos de 'nomesTurmaA' seguidos por todos os elementos de 'nomesTurmaB'.
const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
// Declara uma constante chamada 'nome' e atribui a ela a string "Maria Santos".
// Este é o nome que será procurado na lista de todas as turmas.
const nome = "Maria Santos";

// Declara uma constante chamada 'verificado' e atribui a ela o resultado da busca na array 'todasAsTurmas' usando o método 'find()'.
// O método 'find()' itera sobre cada elemento do array e executa a função de callback fornecida.
// A função de callback '(element) => element === nome' verifica se o 'element' atual é estritamente igual à variável 'nome'.
// 'find()' retorna o valor do primeiro elemento no array que satisfizer a função de callback. Se nenhum elemento satisfizer a condição, 'find()' retorna 'undefined'.
const verificado = todasAsTurmas.find((element) => element === nome);

// Inicia uma estrutura condicional 'if' que verifica se a variável 'verificado' é truthy.
// Em JavaScript, valores como strings não vazias são considerados truthy. 'undefined' é falsy.
if (verificado) {
  // Se 'verificado' for truthy (ou seja, um nome foi encontrado), imprime o valor de 'verificado' (o nome encontrado) no console.
  console.log(verificado);
} else {
  // Se 'verificado' for falsy (ou seja, nenhum nome correspondente foi encontrado), imprime a mensagem "Aluno não encontrado!" no console.
  console.log("Aluno não encontrado!");
}
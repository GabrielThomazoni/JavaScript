/* Exercício 5
Desenvolva um programa em Node.js que simule uma clínica veterinária.
Crie um array vazio chamado clinica que representará a fila de animais na clínica.
Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
 */

// Declara uma constante chamada 'clinica' e atribui a ela um array vazio.
const clinica = [];

// Adiciona a string "Dog" ao final do array 'clinica' usando o método 'push()'.
clinica.push("Dog");

// Adiciona a string "Cat" ao final do array 'clinica' usando o método 'push()'.
clinica.push("Cat");

// Adiciona a string "Bear" ao final do array 'clinica' usando o método 'push()'.
clinica.push("Bear");

// Imprime o array 'clinica' no console.
console.log(clinica);

// Remove o último elemento do array 'clinica' usando o método 'pop()'.
clinica.pop();
clinica.pop();
clinica.pop();

// Imprime o array 'clinica' atualizado no console.
console.log(clinica);

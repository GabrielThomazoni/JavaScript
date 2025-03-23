// Declara constantes chamadas 'var1', 'var2' e 'var3', atribuindo a elas strings delimitadas por aspas duplas, aspas simples e crases, respectivamente.
const var1 = "String dentro de aspas duplas";
const var2 = 'String dentro de aspas simples';
const var3 = `String dentro de crases`;

// Declara constantes chamadas 'var4', 'var5' e 'var6' e atribuindo a elas strings com caracteres escapados.
// O caractere de escape '\' é usado para incluir aspas duplas, simples e crases dentro de uma string.
const var4 = "String com \"aspas duplas\" escapadas dentro";
const var5 = "String com \'aspas simples\'  escapadas dentro";
const var6 = "String com \`crase\` escapada dentro";

// Imprime o valor de 'var4', 'var5' e 'var6' no console.
console.log(var4);
console.log(var5);
console.log(var6);

// Declara uma constante chamada 'var7' e atribui uma string com aspas simples e crase dentro de aspas duplas a ela.
// Não é necessário escapar as aspas simples e a crase dentro de aspas duplas ou vice-versa.
const var7 = "String dentro de alpas duplas com 'aspas simples' e `crase` dentro";
// Imprime o valor de 'var7' no console.
console.log(var7);

// Declara uma constante chamada 'client' e atribui a string "Matheus Silva" a ela.
const client = "Matheus Silva";
// Declara uma constante chamada 'password' e atribui a ela uma senha gerada a partir do nome do cliente.
// A senha é gerada concatenando "123" com a variável 'client' em maiúsculas e sem espaços.
// O método replace(/\s+/g, "") remove todos os espaços da string.
// O método toUpperCase() converte a string para maiúsculas.
const password = "123" + client.replace(/\s+/g, "").toUpperCase();

// Imprime uma string formatada usando template literal, exibindo a senha gerada no console.
// \n é usado para adicionar uma quebra de linha.
console.log(`Senha é: ${password}.\nNão conte pra ninguém!`);
/*Exercício 5
 * Crie uma variável com uma string e utilize métodos de manipulação de strings,
 * como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.
 * Exiba os resultados finais no console.
 */

const text = "Não tenho preferências para quando já não puder ter preferências.";

const textUpperCase = text.toUpperCase();
const textLowerCase = text.toLowerCase();
const textSlice = text.slice(10, 22);
const textReplace = text.replace(/preferências/g, "desejos");
const textNoSpace = text.replace(/\s+/g, ""); //ou text.replace(/ /g, "");
const textSplit = text.split(" ");

console.log(`Frase original: ${text}`);
console.log("Modificações:");

console.log(`1. ${textUpperCase}`);
console.log(`2. ${textLowerCase}`);
console.log(`3. ${textSlice}`);
console.log(`4. ${textReplace}`);
console.log(`5. ${textNoSpace}`);
console.log("6. ");
console.log(textSplit);

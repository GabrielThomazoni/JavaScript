/*Exercicio 3
 *Considere uma situação em que você está verificando se um usuário está logado
 *e tem permissão de administrador para acessar determinada funcionalidade.
 *Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras. 
 */

// Declaração de constantes
// 'true' representa que o usuário está logado.
const logado = true;
// 'false' representa que o usuário não tem permissão de administrador.
const permissao = false;

// Inicia um bloco 'if' que verifica se ambas as variáveis 'logado' e 'permissao' são verdadeiras.
// O operador lógico '&&' (AND) retorna 'true' somente se ambas as condições forem verdadeiras.
if (logado && permissao) {
  // Se ambas as condições forem verdadeiras, imprime a mensagem indicando que o usuário está logado e tem permissão de administrador.
  console.log("Usuário logado e com permissão para acessar funcionalidades de admin.");
} else {
  // Se pelo menos uma das condições for falsa, imprime a mensagem indicando que o usuário não está logado ou não tem permissão.
  console.log("Usuário não está logado ou não tem permissão, revise os dados.");
}
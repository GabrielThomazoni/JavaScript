/* Exercício 4
 *Declare duas variáveis booleanas e use o operador OR 
 *para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
 */

// Declaração de constantes
// 'false' representa que o usuário não correu.
const corrida = false;
// 'false' representa que o usuário não fez musculação.
const musculacao = false;

// Inicia um bloco 'if' que verifica se pelo menos uma das variáveis 'corrida' ou 'musculacao' é verdadeira.
// O operador lógico '||' (OR) retorna 'true' se pelo menos uma das condições for verdadeira.
if (corrida || musculacao) {
  // Se pelo menos uma das condições for verdadeira, imprime a mensagem de parabéns no console.
  console.log('Parabéns, você fez pelo menos um exercício físico hoje!');
  console.log(`Corrida: ${corrida} / Musculação: ${musculacao}`);
} else {
  // Se ambas as condições forem falsas, imprime a mensagem indicando que o usuário não fez nenhum exercício físico no console.
  console.log('Você ainda não fez nenhum exercício físico hoje!');
  console.log(`Corrida: ${corrida} / Musculação: ${musculacao}`);
}
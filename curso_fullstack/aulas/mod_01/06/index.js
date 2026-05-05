// aula06 - constantes com const

// *conceito de constante* (variavel com valor que não muda)

// Regras básicas para constantes

// // Não podemos criar constantes com palavras reservadas.
// As constantes precisam ter nomes significativos
// Não podemos iniciar o nome de uma constante com um número (e minusculos se possiveil)
// Não podem conter espaços ou - (traços)
// Não podemos modificar o valor de uma constante (ela sempre precisa ser criada e inicializada ao mesmo tempo) (não podemos : const nome;) (também não podemos : nome = 'Ravena')

const nome = 'Eloisa';

console.log(nome);

// JS é uma linguagem de tipagem dinamica. A partir do momento que você declara uma constante ele já vai com um tipo definido

console.log(typeof(nome)); // função para descobrir o tipo de uma constante
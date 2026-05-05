// Variaveis com let

// Quero uma definição boa de variável(ia)

let nome = 'Eloisa'; // variavel armazenando valor STRING
var name = 'Ravena'; // quase a mesma coisa que usar let. Mas não será usado no curso
// Não utilizar var, utilizar let

console.log(nome);

let nomee; // podemos declarar uma variável sem inicializar (colocar um valor dentro)
// na verdade essa variável tem um valor, mas esse valor indica para o "motor" do JS que essa variável não tem valor

console.log(nomee); // tanto é que se rodarmos essa variável, o sistema retorna "undefined"

nomee = 'Podemos declarar infinitos valores ao decorrer do código dentro de uma variável' // inicializando a variável
// uma coisa que não podemos fazer é Redeclarar a variavel com let (criar outra com o mesmo nome)

// Regras básicas para variáveis

// // Não podemos criar variáveis com palavras reservadas. Como exemplo:
let console;
// As variáveis precisam ter nomes significativos
// Não podemos iniciar o nome de uma variável com um número (e minusculos se possiveil)
// Não podem conter espaços ou - (traços)

// Para variaveis com nomes compostos podemos colocar as proximas palavras com a primeira letra maiuscula : nomeCompletoDoCliente (camelCase)
// Case-sensitive : nomeCliente != nomecliente
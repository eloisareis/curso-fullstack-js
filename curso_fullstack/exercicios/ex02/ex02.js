const nome = 'Eloisa';
const sobrenome= 'de Castro Reis';
const idade = 20;
const peso = 84.7;
const altura = 1.63;
let IMC;
let anoNasc;

IMC = peso / (altura * altura);
anoNasc = 2025 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log("tem", altura, "de altura e seu IMC é de", IMC);
console.log("Nasceu em", anoNasc + "."); // IMPORTANTE: podemos usar o sinal de '+' como "concatenação" para juntar o valor de uma variavel e um valor literal sem que haja o 'espaço'.
// Porque por padrão, quando ele coloca uma virgula para separa o valor literal das variaveis ele coloca um 'espaço'.

// uma outra maneira de definir uma variavel é pelo seguinte:
console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`); // só funciona usando crase
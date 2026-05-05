let n1 = 1;
let n2 = 2.5;

console.log(n1.toString() + n2); // deixando a variavel temporariamente em string. (apenas nesta linha)
// alterando o valor da variavel seria : n1 = n1.toString();
// representação binaria : n1 = 10; n1.toString(2); -> 1010
// definindo casas decimais : n1 = 1.2193190; n1.toFixed(2) -> 1.22
// verificando se é um número : Number.isInteger(n1); -> true (aqui ele consta se é um decimal ou não) existe tbm : Number.isNaN()

// precisão das contas - IEEE 754-2008
n1 = 0.7;
n2 = 0.1;

let n3 = n1 + n2; // 0.7999999999999999
n1 += n2; // 0.7999999999999999 na logica deveria ser: 0.8
n1 +=n2; // 0.9
n1 +=n2; // 1.0

//n1 = n1.toFixed(2); // corrigido não sei como
// Mesmo usando o toFixed não é 100% correto, pois se usarmos o .isInteger ele retornará false
n1 = parseFloat(n1.toFixed(2)); // uma maneira de corrigir

console.log(n1); // 0.9999999999999999 contem certa imprecisão
// A recomendação é trabalhar com numeros inteiros para essas contas. No caso multiplicar por 100 e no fim dividir por 100. Par mais precisão
// Ex : n1 = ((n1 * 100) + (n2 * 100)) /100; -> mais preciso. é mais complexo mas resolve o problema
// aula 18 - Valores primitivos e valores por referência

// Valores primitivos (imutáveis) - string, number, boolean, undefined, null (symbol, bigint) - valores copiados

let a = 'A';
let b = a; // copiando valor de a para b
console.log(a, b);

a = 'Outra coisa'; // mudando o valor de a
console.log(a, b);

// Valores por referência (mutáveis) - array, object, function - referência (apontam para o mesmo local na memória)

let c = [1, 2, 3];
let d = c; // tanto b quanto c apontam para o mesmo array na memória
let e = [...c]; // copiando o valor de c para e usando spread operator (para criar um novo array)
console.log(c, d);

c.push(4); // modificando o array através de c
console.log(c, d); // tanto c quanto d refletem a mudança, pois ambos apontam para o mesmo array

//d.pop(); // modificando o array através de d
console.log(c, d); // tanto c quanto d refletem a mudança, pois ambos apontam para o mesmo array

console.log(c, e); // c e e são diferentes, pois e é uma cópia de c feita com spread operator

const nome = {
    nome: "Eloisa",
    sobrenome: "Reis"
};
const nomes = nome; // ou: {...nome} / tanto nome quanto nomes apontam para o mesmo objeto na memória

nome.nome = "Ravena"; // modificando o objeto através de nome
console.log(nome, nomes); // tanto nome quanto nomes refletem a mudança, pois ambos apontam para o mesmo objeto
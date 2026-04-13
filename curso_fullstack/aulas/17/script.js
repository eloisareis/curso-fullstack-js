// aula 17 - Funções

// Executam ações 

function saudacao(nome) { // nome = parametro
    console.log(`boa tarde ${nome}`);
}

saudacao('Eloisa');
const variavel = saudacao('Ravena'); // undifined - isso pq a função não tem return, 
// ela só executa a ação de imprimir no console, 
// mas não retorna nenhum valor para ser armazenado na variável.
console.log(variavel);

function saudacao2(nome) {
    return `boa tarde ${nome}`;
} // a função com return, ela retorna um valor que pode ser armazenado em uma variável ou usado em outras partes do código.

const variavel2 = saudacao2('Ravena');
console.log(variavel2);

function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 3);
console.log(resultado);
console.log(soma(10, 20));

const raizQuadrada = function (num) { // função anônima, ou seja, sem nome, atribuída a uma variável.
    return num ** 0.5;
}
console.log(raizQuadrada(16));

// Arrow function - sintaxe mais curta para escrever funções anônimas.
const raizQuadrada2 = num => num ** 0.5; // se a função tiver apenas um parâmetro, os parênteses podem ser omitidos, 
// e se a função tiver apenas uma expressão, as chaves e o return também podem ser omitidos.
console.log(raizQuadrada2(25));
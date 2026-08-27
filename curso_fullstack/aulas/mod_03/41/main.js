// aula 41 - As várias maneiras de declarar funções em JavaScript

// declaração de função (function hoisting) - a função pode ser chamada antes de ser declarada
// falaOi(); 

// function falaOi() {
//     console.log('Oi'); 
// } 

// First-class objects - (objetos de primeira classe) - funções são tratadas como qualquer outro valor (números, strings, etc.)
// Function expression - a função só pode ser chamada depois de ser declarada
// const souUmDado = function() {
//     console.log('Sou um dado.'); 
// }
// souUmDado();

// function executaFuncao(funcao) {
//     console.log('Vou executar sua função:');
//     funcao(); // esperando receber uma função como parâmetro e executá-la
// }
// executaFuncao(souUmDado);

// Arrow function - uma forma mais curta de escrever funções
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();
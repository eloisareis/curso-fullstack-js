// aula 22 - Avaliação de Curto-Circuito (Short-Circuit)

// O operador lógico "&&" (AND) e "||" (OR) em JavaScript possuem um comportamento de curto-circuito, 
// o que significa que eles avaliam apenas o necessário para determinar o resultado final.
// Exemplo com "&&" (AND):
const a = true;
const b = false;
const resultadoAnd = a && b; // O resultado será false, pois "b" é false, e o curto-circuito ocorre.
console.log(resultadoAnd); // Output: false

// Exemplo com "||" (OR):
const c = true;
const d = false;
const resultadoOr = c || d; // O resultado será true, pois "c" é true, e o curto-circuito ocorre.
console.log(resultadoOr); // Output: true

// FALSY :
// 0
// "" (string vazia)
// null / undefined
// NaN
// false


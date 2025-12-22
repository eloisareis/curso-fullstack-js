// aula 09 - Operadores aritméticos, de atribuição e incremento

/* + Adição / Concatenação
   - Subtração
   * Multiplicação
   / Divisão
   ** Potenciação
   % Resto
*/

const n1 = 9;
const n2 = 4;

console.log(n1 + n2); // Soma
console.log(n1.toString() + n2); // Concatenação

console.log(n1 - n2); // Subtração
console.log(n1 * n2); // Multiplicação
console.log(n1 / n2); // Divisão
console.log(n1 % n2); // Resto da divisão
console.log(n2 ** 2); // Potenciação

// Ordem de precêdencia 
/* 1. ()
   2. **
   3. * / %
   4. + -
*/

console.log(5 * 3 % 4); // 1
console.log((5 * 3) % 4); // 0

console.log();
// Incremento

let i = 0;
i++; // ou i = i + 1; ou i += 1; ou ++i;

console.log(i);

console.log(i += 4);
console.log(i++); // ele mostra e so depois incrementa
console.log(i);
console.log(++i); // ele mostra já incrementado

console.log();
// Decremento

let d = 10;
d--; // ou i = i - 1; ou i -= 1; ou --i;

console.log(d);

console.log(d -= 4); // e isso funciona para todos os operadores como : *= += -= **= /= %=

// ParseInt(inteiro) ParseFloat(ponto flutuante) Number(qualquer um)

const n3 = 5;
const n4 = parseInt("5");
console.log(n3 + n4);
// Escreva uma funçãp que recebe 2 números e retorna o maior deles.

function max(x, y) {
    // if (x > y) return x;
    // return y; // abreviação do if/else
    return x > y ? x : y; // abreviação do if/else com operador ternário
}

const max2 = (x, y) => x > y ? x : y; // arrow function

console.log(max(10, 5));
console.log(max2(15, 50));
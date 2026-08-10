// aula 29 - Atribuição via desestruturação(arrays)

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const abc = [b, c, a];
[a, b, c] = abc; // Atribuição via desestruturação; pq estou atribuindo para cada variável o valor do array abc, que tem 3 elementos, então a = B, b = C e c = A

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiroN = numeros[0]; 
console.log(primeiroN);

const [primeiro, segundo, ...resto] = numeros; // pegando o primeiro e segundo elemento do array numeros e atribuindo para as variáveis primeiro e segundo
console.log(primeiro, segundo);
console.log(resto); // o resto/spread do array numeros, ou seja, todos os elementos restantes do array, que são 3, 4, 5, 6, 7, 8, 9

const [um, , tres, , cinco] = numeros; // pegando o primeiro, terceiro e quinto elemento do array numeros e atribuindo para as variáveis um, tres e cinco
console.log(um, tres, cinco);

const numeros2 = [
    [1, 2, 3], // indice 0 com 3 elementos
    [4, 5, 6], // indice 1 com 3 elementos
    [7, 8, 9]  // indice 2 com 3 elementos
]; // array de arrays

console.log(numeros2[1][2]); // pegando o elemento do array numeros2 que está no índice 1 e no índice 2, ou seja, o número 6

const [,[,,seis]] = numeros2; // pegando o elemento do array numeros2 que está no índice 1 e no índice 2, ou seja, o número 6
console.log(seis);

const [lista1, lista2, lista3] = numeros2; // pegando os elementos do array numeros2 e atribuindo para as variáveis lista1, lista2 e lista3
console.log(lista3[1]);
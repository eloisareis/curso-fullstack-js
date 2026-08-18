// Escreva uma funçãp que recebe 2 números e retorna o maior deles.

let n2 = 2;
let n1 = 13;

function maiorEntre(n1, n2) {
    if (n1 > n2) {
        console.log(`O número ${n1} é maior que ${n2}`);
    } else {
        console.log(`O número ${n2} é maior que ${n1}`);
    }
}

maiorEntre(n1, n2);
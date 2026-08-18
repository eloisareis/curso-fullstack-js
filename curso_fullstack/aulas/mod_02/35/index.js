// aula 35 - While e Do While - Estrutura de Repetição

let controle = 0;
// while (controle <= 10) {
//     console.log(controle);
//     controle++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// while (rand !== 10) {
//     rand = random(min, max); // verifica a condição e depois faz
//     console.log(rand);
// }

rand = 10;

do {
    rand = random(min, max); // faça e depois verifica a condição
    console.log(rand);
} while (rand !== 10);
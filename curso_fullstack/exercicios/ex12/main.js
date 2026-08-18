// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(l, h) {
    // return l > h ? true : false;
    return l > h; // modelo professor / mais simplificado ainda
}

const eP = (l, h)  => l > h; // arrow function

console.log(ePaisagem(30, 13));
console.log(eP(3, 13));
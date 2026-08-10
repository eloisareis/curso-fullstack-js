// aula 24 - if, else if, else

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else {
    console.log("O número não está entre 0 e 5."); // este console log depende deste else, que está ligado ao if, ou seja, se o if for falso, o else será executado.
}                                                  // se o console log não estivesse dentro do else, ele seria executado independentemente do resultado do if, ou seja, ele seria executado mesmo que o if fosse verdadeiro.

if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
    console.log("O número está entre 6 e 8.");  // este console log depende deste else if, que está ligado ao if, ou seja, se o if for falso, o else if será executado,
} else if (numero >= 9 && numero <= 11) {       // mas se o if for verdadeiro, o else if não será executado. Isso se desencadeia para os outros else if.
    console.log("O número está entre 9 e 11."); // o primeiro if a ser verdadeiro, é o único que será executado, e os outros else if serão ignorados, mesmo que sejam verdadeiros.
} else {
    console.log("O numero não está entre 0 e 11.");
}
// aula 23 - if, else if, else

// A estrutura de controle "if" é usada para executar um bloco de código se uma condição for verdadeira.
// A estrutura "else if" é usada para testar múltiplas condições, e o bloco de código correspondente será executado para a primeira condição verdadeira.
// A estrutura "else" é usada para executar um bloco de código se todas as condições anteriores forem falsas.
// o if pode ser usado sozinho, ou com um ou mais blocos else if, e um bloco else opcional no final.
// para usar o else, o if deve ser usado primeiro, e o else if é opcional, mas se for usado, deve ser colocado entre o if e o else.

const hora = 18;   

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

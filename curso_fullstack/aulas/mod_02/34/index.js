// aula 34 - For of - Estrutura de repetição

const nome = ['Eloisa Reis', 'Ravena'];

for (let i of nome) { // o for in ainda retorna o índice. Já o for of é o mais direto e simplificado de percorrer o array
    console.log(i); // os OBJECTOS não são ITERAVEIS no For of (não sei bem o que isso significa)
}

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

// For clássico - geralmente com iteráveis (array ou strings)
// For in - retorna o indice ou chave (array ou strings ou objetos)
// For of - retorna o valor em si (array ou strings ou iteraveis)
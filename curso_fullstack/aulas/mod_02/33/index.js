// aula 33 - For in - Estrutura de repetição
// For in - Lê os índices(vetor) ou chaves(objeto) do objeto

const frutas = ['Pera', 'Maçã', 'Uva']; // array com 1 dimesão = Vetor

// iterar = percorrer o array
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let i in frutas) { // uma maneira mais simples de percorrer o array
    console.log(i);
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20
};

console.log(pessoa.nome);
console.log(pessoa['nome']); // outra forma de acessar a propriedade do objeto

for (let chaves in pessoa) {
    console.log(chaves); // pq aqui ele retorna as propriedades do objeto?
    console.log(pessoa[chaves]);
}
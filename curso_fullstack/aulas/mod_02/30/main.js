// aula 30 - Atribuição por desestruturação (Objetos)

const pessoa = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
};

console.log(pessoa);

const { nome, sobrenome, idade, cidade } = pessoa; // Atribuição por desestruturação
console.log(nome, sobrenome, idade, cidade); // cidade é undefined, pois não existe na pessoa

const { nome: primeiroNome } = pessoa; // Atribuição por desestruturação com renomeação
console.log(primeiroNome);

const { endereco: { rua: r, numero }, endereco } = pessoa; // Atribuição por desestruturação aninhada
console.log(r, numero, endereco);

const { nome: nome1, ...resto } = pessoa; // Atribuição por desestruturação com operador rest
console.log(nome1, resto); // resto é um objeto com as propriedades restantes de pessoa

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const [ tag, texto ] = elementos;
console.log(tag, texto);
// aula 18 - Objetos (básico)

const array = [1, 2, 3]; // no array eu não posso reatribuir os valores com a atribuição =
// Apenas usando por exemplo a função push 

const pessoa = {
    nome: 'Eloisa',
    idade: 20,
    profissao: 'Programadora'
}

console.log(pessoa.nome);

const animal = {
    nome: 'Ravena',
    especie: 'Gato',
    idade: 4,
}

console.log("Tenho um bixinho que se chama", animal.nome, "ela é da espécie", animal.especie, "e tem", animal.idade, "anos de idade.")

//                  |-----------parâmetros------------|
function criarPessoa(nome, sobrenome, idade, profissao) {
    return {
        nome: nome,
        sobrenome: sobrenome,  // essa função é uma factory function,
        idade: idade,          // pois ela retorna um objeto
        profissao: profissao
    };
}

// podemos tbm simplificar a função criarPessoa
function criarPessoa2(nome, sobrenome, idade, profissao) {
    return {
        nome,
        sobrenome,
        idade,
        profissao
    };
}

//                          |-------------argumento------------|
const pessoa1 = criarPessoa('Eloisa', 'Reis', 20, 'Programadora');
console.log(pessoa1);

const pessoa2 = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20,

    olaPessoa() {
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} de idade.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
}

pessoa2.olaPessoa();
pessoa2.incrementaIdade();
pessoa2.olaPessoa();
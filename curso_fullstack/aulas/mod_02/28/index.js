// aula 28 - Mais diferenças entre var, let e const

// o LET não permite redeclaração, mas permite reatribuição
var nome = 'Reis';
//var nome = 'Castro'; 
nome = 'Eloisa';

// a VAR permite redeclaração e reatribuição
var nome2 = 'Ravena';
var nome2 = 'Reis';
nome2 = 'Ravena';

// o CONST não permite redeclaração e nem reatribuição
const nome3 = 'Shuri';
//const nome3 = 'Reis'; 
//nome3 = 'Castro';

let verd = true;

if (verd) {
    let nome = 'Amora'; // LET tem escopo de bloco { ... }, ou seja, só existe dentro do bloco if. aqui ele cria
    var nome2 = 'Ravena'; // VAR tem escopo de função, ou seja, só existe dentro da função. aqui ele redeclara
    console.log(nome, nome2);

    if (verd) {
        let nome = 'outra coisa'; // em um bloco novo a variavel LET é criada novamente, e deixa de existir no fim do bloco. aqui ele cria
        var nome2 = 'Shuri'; // aqui ele redeclara
        console.log(nome, nome2);
    }
}

console.log(nome, nome2); // nome = linha 6 'Eloisa', nome2 = linha 27 'Shuri'

var sobrenome = 'castro';

function falaOi() {
    var varFunction = 'Maya';
    console.log('oi', sobrenome); // a função tem acesso a variavel sobrenome, pois ela está no escopo global
}

// console.log(varFunction); // varFunction não existe fora da função, pois tem escopo de função. aqui ele dá erro
falaOi();

console.log(varNaoDec); // na integra ele deveria dar um erro, pois a variavel nao existe. 



var varNaoDec = 'var Nao Declarado'; // a variavel varNaoDec é declarada depois de ser usada, mas não dá erro, pois a VAR sofre hoisting, ou seja, ela é "içada" para o topo do escopo. aqui ele não dá erro
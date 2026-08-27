// exercícios de conhecimentos

// 1. usar o node.js permite usar o javascript em um frmework como o vscode
// 2. no fim da tag <body> isso é feito para que todos as config de htl sejam carregadas primeiro e a pagina não ficar travada aguardando carregar primeiro os config do javascript
// 3. // comentario de linha
/* cometanrio
 de 
bloco */

// 4.

// console.log(typeof ('Eloisa')); // String
// console.log(typeof (20)); // Number
// console.log(typeof (true)); // Boolean
// console.log(typeof (undefined)); // Undefined
// console.log(typeof (null)); // NULL

// 5. Let -> declara variavel permitindo redeclaração do valor dentro dela, mas não permite redeclaração da variavel em si.
//    Const -> declara a variavel mas nao permite redeclaracao e nem reatribuição do valor
//    Var -> declara a variavel e permite redeclaração e reatribuição de valores

// 6. let 2nome; e let let; pois não se inicia variaveis por numero e não se declara variavel com o nome de alguma outra função

// 7. 105 e 15

// 8. a ordem é primeiro ** depois * e por fim + o resultado será 50

// 9. o primeiro vai mostrar e depois incrementar = 5 o segundo vai incrementar depois mostrar = 6

// 10. 

// let n1 = parseFloat(prompt('digite um número: '));
// let n2 = parseFloat(prompt('digite outro número: '));

// let media = (n1 + n2) / 2;

// alert(media);

// 11. 

// const linguagem = 'JavaScript';

// console.log(linguagem[0]);
// console.log(linguagem.slice(-1));
// console.log(linguagem.length);
// console.log(linguagem.toUpperCase());
// console.log(linguagem.slice(4, 10));

// 12. 

// const frase = 'Eu gosto de JavaScript';

// console.log(frase.replace('de JavaScript', 'muito de programação'));

// 13. o primeiro equivale ao lavor inteiro do numero 10. o segundo é ele complerto tanto a parte inteira tanto a deciaml e o number é o tipo de dado do javascript, pois todo tipo de numero tanto inteiro tanto decimal é igual

// 14. 

// let n1 = '10';
// console.log(Number.isNaN(n1));

// 15. 

// let n1 = Math.floor(Math.random() * 20);
// console.log(n1);

// 16.

// const animais = ['Gato', 'Cachorro', 'Coelho'];

// animais.push('Pássaro');
// animais.unshift('Peixe');
// animais.pop();
// animais.shift();

// console.log(animais.length);

// 17. Sim ele pode receber novos itens. Ele pode também ser reatribuido

// 18. 

// function maiorN (n1, n2) {
//     return n1>n2 ? n1 : n2;
// }

// console.log(maiorN(5,5));

// 19. 

// let numero = 2;
// function quadrado(numero) {
//     return numero ** 2;
// }

// (() => {
//     return numero ** 2;
//     console.log('oi', numero);
// })();

// 20. 21.

// function criarPessoa(nome, sobrenome, idade) {
//     functionnomePessoa() {
//         console.log(`Nome: ${this.nome}`);
//     },
    
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// console.log(criarPessoa('Eloisa', 'Reis', 20));
// criarPessoa.nomePessoa();

// 22. A B
//     A B C isso acontece pois o copia esta recebendo uma copia, ele recebe os valores que tem o original

// 23. 
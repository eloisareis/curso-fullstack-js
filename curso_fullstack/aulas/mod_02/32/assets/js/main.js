// aula 32 - DOM e a árvore do DOM

// topo - #document
//          <html>
//             <head> // document -> html -> head & body (childs/filhos - arvore do DOM)
//             <body>

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i =0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); // muitas manipulaçoes do DOM, deve explicar o que faz cada uma pq eu não sei

    elemento.appendChild(textoCriado);
    div.appendChild(elemento);
}

container.appendChild(div); // professor explicou esse appendChild, mas não deu para entender nada
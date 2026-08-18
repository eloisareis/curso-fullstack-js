const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (let i = 0; i < elementos.length; i++) {
    let texto = elementos[i].texto;
    let tag = elementos[i].tag;
    let frase = document.querySelector(tag);
    frase.innerHTML += `${texto}`;
}
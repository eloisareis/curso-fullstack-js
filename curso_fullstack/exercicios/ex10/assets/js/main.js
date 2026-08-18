const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // nodeList

const estilos = getComputedStyle(document.body);
const back_colorBody = estilos.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = back_colorBody;
    p.style.color = '#fff';
}
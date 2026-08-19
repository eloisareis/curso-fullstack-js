const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function horaSegundos(seg) {
    let data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

let seg = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        seg++;
        relogio.innerHTML = horaSegundos(seg);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seg = 0;
});
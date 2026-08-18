const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function mostraHora() {
    let data = new Date(0, 0, 0);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

iniciar.addEventListener('click', function(event) {
    const timer = setInterval(function() {
        relogio.innerHTML = mostraHora();
    }, 1000);
    console.log(timer);
});

pausar.addEventListener('click', function(event) {
    alert('Cliquei pausar');
});

zerar.addEventListener('click', function(event) {
    alert('Cliquei zerar');
});
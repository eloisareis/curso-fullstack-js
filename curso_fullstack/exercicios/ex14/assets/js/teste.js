function mostraHora() {
    let data = new Date(0, 0, 0);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

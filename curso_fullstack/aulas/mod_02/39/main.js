// aula 39 - setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());  // a função a ser executada, 
}, 1000); // o tempo em milissegundos que vai repetir a função, nesse caso 1000ms = 1s

setTimeout(function () {
    clearInterval(timer); // ele dá um tempo para o setInterval executar e depois para ele
}, 10000); // 10s
let data = new Date();
let dia = data.getDate();
let diaSemana = data.getDay();

switch (diaSemana){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira';
        break; 
    case 2:
        diaSemana = 'Terça-feira';
        break;
    case 3:
        diaSemana = 'Quarta-feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Sexta-feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
};

let mes = data.getMonth();

switch (mes){
    case 0:
        mes = 'Janeiro';
        break;
    case 1:
        mes = 'Fevereiro';
        break;
    case 2:
        mes = 'Março';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Maio';
        break;
    case 5:
        mes = 'Junho';
        break;
    case 6:
        mes = 'Julho';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        mes = 'Setembro';
        break;
    case 9:
        mes = 'Outubro';
        break;
    case 10:
        mes = 'Novembro';
        break;
    case 11:
        mes = 'Dezembro';
        break;
}

let hora = data.getHours();
let minuto = data.getMinutes();

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} - ${hora}:${minuto}`;
}

document.getElementById('data').innerHTML = formataData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//    dateStyle: 'full',  // maneira mais facil de fazer todo esse projeto
//    timeStyle: 'short',
// };
// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
// aula 28 - Switch/Case
// switch/case é uma forma de simplificar o if/else quando temos muitas condições

const date = new Date();
const diaSemana = date.getDay();
let diaSemanaTexto; 

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);
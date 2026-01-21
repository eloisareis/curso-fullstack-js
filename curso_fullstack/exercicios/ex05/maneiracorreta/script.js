const numero_dig = Number(prompt("Digite um número:"));
const n_campo = document.getElementById('numero-dig');

n_campo.innerHTML = numero_dig;

const raiz = numero_dig ** 0.5;
const raiz_campo = document.getElementById('raiz');

raiz_campo.innerHTML = raiz;

const inteiro = !! (Math.round(numero_dig) == numero_dig); // isInteger(numero)
const inteiro_campo = document.getElementById('inteiro');

inteiro_campo.innerHTML = inteiro;

const nan = Number.isNaN(numero_dig);
const nan_campo = document.getElementById('nan');

nan_campo.innerHTML = nan;

const arr_baixo = Math.floor(numero_dig);
const arrb_campo = document.getElementById('arr_baixo');

arrb_campo.innerHTML = arr_baixo;

const arr_cima = Math.ceil(numero_dig);
const arrc_campo = document.getElementById('arr_cima');

arrc_campo.innerHTML = arr_cima;

const decimal = numero_dig.toFixed(2);
const decimal_campo = document.getElementById('decimal');

decimal_campo.innerHTML = decimal;
// aula 31 - For - Clássico - Estrutura de Repetição

// for ('declara a variável de controle'; 'condição de parada'; 'incremento ou decremento da variável de controle') 
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i<= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`${i} é ${par}`);
}

const frutas = ['Maça', 'Banana', 'Uva', 'Pera'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`índice ${i} = fruta ${frutas[i]}`);
}

const numero = [
    {um: '1 um', texto: 'um'},
    {doia: '2 doia', texto: 'dois'}
]

for (let i = 0; i <= numero.length; i++) {
    console.log(`indice: ${i}, numero: ${numero.um}`);
}
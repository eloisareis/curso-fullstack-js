// aula 36 - Break e Continue 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log('Pulei o número 2 e 5');
        continue; // ele vai pular o número 2 e 5 e continuar o loop
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Cheguei no número 7, vou parar o loop');
        break; // ele vai parar o loop quando chegar no número 7
    }
}
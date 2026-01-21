// aula 15 - Arrays (básico)

// Estrutura de dados utilizada para armazenar uma coleção sequencial de elementos, 
// geralmente do mesmo tipo, em posições contíguas (consecutivas) de memória RAM.

// são indexados por elementos
//                     0         1         2         3         4
const amigosTron = ['Eloisa', 'Pedro', 'Ricardo', 'Amanda', 'Emerson']; // um array pode armazenar dados de tipos diferentes (mas não é uma boa prática)
console.log(amigosTron);
console.log(amigosTron[3]);

// podemos também editar um elemento do array idicando qual index a ser mudado
amigosTron[1] = 'Pedro Augusto';

// podemos adicionar valores no array
amigosTron[5] = 'fulano'; // esse modo é mais complicado, afinal a pessoa deveria saber qual o tamanho do array e colocar o valor exato do index
console.log(amigosTron.length); // uma maneira de descobrir o tamano do array é com a função lenght

// amigosTron[amigosTron.length] = 'fulano';
// amigosTron[amigosTron.length] = 'ciclano'; // outra maneira de add um elemnto no array
// amigosTron[amigosTron.length] = 'beltrano';

amigosTron.push('ciclano'); // outra maneira de add um elemnto no array no fim do array

amigosTron.unshift('beltrano'); // maneira de add no inicio do array

amigosTron.pop(); // removendo um elemento do final do array
amigosTron.shift(); // removendo um elemento do inicio do array

delete amigosTron[3]; // apaga pelo indice deixando ele vazio

console.log(amigosTron[20]); // acessando um indice que nao existe

console.log(amigosTron.slice(0, 3)); // fatiando/ pegando mais de um elemento
console.log(amigosTron.slice(-1)); // ultimo elemento do array
console.log(amigosTron.slice(0, -2));

console.log(typeof(amigosTron)); // arrays são objetos
console.log(amigosTron instanceof Array); // amigosTron é uma instância de Array? retorna bool (verifica se é array ou não)

console.log(amigosTron);
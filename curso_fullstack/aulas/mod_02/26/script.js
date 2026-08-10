// aula 26 - Objeto Date
// O objeto Date é usado para trabalhar com datas e horas em JavaScript. Ele fornece métodos para criar, manipular e formatar datas e horas.

// cria um objeto Date com a data e hora atual
const data = new Date(2019, 1, 28, 14, 30, 27); // 0 - 01/01/1970 Timestamp Unix ou época unix / ano, mês, dia, hora, minuto, segundo, milissegundo
console.log(data.toString()); 

console.log('dia', data.getDate());
console.log('ano', data.getFullYear());
console.log('mes', data.getMonth() + 1); // mês começa do 0, então adicionamos 1 para exibir corretamente
console.log('hora', data.getHours());
console.log('minuto', data.getMinutes());
console.log('segundo', data.getSeconds());
console.log('milissegundo', data.getMilliseconds());
console.log('dia da semana', data.getDay()); // 0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - sábado

console.log(Date.now()); // retorna o timestamp atual em milissegundos desde 01/01/1970
const data2 = new Date(1785267986461);
console.log(data2.toString());
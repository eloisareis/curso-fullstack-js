// aula 10 - alert, confirm e prompt
// funções do navegador para facilitar a fazer alguns exercicios para ficar mais dinamico

alert('Atlético Clube Goianiense'); // alert está dentro do objeto Window que é o pai de toda parte web - window.alert / window.confirm / window.prompt
// Não retorna nada por padrao 'undefined'

confirm('Deseja mesmo apagar?'); // retorna um bool - true or false

prompt('Digite o seu nome'); // Retorna uma script

const confirma = confirm('Relamente deseja apagar?'); // o valor booleano que o user precionar vai para dentro da variavel confirma. Mas não retorna nada de imediato
// então ao usar a variavel confirma ela retornará true or fale dependendo do que for apertado pelo usuario


const nome = prompt('Digite o seu nome'); // o mesmo para o prompt

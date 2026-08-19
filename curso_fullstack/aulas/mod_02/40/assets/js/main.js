// aula 40 - Criando uma lista de tarefas

const inputNew = document.querySelector('.inputNew');
const btnAdd = document.querySelector('.btn-add');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
   return document.createElement('li');
}

inputNew.addEventListener('keypress', function(e) { // keypress é o evento que ocorre quando uma tecla é pressionada
    if (e.keyCode === 13) { // 13 é o código da tecla Enter
        if (!inputNew.value) return
        criaTarefa(inputNew.value);
    }
});

function limpaInput() {
    inputNew.value = '';
    inputNew.focus(); // focus é o método que coloca o cursor no input
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // adiciona um espaço entre o texto da tarefa e o botão
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar'); // setAttribute adiciona um atributo a um elemento, ou seja, adiciona a classe apagar ao botão
    li.appendChild(btnApagar); // appendChild adiciona um elemento filho a outro elemento, ou seja, adiciona o botão como filho do li
    salvarTarefa();
}

function criaTarefa(texto) {
    const li = criaLi();
    li.innerText = texto;
    tarefas.appendChild(li); // appendChild adiciona um elemento filho a outro elemento, ou seja, adiciona o li como filho da ul
    limpaInput();
    criaBotaoApagar(li);
}

btnAdd.addEventListener('click', function(e) {
    if (!inputNew.value) return
    criaTarefa(inputNew.value);
});

document.addEventListener('click', function(e) {
    const el = e.target; // e.target é o elemento que foi clicado
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // parentElement é o elemento pai do elemento clicado, ou seja, o li, e remove() remove o elemento
    }
    salvarTarefa();
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li'); // querySelectorAll retorna uma NodeList com todos os elementos que correspondem ao seletor, ou seja, todos os li
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        const tarefaTexto = tarefa.innerText.replace('Apagar', '').trim(); // replace substitui uma string por outra, ou seja, remove a palavra Apagar do texto da tarefa, e trim remove os espaços em branco do início e do fim da string
        listaTarefas.push(tarefaTexto); // push adiciona um elemento ao final do array, ou seja, adiciona o texto da tarefa ao array listaTarefas
    }

    const tarefasJSON = JSON.stringify(listaTarefas); // JSON.stringify converte um objeto JavaScript em uma string JSON. Assim vamos poder salvar em algum lugar do computador e depois buscá-lo e manipulá-lo depois
    localStorage.setItem('tarefas', tarefasJSON); // localStorage é um objeto que permite armazenar dados no navegador do usuário, e setItem adiciona um item ao localStorage, ou seja, adiciona a lista de tarefas ao localStorage. E ele salva no navegaor no DOM Aplication, no localStorage, na aba Storage, no navegador. E ele salva no navegador mesmo que a página seja atualizada ou fechada.
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // getItem retorna o valor de um item do localStorage, ou seja, retorna a lista de tarefas do localStorage
    const listaTarefas = JSON.parse(tarefas); // JSON.parse converte uma string JSON em um objeto JavaScript

    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas(); // chama a função para adicionar as tarefas salvas no localStorage
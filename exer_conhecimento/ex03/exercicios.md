# Exercícios de conhecimento 03 — Revisão geral de JavaScript

Esta lista revisa os principais assuntos estudados até o momento. Resolva as questões sem consultar o material na primeira tentativa e teste todos os códigos que escrever.

> Não há gabarito neste arquivo. Escreva suas próprias respostas e confira somente depois de concluir cada bloco.

## Bloco 1 — Fundamentos

### 1. Node.js e navegador

Qual é a diferença entre JavaScript executado pelo Node.js e JavaScript executado pelo navegador?

### 2. JavaScript no HTML

Onde normalmente colocamos a tag `<script>` no HTML? Explique o motivo.

### 3. Comentários

Escreva um comentário de linha e um comentário de bloco.

### 4. Tipos de dados

Informe o tipo de cada valor:

```javascript
'Eloisa'
20
true
undefined
null
```

### 5. let, const e var

Explique a diferença entre `let`, `const` e `var`.

### 6. Nomes de variáveis

Quais declarações abaixo possuem nomes inválidos? Explique cada problema.

```javascript
let nomeCompleto;
let 2nome;
let nome-completo;
let minhaIdade;
let let;
```

## Bloco 2 — Operadores e conversões

### 7. Concatenação e soma

Sem executar, diga o resultado e o tipo de cada expressão:

```javascript
const n1 = '10';
const n2 = 5;

console.log(n1 + n2);
console.log(Number(n1) + n2);
```

### 8. Precedência

Qual será o resultado? Explique a ordem das operações.

```javascript
console.log(2 + 3 * 4 ** 2);
```

### 9. Incremento

Explique a diferença entre os dois resultados:

```javascript
let a = 5;
console.log(a++);

let b = 5;
console.log(++b);
```

### 10. Média com prompt

Faça um programa que:

1. Receba dois números com `prompt`.
2. Converta os valores recebidos.
3. Calcule a média.
4. Apresente o resultado com `alert`.

## Bloco 3 — Strings, numbers e Math

### 11. Acessando uma string

Considerando a variável abaixo:

```javascript
const linguagem = 'JavaScript';
```

Mostre:

- A primeira letra.
- A última letra sem usar diretamente o índice `9`.
- O tamanho da string.
- A palavra em letras maiúsculas.
- Apenas a parte `Script`.

### 12. Substituição de texto

Transforme:

```javascript
const frase = 'Eu gosto de JavaScript';
```

No texto:

```text
Eu gosto muito de programação
```

### 13. Conversões numéricas

Explique a diferença entre os resultados:

```javascript
parseInt('10.8');
parseFloat('10.8');
Number('10.8');
```

### 14. Verificando NaN

Crie uma conversão numérica inválida e verifique corretamente se seu resultado é `NaN`.

### 15. Número aleatório

Gere um número inteiro aleatório entre 1 e 20.

## Bloco 4 — Arrays, funções e objetos

### 16. Operações com arrays

Dado o array:

```javascript
const animais = ['Gato', 'Cachorro', 'Coelho'];
```

Faça as operações na ordem:

1. Adicione `Pássaro` ao final.
2. Adicione `Peixe` ao início.
3. Remova o último elemento.
4. Remova o primeiro elemento.
5. Mostre o tamanho final.

### 17. Array declarado com const

Um array declarado com `const` pode receber novos itens? Ele pode ser completamente reatribuído? Explique.

### 18. Função maiorNumero

Crie uma função chamada `maiorNumero` que receba dois números e retorne o maior deles.

Teste também o caso em que os números sejam iguais.

### 19. Arrow Function

Reescreva como Arrow Function:

```javascript
function quadrado(numero) {
    return numero ** 2;
}
```

### 20. Função fábrica

Crie uma função fábrica `criarPessoa` que receba nome, sobrenome e idade e retorne um objeto.

### 21. Método e this

Acrescente ao objeto da atividade anterior um método que apresente a pessoa usando `this`.

### 22. Valores por referência

Qual será o resultado? Explique por que isso acontece.

```javascript
const original = ['A', 'B'];
const copia = original;

copia.push('C');

console.log(original);
console.log(copia);
```

### 23. Cópia com spread

Modifique o código da atividade anterior para criar uma cópia independente usando spread.

## Bloco 5 — Comparações, lógica e condicionais

### 24. Comparações

Diga o resultado de cada comparação e explique a diferença entre igualdade comum e igualdade estrita:

```javascript
console.log(10 == '10');
console.log(10 === '10');
console.log(10 != '10');
console.log(10 !== '10');
```

### 25. Curto-circuito

Sem executar, diga o valor exibido em cada linha:

```javascript
console.log(0 || 'Valor padrão');
console.log('JavaScript' || 'Valor padrão');
console.log(true && 'Executou');
console.log(false && 'Executou');
```

### 26. Classificação de notas

Crie uma função que receba uma nota e retorne:

- `Reprovado`, para notas abaixo de 5.
- `Recuperação`, para notas de 5 até abaixo de 7.
- `Aprovado`, para notas de 7 até 10.
- `Nota inválida`, para valores fora da faixa de 0 a 10.

## Bloco 6 — Desestruturação, repetições e erros

### 27. Desestruturação de array

Use desestruturação para extrair o primeiro número, o segundo número e todos os restantes:

```javascript
const numeros = [10, 20, 30, 40, 50];
```

### 28. continue e break

Faça um `for` que percorra os números de 1 a 20, mas:

- Ignore os múltiplos de 3 usando `continue`.
- Encerre completamente o laço ao chegar no número 17 usando `break`.

### 29. Tratamento de erros

Crie uma função `dividir(a, b)` que lance um erro quando:

- Um dos valores não for do tipo `number`.
- O divisor for zero.

Depois, chame a função utilizando `try`, `catch` e `finally`.

## Bloco 7 — Projeto com DOM e localStorage

### 30. Lista de tarefas

Construa uma lista de tarefas que:

1. Receba uma tarefa por um `<input>`.
2. Não aceite texto vazio.
3. Adicione cada tarefa em um `<li>` criado pelo JavaScript.
4. Crie um botão para apagar cada tarefa.
5. Use delegação de eventos para identificar o botão clicado.
6. Salve as tarefas no `localStorage`.
7. Converta o array para texto usando `JSON.stringify`.
8. Recupere os dados usando `JSON.parse`.
9. Mantenha as tarefas depois que a página for atualizada.

Antes de considerar o projeto concluído, teste:

- Uma tentativa com texto vazio.
- A inclusão de pelo menos três tarefas.
- A remoção da tarefa do meio.
- A atualização da página.
- A abertura da página sem nenhum dado salvo.

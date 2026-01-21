# Aula 01 - Introdução e Configuração

Nesta aula, foram abordados os seguintes tópicos:

- **Node e NPM**: Utilização do Node.js com o NPM (Node Package Manager) para executar JavaScript fora do navegador.
- **VS Code e Code Runner**: Configuração do VS Code com a extensão Code Runner para facilitar a execução de scripts JavaScript, servindo como ponte entre o editor e o Node.js.
- **Primeiro Código**: Execução de um "Hello World" simples:
  ```javascript
  console.log('Hello Word!');
  ```
- **Execução via Terminal**: Exemplo de como executar o arquivo via terminal usando o comando 
    ```bash
    node aula01.js
    ```

# Aula 02 - Console.log e Tipos de Dados

Nesta aula, o foco foi o uso do `console.log` e tipos de dados básicos:

- **Console.log**: Função utilizada para exibir mensagens no console. O ponto e vírgula é opcional.
- **Strings**: Podem ser delimitadas por aspas simples (`'`), aspas duplas (`"`) ou crase (`` ` ``).
    - Aspas simples e duplas permitem alternar para exibir a outra aspa dentro do texto.
    - Crase (Template Strings) permite usar ambas as aspas dentro do texto.
- **Números**: O JavaScript lida com números inteiros e reais (ponto flutuante) como o tipo `Number`.

Exemplos de código:
```javascript
console.log('Hello Word!'); // Aspas simples
console.log("Hello Word!"); // Aspas duplas
console.log("Eloisa 'Reis' linda"); // Aspas duplas com aspas simples dentro
console.log(`'Eloisa' "Reis"`); // Crase permitindo ambas as aspas
console.log(10, 5.5, 'Eloisa Reis'); // Números e texto
```

# Aula 03 - Comentários de Código

Nesta aula, foram apresentados os tipos de comentários em JavaScript e atalhos do VS Code:

- **Comentários de Linha**: Iniciados com `//`, tudo após as barras na mesma linha é ignorado pelo motor do JavaScript.
- **Comentários de Bloco**: Delimitados por `/*` e `*/`, permitem comentar múltiplas linhas.
- **Atalhos no VS Code (Windows)**:
    - Comentar linhas: `Ctrl + k` seguido de `Ctrl + c`
    - Descomentar linhas: `Ctrl + k` seguido de `Ctrl + u`

Exemplos de código:
```javascript
// Comentário de uma única linha

/*
    Bloco de comentário
    que ocupa várias linhas
*/
```

# Aula 04 - Mesclando HTML com JS

Nesta aula, aprendemos como integrar JavaScript em páginas HTML:

- **Tag `<script>`**: Utilizada para inserir códigos JavaScript dentro do HTML.
- **Localização do Script**:
    - Pode ser colocado no `<head>`, mas isso pode retardar o carregamento visual da página.
    - **Melhor Prática**: Colocar a tag `<script>` no final do `<body>`, logo antes do fechamento `</body>`. Isso garante que os elementos HTML sejam carregados antes do script ser executado.
- **Scripts Internos vs Externos**:
    - **Interno**: Código JS escrito diretamente dentro da tag `<script>`.
    - **Externo**: Código JS em um arquivo separado (ex: `index.js`) e importado usando o atributo `src`.
    - **Vantagem do Externo**: Mantém o código organizado, separando a estrutura (HTML) da lógica (JS).

Exemplo de importação de script externo:
```html
<body>
    <!-- Conteúdo da página -->
    <script src="index.js"></script>
</body>
```

# Aula 05 - Variáveis

Nesta aula, aprendemos sobre a declaração e regras de variáveis em JavaScript:

- **Variável**: É um espaço na memória do computador destinado a armazenar dados (valores) que podem ser acessados e modificados durante a execução do programa.

- **`let` vs `var`**:
    - O curso utiliza `let` para declarar variáveis.
    - `var` é uma forma mais antiga e não será utilizada.
- **Declaração e Inicialização**:
    - Podemos declarar uma variável sem valor inicial: `let nome;`.
    - Nesse caso, o valor será `undefined`.
    - Podemos atribuir valor posteriormente: `nome = 'Valor';`.
    - Não é possível redeclarar uma variável criada com `let` no mesmo escopo.
    - **Concatenação**: Podemos usar o sinal de `+` para juntar valores (variáveis ou literais).
    - **Template Strings**: Uma forma moderna de exibir variáveis dentro de strings, utilizando crases (`` ` ``) e `${}`.
- **Regras de Nomenclatura**:
    - **Palavras Reservadas**: Não podemos usar palavras reservadas da linguagem (ex: `let`, `console`, `if`).
    - **Nomes Significativos**: Variáveis devem ter nomes que descrevem seu conteúdo.
    - **Início do Nome**: Não podem começar com números. Devem começar com letras minúsculas (convenção).
    - **Caracteres**: Não podem conter espaços ou traços.
    - **camelCase**: Para nomes compostos, a primeira palavra é minúscula e as subsequentes iniciam com maiúscula (ex: `nomeCompletoDoCliente`).
    - **Case-sensitive**: O JavaScript diferencia maiúsculas de minúsculas (`nomeCliente` é diferente de `nomecliente`).

Exemplos:
```javascript
let nome = 'Eloisa'; // Declaração com valor
let idade; // Declaração sem valor (undefined)
idade = 25; // Atribuição posterior
// let nome = 'Outro'; // Erro: não pode redeclarar
```

# Aula 06 - Constantes com const

Nesta aula, aprendemos sobre o uso de constantes (`const`) em JavaScript:

- **Constante**: É um identificador para um valor que, uma vez atribuído, não pode ser alterado (reatribuído) durante a execução do programa. É útil para valores que devem permanecer fixos.
- **Regras de Nomenclatura**:
    - **Palavras Reservadas**: Não podemos usar palavras reservadas da linguagem.
    - **Nomes Significativos**: Constantes devem ter nomes que descrevam seu conteúdo.
    - **Início do Nome**: Não podem começar com números. Devem começar com letras minúsculas (convenção).
    - **Caracteres**: Não podem conter espaços ou traços.
    - **camelCase**: Para nomes compostos, a primeira palavra é minúscula e as subsequentes iniciam com maiúscula (ex: `nomeCompletoDoCliente`).
    - **Case-sensitive**: O JavaScript diferencia maiúsculas de minúsculas.
- **Outras Regras**:
    - **Inicialização Obrigatória**: Deve ser criada e inicializada ao mesmo tempo (ex: `const nome = 'Valor';`). Não é possível declarar sem valor (`const nome;` gera erro).
    - **Imutabilidade**: Não podemos modificar o valor de uma constante após a atribuição.
- **Tipagem Dinâmica**:
    - O JavaScript infere o tipo da constante/variável com base no valor atribuído.
    - `typeof(variavel)`: Comando para descobrir o tipo de dado.

Exemplos:
```javascript
const nome = 'Eloisa';
console.log(nome);
console.log(typeof(nome)); // Exibe o tipo da constante (ex: string)
// nome = 'Outro'; // Erro: Assignment to constant variable.
// const idade; // Erro: Missing initializer in const declaration
```

# Aula 07 - Let vs Var - Primeira diferença

Nesta aula, foi apresentada a primeira diferença entre `var` e `let` em relação à redeclaração de variáveis:

- **`var`**: Permite redeclarar uma variável com o mesmo nome no mesmo escopo. Isso pode causar comportamentos inesperados e bugs.
- **`let`**: Não permite redeclarar uma variável no mesmo escopo. Se tentarmos criar uma variável com um nome que já existe usando `let`, o JavaScript gerará um erro.

- **Variáveis Globais (Sem declaração)**:
    - É possível criar uma variável sem usar `var`, `let` ou `const` (ex: `nome = 'Valor';`).
    - **Cuidado**: Isso cria uma **variável global** que pode afetar outras partes do sistema. **Não faça isso**. Sempre declare suas variáveis.

Exemplos:
```javascript
// Com var (Permite redeclaração - NÃO RECOMENDADO)
var nome = 'Eloisa';
var nome = 'Reis'; // Funciona, mas sobrescreve a anterior sem aviso

// Com let (Mais seguro)
let nome2 = 'Eloisa';
// let nome2 = 'Reis'; // Erro: Identifier 'nome2' has already been declared

// Sem declaração (CRIA VARIÁVEL GLOBAL - NÃO FAÇA ISSO)
nome3 = 'Ravena'; 
```

# Aula 08 - Tipos de Dados Primitivos

Nesta aula, aprendemos sobre os tipos de dados primitivos em JavaScript:

- **String**: Dados de texto. Podem ser delimitados por aspas simples, aspas duplas ou crase (template strings).
- **Number**: Representa tanto números inteiros quanto decimais (ponto flutuante).
- **Undefined**: Representa uma variável que foi declarada mas não teve valor atribuído. Não aponta para nenhum local na memória.
- **Null**: Valor nulo. Utilizado explicitamente para indicar que a variável está vazia ou não aponta para nada. Diferente de undefined, é uma atribuição intencional.
- **Boolean**: Tipo lógico que possui apenas dois valores: `true` (verdadeiro) ou `false` (falso).

Exemplos:
```javascript
// String
let nome = 'Eloisa';
let gato = "Ravena";
let sobrenome = `Reis`;

// Number
let n1 = 0.3;
let n2 = 590;

// Undefined e Null
let nomePessoa; // undefined
let sobrenomePessoa = null; // null

// Boolean
const verdade = true;
const falso = false;
```

# Aula 09 - Operadores Aritméticos, de Atribuição e Incremento

Nesta aula, exploramos os operadores fundamentais para cálculos e manipulação de valores em JavaScript, além de conversão de tipos de dados.

- **Operadores Aritméticos**:
    - `+`: Adição ou Concatenação (se um dos valores for string).
    - `-`: Subtração.
    - `*`: Multiplicação.
    - `/`: Divisão.
    - `**`: Potenciação (Elevado a).
    - `%`: Resto da divisão.

- **Precedência de Operadores**:
    A ordem de execução das contas segue a matemática padrão:
    1. Parênteses `()`
    2. Potenciação `**`
    3. Multiplicação, Divisão e Resto `*` `/` `%`
    4. Adição e Subtração `+` `-`

- **Operadores de Incremento e Decremento**:
    - `++`: Adiciona 1 ao valor da variável.
    - `--`: Subtrai 1 do valor da variável.
    - **Pós-fixado** (`variável++`): Retorna o valor atual e *depois* incrementa.
    - **Pré-fixado** (`++variável`): Incrementa o valor e *depois* retorna o novo valor.

- **Operadores de Atribuição**:
    - Permitem atualizar o valor de uma variável com base em uma operação.
    - Exemplos: `+=` (soma e atribui), `-=` (subtrai e atribui), `*=` (multiplica e atribui), etc.

- **Conversão de Tipos (Parsing)**:
    - Às vezes precisamos converter strings numéricas para números reais para realizar cálculos.
    - `parseInt('valor')`: Converte para número inteiro.
    - `parseFloat('valor')`: Converte para número de ponto flutuante (decimal).
    - `Number('valor')`: Converte para número (infere se é inteiro ou decimal).

Exemplos:
```javascript
const n1 = 9;
const n2 = 4;

console.log(n1 + n2);      // 13 (Soma)
console.log('9' + n2);     // '94' (Concatenação)
console.log(n2 ** 2);      // 16 (Potenciação)
console.log(n1 % n2);      // 1 (Resto de 9 dividido por 4)

// Incremento
let i = 0;
console.log(i++); // 0 (Mostra, depois incrementa)
console.log(++i); // 2 (Incrementa agora para 2, depois mostra)

// Atribuição
let d = 10;
d += 5; // d = d + 5; (Agora d vale 15)

// Conversão
const numStr = "5";
const numInt = parseInt(numStr);
console.log(typeof numInt); // 'number'
```

# Aula 10 - Alert, Confirm e Prompt

Nesta aula, aprendemos sobre três métodos do objeto `window` utilizados para interagir com o usuário no navegador:

- **`alert('mensagem')`**: Exibe uma caixa de alerta. Retorna `undefined`.
- **`confirm('mensagem')`**: Exibe uma caixa de confirmação com opções "OK" e "Cancelar". Retorna um valor booleano (`true` se OK, `false` se Cancelar).
- **`prompt('mensagem')`**: Exibe uma caixa de entrada que permite ao usuário digitar um texto. Retorna o texto digitado como uma **string** ou `null` se o usuário cancelar.

**Observações Importantes**:
- Essas funções pausam a execução do script até que o usuário interaja com elas.
- O `prompt` sempre retorna o valor como **string**, mesmo que sejam números. Para operações matemáticas, é necessário converter o valor (ex: `Number()`, `parseInt()`, `parseFloat()`).

Exemplos:
```javascript
// Alert
alert('Bem-vindo ao sistema!');

// Confirm
const desejaApagar = confirm('Tem certeza que deseja apagar?');
console.log(desejaApagar); // true ou false

// Prompt
const nome = prompt('Digite seu nome:'); 
console.log(nome); // Retorna o texto

const num1 = prompt('Digite um ano:'); 
console.log(typeof num1); // 'string'
```

# Aula 11 - Mais sobre Strings

Nesta aula, aprofundamos o conhecimento sobre manipulação de strings em JavaScript:

- **Caractere de Escape**: A barra invertida (`\`) é usada para "escapar" caracteres especiais, permitindo exibir aspas dentro de uma string delimitada pelo mesmo tipo de aspa (ex: `\"texto\"`).
- **Indexação**: Strings são iteráveis e indexadas, ou seja, cada caractere possui uma posição numérica começando do 0.
    - `012345678910`
    - `Eloisa Reis`

- **Métodos e Propriedades Úteis**:
    - **Acesso a caracteres**:
        - `str[i]`: Acessa o caractere no índice `i`.
        - `str.charAt(i)`: Função equivalente para acessar o caractere no índice.
    - **Concatenação**:
        - `str.concat(' texto')`: Junta strings.
        - Template Strings `${}`: Forma mais moderna de concatenação.
    - **Busca**:
        - `indexOf('texto')`: Retorna o índice onde começa a primeira ocorrência do texto (ou -1 se não encontrar). Aceita um segundo parâmetro para iniciar a busca a partir de um índice específico.
        - `lastIndexOf('texto')`: Retorna o índice da última ocorrência do texto.
        - `search(/regex/)`: Busca usando expressões regulares.
        - `match(/[a-z]/g)`: Retorna um array com as correspondências encontradas pela expressão regular.
    - **Substituição**:
        - `replace('antigo', 'novo')`: Substitui a primeira ocorrência do texto. Aceita expressões regulares para substituir todas as ocorrências (ex: `/letra/g`).
    - **Fatiamento (Extração)**:
        - `slice(inicio, fim)`: Retorna uma parte da string do índice `inicio` até `fim` (não incluso).
        - `slice(negativo)`: Com valores negativos, fatia a partir do final da string.
    - **Tamanho**:
        - `length`: Propriedade que retorna o tamanho total da string.
    - **Conversão de Caixa**:
        - `toUpperCase()`: Converte tudo para maiúsculas.
        - `toLowerCase()`: Converte tudo para minúsculas.

Exemplos:
```javascript
// Escape de caracteres
console.log("Um \"texto\"");
console.log("Um \\texto");

// Indexação
let strg = 'Eloisa Reis';
console.log(strg[7]);        // 'R'
console.log(strg.charAt(7)); // 'R'

// Concatenação
console.log(strg.concat(" a mais linda."));
console.log(`${strg} a mais linda.`);

// Busca
console.log(strg.indexOf('reis')); // -1 (Case sensitive)
console.log(strg.indexOf('i', 7)); // Busca 'i' a partir do índice 7
console.log(strg.lastIndexOf('E'));
console.log(strg.search(/R/)); 

// Substituição
console.log(strg.replace('Eloisa', 'Ravena')); 

// Tamanho e Fatiamento
console.log(strg.length);
console.log(strg.slice(7, 11)); // 'Reis'
console.log(strg.slice(-4));    // 'Reis' (pega os 4 últimos)

// Maiúsculas e Minúsculas
console.log(strg.toUpperCase());
console.log(strg.toLowerCase());
```

# Aula 12 - Mais sobre Numbers

Nesta aula, aprendemos algumas funções úteis para manipulação de números e sobre a imprecisão de cálculos com ponto flutuante:

- **Conversão para String**:
    - `num.toString()`: Converte um número para string.
    - `num.toString(2)`: Converte o número para sua representação binária.

- **Casas Decimais**:
    - `num.toFixed(2)`: Fixa o número de casas decimais (ex: 2 casas). Retorna uma string.

- **Verificações**:
    - `Number.isInteger(num)`: Retorna `true` se o número for inteiro, `false` caso contrário.
    - `Number.isNaN(temp)`: Retorna `true` se a variável for "Not a Number".

- **Imprecisão com Ponto Flutuante (IEEE 754-2008)**:
    - Cálculos com decimais podem ter pequenas imprecisões (ex: `0.7 + 0.1` resulta em `0.7999999999999999`).
    - **Solução 1**: Usar `parseFloat()` e `toFixed()`:
        ```javascript
        num = parseFloat(num.toFixed(2));
        ```
    - **Solução 2**: Matemática (multiplicar e dividir por 100):
        ```javascript
        num = ((num1 * 100) + (num2 * 100)) / 100;
        ```

# Aula 13 - Objeto Math

Nesta aula, conhecemos o objeto global `Math`, que possui métodos e propriedades para operações matemáticas mais complexas:

- **Arredondamento**:
    - `Math.floor(n)`: Arredonda o número para baixo (para o menor inteiro).
    - `Math.ceil(n)`: Arredonda o número para cima (para o maior inteiro).
    - `Math.round(n)`: Arredonda para o inteiro mais próximo (0.5+ arredonda para cima, abaixo disso para baixo).
- **Mínimo e Máximo**:
    - `Math.max(n1, n2, ...)`: Retorna o maior número de uma lista de argumentos.
    - `Math.min(n1, n2, ...)`: Retorna o menor número de uma lista de argumentos.
- **Aleatório**:
    - `Math.random()`: Gera um número aleatório pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

Exemplos:
```javascript
let n1 = 9.54578;
// let n2 = Math.floor(n1); // 9
// let n3 = Math.ceil(n1);  // 10
// let n4 = Math.round(n1); // 10

console.log(Math.max(1, 2, 3, 4, -30, -50, 1500, 9, 8, 7, 6)); // 1500
console.log(Math.min(1, 2, 3, 4, -30, -50, 1500, 9, 8, 7, 6)); // -50
console.log(Math.random()); // Ex: 0.1234...
```

# Aula 14 - Arrays (Básico)

Nesta aula, introduzimos os Arrays, uma estrutura de dados fundamental:

- **Definição**: Arrays são utilizados para armazenar uma coleção sequencial de elementos. Geralmente do mesmo tipo, mas em JS aceitam tipos mistos.
- **Indexação**: São indexados numericamente, começando do índice 0.
- **Criação**: `const array = ['Valor1', 'Valor2'];`
- **Operações Básicas**:
    - **Acesso**: `array[indice]`
    - **Modificação**: `array[indice] = novoValor`
    - **Tamanho**: `array.length` (retorna a quantidade de elementos).
- **Métodos de Adição e Remoção**:
    - `push('valor')`: Adiciona um elemento ao **final** do array.
    - `unshift('valor')`: Adiciona um elemento ao **início** do array.
    - `pop()`: Remove o elemento do **final** do array.
    - `shift()`: Remove o elemento do **início** do array.
    - `delete array[indice]`: Remove o valor do índice, mas deixa a posição vazia (`empty item`).
- **Outros Métodos**:
    - `slice(inicio, fim)`: Fatio o array, retornando uma cópia de uma parte dele.
    - `instanceof Array`: Verifica se a variável é um array (retorna `true/false`). `typeof` retorna `'object'`.

Exemplos:
```javascript
// Criação
const amigos = ['Eloisa', 'Pedro', 'Ricardo', 'Amanda'];

// Acesso e Edição
console.log(amigos[0]); // 'Eloisa'
amigos[1] = 'Pedro Augusto';

// Adição
amigos.push('Ciclano');    // Adiciona no fim
amigos.unshift('Fulano');  // Adiciona no início

// Remoção
amigos.pop();   // Remove do fim
amigos.shift(); // Remove do início
// delete amigos[3]; // Remove valor, mantém buraco

// Fatiamento
console.log(amigos.slice(0, 3)); // Pega os 3 primeiros

// Verificação
console.log(typeof amigos); // 'object'
console.log(amigos instanceof Array); // true
```


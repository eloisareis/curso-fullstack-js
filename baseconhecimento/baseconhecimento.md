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

# Aula 15 - Const com valores mutáveis

Nesta aula, aprendemos a diferença entre variável e valor, e como `const` se comporta com tipos primivitos e estruturas de dados mutáveis:

- **Variável x Valor**: 
    - Variáveis funcionam como um 'apelido' para um valor, uma referência na memória.
    - Valores são os dados reais guardados na memória.
- **Tipos Primitivos (Imutáveis)**:
    - Tipos como `number`, `string`, `boolean`, `undefined`, `null`, `symbol` e `bigint` são imutáveis.
    - Quando declarados com `const`, nem a variável pode ser reatribuída, nem o valor pode ser alterado.
- **Estruturas de Dados (Mutáveis)**:
    - Tipos complexos como `arrays` e objetos em geral são mutáveis.
    - Quando usamos `const` com objetos ou arrays, a variável não pode ser reatribuída (não podemos usar `=`), mas os seus **valores internos podem ser alterados**. A constante continua apontando para o mesmo local de memória.

Exemplos:
```javascript
// Valores internos de um Array com const podem ser modificados
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]

// O que NÃO pode (reatribuição):
// array = 'Legal'; // Erro: Assignment to constant variable.
```

# Aula 16 - Funções

Nesta aula, aprendemos sobre funções, que são trechos de código criados para executar ações específicas e podem ser reutilizados:

- **Declaração Clássica**: Inicia com a palavra-chave `function`, seguida do nome, parâmetros (entre parênteses) e o corpo da função (entre chaves).
- **Parâmetros**: Valores que a função pode receber para processar as informações internamente.
- **Retorno (`return`)**: 
    - Funções podem ou não ter um `return`.
    - Se não tiver `return` (ou se o `return` estiver vazio), a função retorna `undefined`.
    - O `return` finaliza a execução da função e devolve o valor processado para onde a função foi chamada.
- **Funções Anônimas**: Funções sem nome que podem ser atribuídas a uma variável. Utiliza-se a palavra `function` normalmente, sem nomeá-la.
- **Arrow Functions**: Uma sintaxe mais curta e moderna para escrever funções anônimas, usando a "seta" `=>`. Se a função possuir apenas uma expressão e um parâmetro, os parênteses em torno do parâmetro, as chaves (`{}`) e a palavra `return` podem ser omitidos.

Exemplos:
```javascript
// Função Clássica sem retorno
function saudacao(nome) {
    console.log(`Boa tarde ${nome}`);
}
saudacao('Eloisa'); // Executa a ação, mas o retorno é undefined

// Função com retorno
function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 3);
console.log(resultado); // 8

// Função Anônima atribuída a uma variável
const raizQuadrada = function(num) {
    return num ** 0.5;
}
console.log(raizQuadrada(16)); // 4

// Arrow Function
const raizQuadrada2 = num => num ** 0.5; 
console.log(raizQuadrada2(25)); // 5
```

# Aula 18 - Objetos (Básico)

Nesta aula, aprendemos os conceitos básicos sobre **Objetos** em JavaScript, uma estrutura de dados fundamental para representar entidades do mundo real:

- **Criação de Objetos**:
    - Objetos são criados utilizando chaves `{}` (notação literal).
    - Eles armazenam dados no formato de **chave: valor** (propriedades e seus valores).
    - **Acesso a Propriedades**: Podemos acessar o valor de uma propriedade usando a notação de ponto (ex: `objeto.propriedade`).

- **Factory Functions (Funções Fábrica)**:
    - São funções que **retornam um objeto**.
    - Muito úteis para criar múltiplos objetos com a mesma estrutura, evitando a repetição de código.
    - **Sintaxe Curta**: Se o nome do parâmetro for igual ao nome da chave no objeto, podemos omitir a atribuição (ex: usar apenas `nome,` em vez de `nome: nome,`).

- **Métodos de Objetos**:
    - Funções que estão dentro de um objeto são chamadas de **métodos**.
    - Para declarar um método, não precisamos da palavra `function`, basta o nome seguido de parênteses e chaves (ex: `olaPessoa() { ... }`).
    
- **Uso do `this`**:
    - Dentro de um método de objeto, a palavra-chave `this` refere-se ao **próprio objeto**.
    - É utilizado para acessar as propriedades ou outros métodos do mesmo objeto (ex: `this.nome`).

Exemplos:
```javascript
// Criação de Objeto Literal
const pessoa = {
    nome: 'Eloisa',
    idade: 20,
    profissao: 'Programadora'
};
console.log(pessoa.nome); // 'Eloisa'

// Factory Function
function criarPessoa(nome, sobrenome, idade, profissao) {
    return {
        nome,      // Sintaxe curta (equivale a nome: nome)
        sobrenome,
        idade,
        profissao
    };
}
const pessoa1 = criarPessoa('Eloisa', 'Reis', 20, 'Programadora');
console.log(pessoa1);

// Métodos e a palavra-chave `this`
const pessoa2 = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20,

    olaPessoa() {
        // Acessando propriedades do próprio objeto com this
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`);
    },

    incrementaIdade() {
        ++this.idade; // Alterando propriedade do próprio objeto
    }
};

pessoa2.olaPessoa();
pessoa2.incrementaIdade();
pessoa2.olaPessoa();
```

# Aula 19 - Valores primitivos e valores por referência

Nesta aula, aprendemos a diferença entre como os valores primitivos e os valores por referência são armazenados e copiados na memória:

- **Valores Primitivos (Imutáveis)**:
    - Tipos: `string`, `number`, `boolean`, `undefined`, `null` (além de `symbol` e `bigint`).
    - **Cópia por valor**: Quando atribuímos uma variável primitiva a outra (ex: `let b = a`), o **valor** é copiado. As duas variáveis ficam independentes. Alterar uma não afeta a outra.

- **Valores por Referência (Mutáveis)**:
    - Tipos: `array`, `object`, `function`.
    - **Cópia por referência**: Quando atribuímos uma variável de referência a outra (ex: `let d = c`), não copiamos o valor, mas sim a **referência (endereço) na memória**. Ambas as variáveis passam a apontar para o mesmo local. Alterar o conteúdo através de uma variável afetará a outra.
    - **Cópia real (Independente)**: Para fazer uma cópia real e independente (shallow copy) de um array ou objeto, podemos usar o **Spread Operator (`...`)**.

Exemplos:
```javascript
// Valores Primitivos (Cópia por valor)
let a = 'A';
let b = a; // B recebe uma cópia do valor de A ('A')
console.log(a, b); // 'A' 'A'

a = 'Outra coisa'; // Alterar A não afeta B
console.log(a, b); // 'Outra coisa' 'A'

// Valores por Referência (Cópia por referência)
let c = [1, 2, 3];
let d = c;         // D aponta para o MESMO array que C na memória
let e = [...c];    // E recebe uma cópia real (novo array) com os valores de C

c.push(4);         // Alteramos o array original através de C
console.log(c, d); // [1, 2, 3, 4] [1, 2, 3, 4] (D reflete a mudança)
console.log(c, e); // [1, 2, 3, 4] [1, 2, 3] (E NÃO reflete a mudança, pois é independente)

// Objeto (Cópia por referência)
const pessoa = { nome: "Eloisa", sobrenome: "Reis" };
const pessoaCopia = pessoa; // Apontam para o mesmo objeto

pessoa.nome = "Ravena"; 
console.log(pessoa, pessoaCopia); // Ambas terão nome "Ravena"
```

# Aula 20 - Operadores de Comparação

Nesta aula, aprendemos sobre os operadores de comparação, que são utilizados para comparar valores e retornam um valor booleano (`true` ou `false`):

- `>` : Maior que
- `<` : Menor que
- `>=` : Maior ou igual a
- `<=` : Menor ou igual a
- `==` : Igualdade (compara apenas o valor, fazendo coerção de tipo se necessário)
- `===`: Igualdade estrita (compara tanto o valor quanto o tipo do dado)
- `!=` : Diferente (compara apenas o valor)
- `!==`: Diferente estrito (compara valor e tipo)

**Boa prática:** É recomendado o uso dos operadores estritos (`===` e `!==`) para evitar resultados inesperados causados pela conversão automática de tipos que o JavaScript realiza.

Exemplos:
```javascript
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false
console.log(10 == '10');  // true (coerção de tipo)
console.log(10 === '10'); // false (tipos diferentes)
console.log(10 != '10');  // false
console.log(10 !== '10'); // true
```

# Aula 21 - Operadores Lógicos

Nesta aula, foram introduzidos os operadores lógicos, usados para combinar ou inverter expressões booleanas:

- `&&` (AND / E): Retorna `true` se **todas** as condições forem verdadeiras.
- `||` (OR / OU): Retorna `true` se **pelo menos uma** das condições for verdadeira.
- `!` (NOT / NÃO): Inverte o valor booleano (de `true` para `false` e vice-versa).

Exemplos:
```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
console.log(!false);        // true
```

# Aula 22 - Avaliação de Curto-Circuito (Short-Circuit)

Nesta aula, aprendemos como os operadores lógicos `&&` e `||` se comportam na prática em JavaScript:

- **Curto-Circuito**: Os operadores avaliam a expressão apenas até onde é necessário para determinar o resultado final, parando a execução assim que o resultado já é garantido.
    - No `&&` (AND): Para no primeiro valor **falso** encontrado e o retorna. Se todos forem verdadeiros, retorna o último.
    - No `||` (OR): Para no primeiro valor **verdadeiro** encontrado e o retorna. Se todos forem falsos, retorna o último.

- **Valores FALSY**: São valores que, quando avaliados em um contexto booleano, são considerados como `false`.
    - `0`
    - `""` (string vazia)
    - `null`
    - `undefined`
    - `NaN`
    - `false`
    *(Qualquer valor diferente destes é considerado **TRUTHY**).*

Exemplos:
```javascript
// Exemplo com && (AND)
const a = true;
const b = false;
const resultadoAnd = a && b; // Curto-circuito: retorna false porque "b" é false
console.log(resultadoAnd);

// Exemplo com || (OR)
const c = true;
const d = false;
const resultadoOr = c || d; // Curto-circuito: retorna true logo no "c" e ignora o resto
console.log(resultadoOr);
```

# Aula 23 - Estruturas Condicionais (if, else if, else)

Nesta aula, conhecemos as estruturas de controle de fluxo condicional, fundamentais para a lógica de programação:

- `if` (se): Executa um bloco de código se a condição fornecida for verdadeira. Pode ser usado sozinho.
- `else if` (senão se): Usado para testar múltiplas condições consecutivas. Se a condição anterior foi falsa, ele testa esta nova. O bloco de código será executado na primeira condição que for verdadeira. Opcional, mas deve vir após o `if`.
- `else` (senão): Executa um bloco de código se **todas** as condições anteriores (do `if` e `else if`) forem falsas. É opcional e deve ser sempre o último bloco.

Exemplos de código:
```javascript
const hora = 18;   

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
```

# Aula 24 - if, else if, else (Parte 2)

Nesta aula, aprofundamos o funcionamento das estruturas condicionais `if`, `else if` e `else`:

- **Execução em Cadeia**: Quando usamos `else if`, o JavaScript testa as condições sequencialmente. O primeiro bloco que retornar uma condição verdadeira será o único executado, e todos os blocos seguintes serão ignorados, mesmo que suas condições também sejam verdadeiras.
- **Blocos Independentes**: Um código fora do bloco condicional ou em um `if` separado será executado independentemente das condições anteriores. O `else` e `else if` devem sempre estar diretamente conectados a um `if` precedente.

Exemplos de código:
```javascript
const numero = 10;

// Exemplo simples com if e else
if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else {
    console.log("O número não está entre 0 e 5."); // Executado caso o if seja falso
}

// Exemplo com múltiplos else if
if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
    console.log("O número está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
    console.log("O número está entre 9 e 11."); // O primeiro bloco verdadeiro executa e para a cadeia
} else {
    console.log("O numero não está entre 0 e 11.");
}
```

# Aula 25 - Operação Ternária

Nesta aula, aprendemos a utilizar o operador ternário, uma alternativa concisa ao uso de `if/else` para atribuição de valores condicionais:

- **Sintaxe**: `condição ? valor_se_verdadeiro : valor_se_falso`
- **Uso ideal**: Indicado para simplificar códigos de decisões simples e atribuições diretas baseadas em uma condição booleana.

Exemplos de código:
```javascript
const pontuacaoUser = 1000;
// Condição ? Caso Verdadeiro : Caso Falso
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUser); // Exibe: 'Usuário VIP'
```

# Aula 26 - Objeto Date

Nesta aula, aprendemos a trabalhar com datas e horas no JavaScript através do objeto integrado `Date`:

- **Instanciação**:
  - `new Date()`: Cria um objeto com a data e hora atual.
  - `new Date(ano, mes, dia, hora, minuto, segundo, milissegundo)`: Cria uma data específica.
- **Indexação de Meses**: No JavaScript, os meses começam do índice 0 (Janeiro) até 11 (Dezembro). Para exibir ou manipular o mês no formato convencional (1 a 12), deve-se somar 1.
- **Dia da Semana**: O método `.getDay()` retorna um número de 0 (Domingo) a 6 (Sábado).
- **Unix Epoch / Timestamp**: A contagem de tempo é baseada nos milissegundos transcorridos desde 01/01/1970. O comando `Date.now()` retorna o timestamp atual.

Métodos úteis:
- `getDate()`: Retorna o dia do mês.
- `getFullYear()`: Retorna o ano com 4 dígitos.
- `getMonth()`: Retorna o mês (0-11).
- `getHours()`: Retorna as horas (0-23).
- `getMinutes()`: Retorna os minutos.
- `getSeconds()`: Retorna os segundos.
- `getMilliseconds()`: Retorna os milissegundos.
- `getDay()`: Retorna o dia da semana.

Exemplos de código:
```javascript
// Cria uma data específica: 28/02/2019 às 14:30:27
const data = new Date(2019, 1, 28, 14, 30, 27); 
console.log(data.toString()); 

console.log('dia', data.getDate());
console.log('ano', data.getFullYear());
console.log('mes', data.getMonth() + 1); // Soma 1 para ajustar
console.log('hora', data.getHours());
console.log('minuto', data.getMinutes());
console.log('segundo', data.getSeconds());
console.log('milissegundo', data.getMilliseconds());
console.log('dia da semana', data.getDay()); // 4 (Quinta-feira)

console.log(Date.now()); // Retorna o timestamp atual em milissegundos
const data2 = new Date(1785267986461); // Cria data a partir do timestamp
console.log(data2.toString());
```

# Aula 27 - Switch/Case

Nesta aula, conhecemos a estrutura condicional `switch/case`, indicada para simplificar múltiplos fluxos condicionais baseados no valor de uma única variável:

- **Estrutura**: Compara o valor de uma expressão com diferentes cláusulas `case`.
- **Palavra-chave `break`**: É fundamental para interromper a execução do bloco condicional assim que o caso correspondente for executado. Se omitido, o código continua executando os casos subsequentes (`fall-through`).
- **Cláusula `default`**: Opcional, funciona de forma similar ao `else`, sendo executada se nenhum dos casos anteriores for correspondido.

Exemplos de código:
```javascript
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
```

# Aula 28 - Mais diferenças entre var, let e const

Nesta aula, revisamos em detalhes e aprofundamos as diferenças de escopo e comportamento entre as formas de declaração de variáveis:

- **Escopo**:
  - `let` e `const` possuem **escopo de bloco** (delimitado por `{ ... }`). Uma nova variável pode ser declarada com o mesmo nome dentro de um bloco interno sem interferir na variável do bloco externo.
  - `var` possui **escopo de função** ou global. Se declarada em blocos condicionais ou loops, ela vaza o escopo desses blocos e afeta o escopo pai (global ou da função).
- **Redeclaração**:
  - `var` permite que uma variável com o mesmo nome seja declarada novamente no mesmo escopo.
  - `let` e `const` geram erro ao tentar redeclarar no mesmo escopo.
- **Reatribuição**:
  - `let` e `var` permitem reatribuir valores.
  - `const` proíbe qualquer tentativa de reatribuição direta.
- **Hoisting (Içamento)**:
  - Variáveis do tipo `var` sofrem hoisting, o que significa que sua declaração é içada para o topo do escopo, sendo inicializadas com o valor `undefined`. Isso permite que a variável seja chamada antes da linha de sua declaração no código sem gerar erro de referência.
  - `let` e `const` não inicializam até sua linha de execução real ser processada.

Exemplos de código:
```javascript
let nome = 'Eloisa';
var nome2 = 'Ravena';

if (true) {
    let nome = 'Amora'; // Cria uma variável diferente no escopo do bloco
    var nome2 = 'Shuri'; // Redeclara e substitui o valor no escopo da função/global
    console.log(nome, nome2); // 'Amora' 'Shuri'
}
console.log(nome, nome2); // 'Eloisa' 'Shuri'

// Exemplo de Hoisting com var
console.log(varNaoDec); // Exibe: undefined (não dá erro de execução)
var varNaoDec = 'var Nao Declarado';
```

# Aula 29 - Atribuição via Desestruturação (Arrays)

Nesta aula, aprendemos o conceito de desestruturação (*destructuring assignment*) em arrays, facilitando a extração de dados e a atribuição para múltiplas variáveis:

- **Desestruturação básica**: Permite atribuir os elementos de um array ordenadamente para variáveis individuais indicadas entre colchetes.
- **Operador Rest (`...`)**: Pode ser utilizado para capturar os elementos restantes do array em um novo array.
- **Ignorar Elementos**: Podemos ignorar elementos do array deixando espaços em branco separados por vírgula na desestruturação (ex: `const [um, , tres] = array`).
- **Arrays Multidimensionais**: A sintaxe permite aninhamento para realizar a desestruturação e extração direta de valores em arrays de arrays.

Exemplos de código:
```javascript
// Atribuição e Permutação
let a = 'A';
let b = 'B';
let c = 'C';
const abc = [b, c, a];
[a, b, c] = abc; // a = 'B', b = 'C', c = 'A'
console.log(a, b, c);

// Extração básica e operador Rest
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro, segundo); // 1 2
console.log(resto); // [3, 4, 5, 6, 7, 8, 9]

// Pulando elementos
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco); // 1 3 5

// Desestruturação de Array Multidimensional
const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [ , [ , , seis]] = numeros2; // Pula a primeira lista, pula os dois primeiros elementos da segunda lista
console.log(seis); // 6
```

# Aula 30 - Atribuição via Desestruturação (Objetos)

Nesta aula, aprendemos a extrair propriedades de objetos e atribuí-las a variáveis com uma sintaxe mais curta:

- **Desestruturação básica**: Os nomes entre chaves procuram propriedades com os mesmos nomes no objeto.
- **Propriedade inexistente**: Quando a propriedade solicitada não existe, a variável recebe `undefined`.
- **Renomeação**: A sintaxe `propriedade: novoNome` permite guardar o valor em uma variável com outro nome.
- **Desestruturação aninhada**: Permite retirar valores de objetos que estão dentro de outros objetos.
- **Operador Rest (`...`)**: Reúne em um novo objeto as propriedades que não foram extraídas anteriormente.

Exemplo:
```javascript
const pessoa = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
};

const { nome, idade, cidade } = pessoa;
console.log(nome, idade, cidade); // Eloisa 20 undefined

const { nome: primeiroNome } = pessoa;
console.log(primeiroNome); // Eloisa

const {
    endereco: { rua, numero }
} = pessoa;
console.log(rua, numero); // Rua A 123

const { sobrenome, ...resto } = pessoa;
console.log(resto); // nome, idade e endereco
```

# Aula 31 - For Clássico

Nesta aula, aprendemos a utilizar o laço `for` para repetir um bloco de código enquanto uma condição for verdadeira.

A estrutura possui três partes:

1. **Inicialização**: Executada uma vez antes da primeira repetição.
2. **Condição**: Verificada antes de cada repetição. O laço continua enquanto ela for verdadeira.
3. **Atualização**: Executada ao final de cada repetição, normalmente para incrementar ou decrementar o contador.

Sintaxe:
```javascript
for (inicializacao; condicao; atualizacao) {
    // Código repetido
}
```

Exemplos:
```javascript
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const tipo = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`${i} é ${tipo}`);
}

const frutas = ['Maçã', 'Banana', 'Uva', 'Pera'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`);
}
```

Ao percorrer um array, a condição normalmente deve ser `i < array.length`. Usar `i <= array.length` cria uma repetição a mais e tenta acessar uma posição inexistente, cujo valor será `undefined`.

# Aula 32 - DOM e Criação de Elementos

Nesta aula, aprendemos que o DOM (*Document Object Model*) representa o documento HTML como uma árvore de objetos que o JavaScript pode consultar e modificar:

- **`document`**: Representa o documento HTML carregado.
- **Árvore do DOM**: O documento contém o elemento `<html>`, que possui `<head>` e `<body>` como filhos. Os demais elementos formam novos níveis dessa árvore.
- **`document.querySelector('seletor')`**: Retorna o primeiro elemento que corresponde ao seletor CSS informado ou `null` quando não encontra nenhum.
- **`document.createElement('tag')`**: Cria um novo elemento HTML em memória. Ele ainda não aparece na página.
- **`document.createTextNode('texto')`**: Cria um nó de texto em memória.
- **`elementoPai.appendChild(elementoFilho)`**: Coloca um nó no final da lista de filhos de outro elemento. É nesse momento que um elemento criado pode ser inserido na árvore da página.

Exemplo:
```javascript
const container = document.querySelector('.container');
const div = document.createElement('div');
const paragrafo = document.createElement('p');
const texto = document.createTextNode('Frase criada com JavaScript');

paragrafo.appendChild(texto); // O texto passa a ser filho do parágrafo
div.appendChild(paragrafo);   // O parágrafo passa a ser filho da div
container.appendChild(div);   // A div é inserida no elemento da página
```

Também podemos combinar arrays, objetos, desestruturação e repetição para criar vários elementos:

```javascript
const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' }
];

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const elemento = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);

    elemento.appendChild(textoCriado);
    div.appendChild(elemento);
}
```

# Aula 33 - For In

Nesta aula, aprendemos a utilizar `for...in` para percorrer os índices enumeráveis de um array ou as chaves enumeráveis de um objeto:

- Em **arrays**, a variável do laço recebe os índices.
- Em **objetos**, a variável do laço recebe os nomes das propriedades.
- A notação de colchetes, como `objeto[chave]`, permite acessar uma propriedade usando o valor guardado em uma variável.

Exemplos:
```javascript
const frutas = ['Pera', 'Maçã', 'Uva'];

for (const indice in frutas) {
    console.log(indice);         // 0, 1, 2
    console.log(frutas[indice]); // Pera, Maçã, Uva
}

const pessoa = {
    nome: 'Eloisa',
    sobrenome: 'Reis',
    idade: 20
};

for (const chave in pessoa) {
    console.log(chave);         // nome, sobrenome, idade
    console.log(pessoa[chave]); // valor de cada propriedade
}
```

Quando o objetivo for obter diretamente os valores de um array, geralmente `for...of` é mais simples.

# Aula 34 - For Of e forEach

Nesta aula, aprendemos outras formas de percorrer valores iteráveis, como arrays e strings:

- **Iterável**: Valor que pode fornecer seus itens um de cada vez. Arrays e strings são exemplos de iteráveis.
- **`for...of`**: Percorre diretamente os valores de um iterável, sem precisar acessar cada posição pelo índice.
- Objetos comuns não são iteráveis diretamente com `for...of`.
- **`forEach()`**: Método de arrays que executa uma função uma vez para cada elemento.
- A função passada ao `forEach()` pode receber, nesta ordem, o valor atual, o índice e o array completo. Essa função é uma **callback**, pois é entregue a outro método para ser chamada por ele.

Exemplos:
```javascript
const nomes = ['Eloisa Reis', 'Ravena'];

for (const nome of nomes) {
    console.log(nome); // Retorna cada valor
}

for (const letra of 'JavaScript') {
    console.log(letra); // Retorna uma letra por vez
}

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});
```

Resumo das estruturas estudadas:

- **`for` clássico**: Oferece controle sobre inicialização, condição e atualização.
- **`for...in`**: Retorna índices de arrays ou chaves de objetos.
- **`for...of`**: Retorna os valores de iteráveis.
- **`forEach()`**: Percorre um array executando uma callback para cada elemento.

# Aula 35 - While e Do While

Nesta aula, aprendemos a utilizar `while` e `do...while` para repetir um bloco de código quando não sabemos antecipadamente quantas repetições serão necessárias:

- **`while`**: Verifica a condição antes de executar o bloco. Se a condição começar falsa, o bloco não será executado nenhuma vez.
- **`do...while`**: Executa o bloco primeiro e verifica a condição depois. Por isso, o bloco sempre será executado pelo menos uma vez.
- **Variável de controle**: Deve ser alterada dentro do laço para que, em algum momento, a condição se torne falsa.
- **Laço infinito**: Acontece quando a condição nunca se torna falsa. É importante garantir uma forma de encerrar a repetição.

Sintaxe:
```javascript
while (condicao) {
    // Código repetido
}

do {
    // Código repetido
} while (condicao);
```

Exemplos:
```javascript
let controle = 0;

while (controle <= 3) {
    console.log(controle);
    controle++;
}

function random(min, max) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

let numeroAleatorio;

do {
    numeroAleatorio = random(1, 50);
    console.log(numeroAleatorio);
} while (numeroAleatorio !== 10);
```

# Aula 36 - Break e Continue

Nesta aula, aprendemos a controlar a execução dos laços de repetição com `break` e `continue`:

- **`continue`**: Interrompe somente a repetição atual e passa para a próxima. O código que estiver abaixo dele dentro do laço não será executado nessa repetição.
- **`break`**: Encerra imediatamente o laço de repetição.
- Essas palavras podem ser utilizadas em estruturas como `for`, `for...in`, `for...of`, `while` e `do...while`.

Exemplo:
```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const numero of numeros) {
    if (numero === 2 || numero === 5) {
        continue; // Pula apenas os números 2 e 5
    }

    console.log(numero);

    if (numero === 7) {
        break; // Encerra o laço ao chegar no número 7
    }
}
```

# Aula 37 - Tratando e Lançando Erros com Try, Catch e Throw

Nesta aula, aprendemos a capturar erros de execução e a lançar erros quando uma função recebe valores inválidos:

- **`try`**: Contém o código que será tentado e que pode gerar um erro.
- **`catch`**: É executado quando ocorre um erro dentro do `try`. O parâmetro do `catch` recebe o objeto de erro.
- **`throw`**: Interrompe a execução atual e lança um valor como erro, transferindo o controle para um `catch` compatível.
- **Objetos de erro**: `Error`, `ReferenceError` e `TypeError` são tipos de erro que podem ser criados com `new` e uma mensagem explicativa.
- Para o usuário, normalmente é melhor apresentar uma mensagem amigável em vez de exibir diretamente os detalhes internos do erro.

Exemplo:
```javascript
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', '2'));
} catch (erro) {
    console.log('Não foi possível realizar a soma.');
}
```

# Aula 38 - Try, Catch e Finally

Nesta aula, continuamos o tratamento de erros e conhecemos o bloco `finally`:

- **`finally`**: É executado após o `try` e o `catch`, independentemente de ter ocorrido um erro.
- É útil para executar uma finalização que deve acontecer tanto em caso de sucesso quanto em caso de falha.
- **`TypeError`**: Pode representar um valor recebido com um tipo diferente do esperado.
- **`instanceof Date`**: Verifica se um valor é uma instância criada a partir de `Date`.
- **`toLocaleTimeString()`**: Formata apenas o horário de uma data de acordo com uma localidade e com as opções informadas.

Exemplo:
```javascript
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    console.log(retornaHora(new Date()));
} catch (erro) {
    console.log('Erro ao obter o horário.');
} finally {
    console.log('Finalizando...');
}
```

# Aula 39 - setInterval e setTimeout

Nesta aula, aprendemos a agendar a execução de funções utilizando temporizadores:

- **`setInterval(funcao, tempo)`**: Executa uma função repetidamente, respeitando um intervalo de tempo.
- **`setTimeout(funcao, tempo)`**: Executa uma função uma única vez após o tempo informado.
- O tempo é informado em **milissegundos**. Por exemplo, `1000` milissegundos correspondem a 1 segundo.
- Os temporizadores retornam um identificador que pode ser armazenado em uma variável.
- **`clearInterval(identificador)`**: Encerra as repetições iniciadas por `setInterval()`.
- As funções entregues aos temporizadores são callbacks, pois serão chamadas posteriormente por eles.

Exemplo:
```javascript
function mostraHora() {
    const data = new Date();
    return data.toLocaleTimeString('pt-BR', { hour12: false });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);
```

# Exercícios - Conhecimentos apresentados apenas nos exercícios

Este tópico reúne exclusivamente conceitos utilizados nas atividades da pasta `curso_fullstack/exercicios`, mas que não foram explicados nos outros tópicos desta base de conhecimento.

Todos os conceitos ainda não explicados que aparecerem nos exercícios atuais ou em exercícios criados futuramente deverão ser acrescentados neste tópico. Um conteúdo não deverá ser incluído aqui quando já possuir explicação em outro tópico da base.

## Seleção de Vários Elementos e Manipulação de Estilos no DOM

O exercício 10 utiliza recursos adicionais para selecionar vários elementos e consultar ou alterar seus estilos:

- **`elemento.querySelector('seletor')`**: A busca também pode ser feita a partir de um elemento específico. Nesse caso, somente os seus descendentes são procurados.
- **`querySelectorAll('seletor')`**: Retorna todos os elementos que correspondem ao seletor CSS informado.
- **`NodeList`**: É a coleção retornada por `querySelectorAll()`. Ela pode ser percorrida com `for...of`.
- **`getComputedStyle(elemento)`**: Retorna os estilos finais calculados pelo navegador para o elemento, incluindo regras vindas do CSS.
- **`elemento.style`**: Permite ler ou alterar os estilos inline de um elemento. As propriedades CSS com hífen são escritas em camelCase no JavaScript, como `backgroundColor`.

Exemplo:
```javascript
const paragrafos = document.querySelector('.paragrafos');
const listaDeParagrafos = paragrafos.querySelectorAll('p');
const estilosDoBody = getComputedStyle(document.body);
const corDoFundo = estilosDoBody.backgroundColor;

for (const paragrafo of listaDeParagrafos) {
    paragrafo.style.backgroundColor = corDoFundo;
    paragrafo.style.color = '#fff';
}
```

## Método split das Strings

O método `split()` divide uma string em partes e retorna um array:

- **`split(separador)`**: O separador informa em qual ponto a string será dividida.
- **`split(' ')`**: Separa uma frase a cada espaço, gerando um array de palavras.
- **`split('')`**: Separa todos os caracteres da string.
- O método não modifica a string original.

Exemplos:
```javascript
const nome = 'Eloisa de Castro Reis';

const palavras = nome.split(' ');
console.log(palavras); // ['Eloisa', 'de', 'Castro', 'Reis']

const letras = nome.split('');
console.log(letras); // ['E', 'l', 'o', 'i', 's', 'a', ...]
```

Quando um array é colocado diretamente em uma Template String, seus elementos são convertidos em texto e separados por vírgulas:

```javascript
console.log(`${nome.split(' ')}`); // Eloisa,de,Castro,Reis
```

## Conversão Booleana com Dupla Negação

A dupla negação `!!` converte um valor para o tipo booleano:

- O primeiro `!` converte o valor para booleano e inverte o resultado.
- O segundo `!` inverte novamente.
- `!!valor` produz o mesmo resultado de `Boolean(valor)`.

Exemplos:
```javascript
console.log(!!1);         // true
console.log(!!0);         // false
console.log(!!'Eloisa');  // true
console.log(!!'');        // false
console.log(!!null);      // false
```

Quando a expressão já é uma comparação, ela já retorna `true` ou `false` e não precisa de `!!`:

```javascript
const numero = 10;
const inteiro = Math.round(numero) === numero;
```

## Acessos Adicionais ao DOM e Seleção por ID

Além dos recursos apresentados na Aula 32, os exercícios utilizam estas formas de acesso:

- **`document.body`**: Representa diretamente o elemento `<body>` da página.
- **`window.document`**: Forma completa de acessar o documento. No navegador, normalmente utilizamos apenas `document`.
- **`document.getElementById('id')`**: Procura um elemento pelo atributo `id` e retorna `null` quando não o encontra.

Exemplo:
```javascript
const titulo = document.getElementById('titulo');
console.log(document.body);
```

O atributo `id` deve ser único na página para identificar corretamente um elemento.

## innerHTML e value

Essas propriedades permitem ler ou alterar dados dos elementos:

- **`innerHTML`**: Lê ou altera o conteúdo HTML interno, interpretando tags.
- **`value`**: Obtém ou altera o valor de campos de formulário, como `<input>`.
- **`innerHTML +=`**: Recria o conteúdo existente acrescentando o novo conteúdo ao final.

Exemplos:
```javascript
const resultado = document.querySelector('.resultado');

resultado.innerHTML = '<strong>Resultado</strong>';
resultado.innerHTML += '<p>Novo resultado</p>';

const nome = document.querySelector('.nome');
console.log(nome.value);
```

Valores obtidos de elementos `<input>` são strings. Para utilizá-los em cálculos, é necessário convertê-los:

```javascript
const campoPeso = document.querySelector('.peso');
const peso = Number(campoPeso.value);
```

Como `innerHTML` interpreta tags, ele não deve receber conteúdo desconhecido sem validação.

## Formulários HTML

Formulários agrupam campos que recebem informações do usuário:

- **`<form>`**: Representa o formulário.
- **`<input>`**: Cria um campo de entrada.
- **`<label>`**: Cria uma descrição para um campo.
- **`<button type="submit">`**: Envia o formulário.
- **`action`**: Indica para onde os dados serão enviados.
- **`method="get"`**: Envia os dados pela URL.
- **`method="post"`**: Envia os dados no corpo da requisição.
- **`class`**: Pode ser reutilizada em vários elementos e serve para seleção no CSS e no JavaScript.
- **`id`**: Identifica um único elemento e também pode ligá-lo a um `<label>` por meio do atributo `for`.

Exemplo:
```html
<form class="form" action="/cadastro" method="post">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>
```

## Eventos, addEventListener e preventDefault

Eventos representam ações que acontecem na página, como cliques, digitação ou envio de um formulário:

- **`addEventListener()`**: Registra uma função que será executada quando o evento ocorrer.
- **`submit`**: Evento disparado quando um formulário é enviado.
- **Objeto `event`**: Contém informações sobre o evento ocorrido.
- **`event.preventDefault()`**: Impede o comportamento padrão do navegador. Em um formulário, evita o envio imediato e o recarregamento da página.

Sintaxe:
```javascript
elemento.addEventListener('nomeDoEvento', funcao);
```

Exemplo:
```javascript
const form = document.querySelector('.form');

function recebeEvento(event) {
    event.preventDefault();
    console.log('Formulário enviado');
}

form.addEventListener('submit', recebeEvento);
```

## Escopo Léxico e Closure

Uma função interna pode acessar variáveis declaradas na função externa. Esse comportamento é chamado de **escopo léxico**:

```javascript
function externa() {
    const nome = 'Eloisa';

    function interna() {
        console.log(nome);
    }

    interna();
}

externa();
```

Uma **closure** acontece quando uma função mantém acesso ao escopo em que foi criada, mesmo sendo executada posteriormente:

```javascript
function configurarCadastro() {
    const pessoas = [];

    function adicionarPessoa(nome) {
        pessoas.push({ nome });
        console.log(pessoas);
    }

    return adicionarPessoa;
}

const adicionar = configurarCadastro();
adicionar('Eloisa');
adicionar('Ravena');
```

Em um evento de formulário, a callback mantém acesso ao formulário, ao resultado e ao array declarados na função externa. Assim, o array pode continuar armazenando pessoas entre diferentes envios.

## Chamada de Função e IIFE

Declarar uma função e chamá-la na linha seguinte é uma chamada normal:

```javascript
function escopo() {
    console.log('Executando');
}

escopo();
```

Uma IIFE (*Immediately Invoked Function Expression*) é uma expressão de função criada e executada imediatamente:

```javascript
(function () {
    console.log('Executada imediatamente');
})();
```

Também pode ser escrita como Arrow Function:

```javascript
(() => {
    console.log('Executada imediatamente');
})();
```

## Estrutura Básica do HTML Utilizado

As páginas dos exercícios utilizam os seguintes elementos e configurações:

- **`<!DOCTYPE html>`**: Informa que o documento usa HTML5.
- **`<html lang="pt-br">`**: Elemento principal e idioma da página.
- **`<head>`**: Guarda configurações, metadados, título e importações.
- **`<body>`**: Guarda o conteúdo visível da página.
- **`<meta charset="UTF-8">`**: Permite utilizar acentos e caracteres especiais.
- **Viewport**: Ajusta a exibição da página em dispositivos móveis.
- **`<link rel="stylesheet">`**: Importa um arquivo CSS externo.
- **`href`**: Indica o endereço de um recurso, como um arquivo CSS.

Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Minha página</title>
</head>
<body>
    <section class="container">
        <h1 id="titulo">Título</h1>
    </section>
</body>
</html>
```

## Fundamentos do CSS Utilizado

Os arquivos CSS dos exercícios utilizam seletores, variáveis, pseudo-classes e propriedades de estilização:

- **Seletor de elemento**: Seleciona uma tag, como `body` ou `form`.
- **Seletor de classe**: Começa com ponto, como `.container`.
- **Seletor universal `*`**: Seleciona todos os elementos.
- **Seletores agrupados**: Usam vírgula para aplicar as mesmas regras a vários seletores.
- **`elemento descendente`**: Seleciona elementos que estão dentro de outro elemento, como `form input`.
- **`:hover`**: Aplica estilos quando o mouse está sobre o elemento.
- **`:focus`**: Aplica estilos quando o elemento recebe foco.
- **`@import`**: Importa outro arquivo CSS, como uma fonte externa.
- **`:root`**: Representa o elemento raiz da página e é utilizado para declarar variáveis CSS globais.
- **Variáveis CSS**: São declaradas com `--nome` e acessadas usando `var(--nome)`.

Exemplo:
```css
:root {
    --primary-color: rgb(17, 86, 102);
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: var(--primary-color);
}

.container {
    max-width: 640px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
}

form input:focus {
    outline: 1px solid var(--primary-color);
}

form button:hover {
    background: black;
}
```

Propriedades utilizadas nos exercícios:

- **`margin`**: Espaço externo do elemento.
- **`padding`**: Espaço interno do elemento.
- **`width` e `height`**: Largura e altura.
- **`max-width`**: Limita a largura máxima.
- **`background`**: Define o fundo.
- **`color`**: Define a cor do texto.
- **`border`**: Define a borda.
- **`border-radius`**: Arredonda os cantos.
- **`display: block`**: Faz o elemento ocupar uma linha própria.
- **`box-sizing: border-box`**: Inclui bordas e espaçamentos internos no tamanho definido.
- **`font-family`**: Define a família da fonte.
- **`font-size`**: Define o tamanho da fonte.
- **`font-weight`**: Define a espessura da fonte.
- **`line-height`**: Define a altura da linha.
- **`cursor: pointer`**: Exibe o cursor de clique.

## Formatação Local de Datas com toLocaleString

O método `toLocaleString()` converte uma data para texto seguindo as regras de um idioma e de uma região:

- **`'pt-BR'`**: Solicita a formatação utilizada no Brasil.
- O segundo argumento é um objeto com as opções de formatação.
- `dateStyle` define o nível de detalhes da data.
- `timeStyle` define o nível de detalhes do horário.

Exemplo:
```javascript
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

console.log(data.toLocaleString('pt-BR', opcoes));
// Exemplo: segunda-feira, 17 de agosto de 2026 às 14:30
```

Esse método pode substituir a criação manual dos nomes dos dias da semana e dos meses com vários blocos `switch/case`.

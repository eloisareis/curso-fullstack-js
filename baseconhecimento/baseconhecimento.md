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
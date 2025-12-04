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
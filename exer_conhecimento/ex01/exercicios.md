# Exercícios de Fixação - Curso Fullstack JS
## Parte 1: Perguntas Teóricas (Múltipla Escolha e Resposta Curta)

### Aula 01 a 04 - Introdução e Configuração
1. **Qual a melhor prática para posicionar a tag `<script>` em um arquivo HTML e por quê?**<br>
   a) No `<head>`, para carregar antes de tudo. <br>
   b) No início do `<body>`, para garantir que o script roda primeiro.<br>
   c) No final do `<body>`, logo antes do fechamento `</body>`, para não bloquear o carregamento visual da página.<br>
   d) Fora da tag `<html>`.<br>

2. **Qual a diferença entre um script interno e um externo?**

### Aula 05 a 07 - Variáveis e Constantes
3. **Analise o código abaixo e diga o que acontecerá:**
   ```javascript
   const nome;
   nome = "João";
   console.log(nome);
   ```
   a) Exibirá "João". <br>
   b) Erro: `Missing initializer in const declaration`. <br>
   c) Exibirá `undefined`. <br>

4. **Por que o uso de `var` não é recomendado moderna, preferindo-se `let`?**

5. **Verdadeiro ou Falso:** Uma variável declarada com `let` pode ser redeclarada no mesmo escopo (ex: `let a = 1; let a = 2;`), enquanto `var` não pode.

### Aula 08 a 09 - Tipos de Dados e Operadores
6. **Qual o resultado da operação abaixo?**
   ```javascript
   const num1 = "10";
   const num2 = 5;
   console.log(num1 + num2);
   ```
   a) 15 <br>
   b) "105" <br>
   c) NaN <br>
   d) Erro <br>

7. **Qual a diferença entre `i++` e `++i` quando usados dentro de um `console.log`?**

### Aula 10 - Interação com Usuário
8. **O que a função `prompt()` retorna quando o usuário digita o número 10 e clica em OK?** <br>
   a) O número `10` (tipo Number). <br>
   b) A string `"10"` (tipo String). <br>
   c) `undefined`. <br>

### Aula 11 - Strings
9. **Como você faria para exibir a última letra da string `const texto = "Javascript";` sem contar manualmente os caracteres?**

---

## Parte 2: Exercícios Práticos (Codificação)

Crie um arquivo chamado `exercicios.js` para resolver os desafios abaixo:

### Desafio 1: Variaveis e Tipos
1. Crie uma constante com seu nome completo.
2. Crie uma variável `let` com sua idade.
3. Crie uma template string que exiba a frase: "Olá, meu nome é [NOME] e tenho [IDADE] anos.".

### Desafio 2: Operações Matemáticas
1. Declare duas variáveis com números a sua escolha.
2. Exiba no console a soma, subtração, multiplicação e divisão entre elas.
3. Exiba o resto da divisão do primeiro número pelo segundo.

### Desafio 3: Interação e Conversão (Para rodar no navegador)
*Nota: Este exercício deve ser feito em um arquivo HTML ou no console do navegador.*
1. Peça ao usuário para digitar um número usando `prompt`.
2. Peça ao usuário para digitar outro número usando `prompt`.
3. Converta as entradas para **Number** (pois o prompt retorna string).
4. Some os dois números e mostre o resultado em um `alert` com a mensagem: "O resultado da soma é: [RESULTADO]".

### Desafio 4: Manipulação de Strings
Dada a string: `const frase = "  Estudar JavaScript é muito legal!  ";`
1. Remova os espaços em branco do início e do fim (pesquise sobre `trim()` se necessário, ou use o que aprendeu, mas `trim` é uma dica extra!). *Se não souber `trim`, tente fatiar a string para pegar apenas o texto.* (Dica baseada na aula 11: Use `slice`).
2. Exiba o tamanho total da string original.
3. Substitua a palavra "legal" por "incrível".
4. Exiba a frase inteira em letras maiúsculas.
5. Use o `slice` para extrair apenas a palavra "JavaScript".

---

## Gabarito / Respostas Esperadas

<details>
<summary>Clique para ver as respostas da Parte 1</summary>

1. **C**.
2. **Interno**: código dentro da tag `<script>`. **Externo**: código em arquivo `.js` separado (melhor organização).
3. **B**. Constantes devem ser inicializadas na declaração.
4. `var` permite redeclaração (o que pode causar bugs) e tem escopo de função/global, enquanto `let` tem escopo de bloco e não permite redeclaração no mesmo escopo.
5. **Falso**. O inverso é verdadeiro: `var` permite redeclaração, `let` não.
6. **B**. Ocorre concatenação pois um dos valores é string.
7. `i++` (pós-fixado) usa o valor atual e incrementa depois. `++i` (pré-fixado) incrementa primeiro e usa o novo valor.
8. **B**. O `prompt` sempre retorna string.
9. `texto[texto.length - 1]` ou `texto.slice(-1)`.

</details>

<details>
<summary>Clique para ver as respostas da Parte 2 (Sugestões)</summary>

**Desafio 1**
```javascript
const nome = "Seu Nome";
let idade = 25;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
```

**Desafio 2**
```javascript
const n1 = 10;
const n2 = 3;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
```

**Desafio 3**
```javascript
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const resultado = num1 + num2;
alert(`O resultado da soma é: ${resultado}`);
```

**Desafio 4**
```javascript
const frase = "  Estudar JavaScript é muito legal!  ";
console.log(frase.length); // Tamanho original
const fraseSemEspaco = frase.slice(2, -2); // Exemplo manual com slice, ou frase.trim()
console.log(frase.replace("legal", "incrível"));
console.log(frase.toUpperCase());
// Para extrair JavaScript. Precisamos saber os índices.
// "  Estudar " -> 0 a 9 (considerando 2 espaços iniciais). J começa no 10.
// JavaScript tem 10 letras.
console.log(frase.slice(10, 20)); 
```
</details>

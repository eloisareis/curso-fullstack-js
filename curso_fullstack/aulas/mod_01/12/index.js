// aula 12 - Mais sobre Strings

console.log("Um \"texto\"");
console.log("Um \\texto");

// string são indexadas - iteravel
// cada cactere de uma string tem um index que começa pelo 0
//          012345678910
let strg = 'Eloisa Reis';

console.log(strg[7]);
console.log(strg.charAt(7));
console.log(strg.concat(" a mais linda."));
console.log(`${strg} a mais linda.`);
console.log(strg.indexOf('reis')); // -1 = undefined - não existe
console.log(strg.indexOf('i', 7));
console.log(strg.lastIndexOf('E'));
console.log(strg.match(/[a-z]/g));
console.log(strg.search(/R/));
console.log(strg.replace('Eloisa', 'Ravena')); // ou /Eloisa/
// para substituir por exemplo uma letra, e vc quer substituir todas que estiver na variavel se usa -> /'letra/frase'/g
console.log(strg.length);
console.log(strg.slice(7,11));
console.log(strg.slice(-4)); 
console.log(strg.toUpperCase());
console.log(strg.toLowerCase());
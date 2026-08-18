// aula 37 - Tratando e lançando erros (try, catch, throw) pt 1 

// try {
//     console.log(naoExiste); // ReferenceError: naoExiste is not defined
// } catch (err) {
//     console.log('naoExiste não existe');
//     console.log(err);
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números'); // pode ser apenas a mensagem com o throw('') mas pode ser tbm trow new Error e trow new ReferenceError
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', '2'));
} catch (err) {
    console.log(err); // não é ideal usar o console.log(err) para tratar o erro, é melhor usar o outra mensagem de erro, algo mais amigável para o usuário
}

// aula 38 - Trantando e lançando erros (try, catch, finally) pt 2

try {
    // Executa quando não há erros
    console.log('Executando...');
    // console.log(executanto);
} catch (e) {
    // Executa quando há erros
    console.log('Erro encontrado:', e);
} finally {
    // Sempre executa
    console.log('Finalizando...');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
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
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log('Erro encontrado');
} finally {
    console.log('Tenha um bom dia.');
}
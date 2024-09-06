// Função que calcula a sequência de Fibonacci até o número informado
function pertenceFibonacci(numero) {
    // Inicia os dois primeiros números da sequência
    let a = 0, b = 1;
    
    // Se o número for 0 ou 1, já pertence à sequência
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Calcula a sequência até encontrar um valor maior ou igual ao número informado
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    // Verifica se o número é igual ao último número da sequência calculada
    return b === numero;
}

// Exemplo de uso com entrada de dados via prompt ou número pré-definido
const numeroInformado = parseInt(prompt("Informe um número: "), 10);

// Verifica se o número pertence à sequência de Fibonacci e exibe a mensagem
if (pertenceFibonacci(numeroInformado)) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
}

//O número 13 pertence à sequência de Fibonacci.
//O número 15 não pertence à sequência de Fibonacci.
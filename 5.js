// Função que inverte a string
function inverterString(str) {
    let stringInvertida = '';
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// String de exemplo (pode ser definida no código ou inserida pelo usuário)
const stringOriginal = prompt("Informe uma string para inverter:");

// Exibe a string invertida
console.log("String original:", stringOriginal);
console.log("String invertida:", inverterString(stringOriginal));

// Exemplo de dados de faturamento diário em formato JSON
const faturamentoMensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },         // Fim de semana/feriado
    { "dia": 5, "valor": 0.0 },         // Fim de semana/feriado
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },         // Fim de semana/feriado
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 12, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 19, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 26, "valor": 0.0 },        // Fim de semana/feriado
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 23157.8912 },
    { "dia": 30, "valor": 25150.0811 }
];

// Função para calcular o menor e maior faturamento, média e número de dias com faturamento acima da média
function calcularFaturamento(faturamento) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let soma = 0;
    let diasComFaturamento = 0;

    // Calcular menor, maior valor e soma dos faturamentos válidos (maiores que 0)
    faturamento.forEach(dia => {
        if (dia.valor > 0) { // Ignora dias sem faturamento
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    // Calcula a média mensal
    const media = soma / diasComFaturamento;

    // Conta o número de dias com faturamento superior à média
    let diasAcimaDaMedia = 0;
    faturamento.forEach(dia => {
        if (dia.valor > media) {
            diasAcimaDaMedia++;
        }
    });

    // Retorna os resultados
    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        media: media,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

// Executa o cálculo
const resultado = calcularFaturamento(faturamentoMensal);

// Exibe os resultados
console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
console.log(`Média mensal: R$ ${resultado.media.toFixed(2)}`);
console.log(`Dias com faturamento superior à média: ${resultado.diasAcimaDaMedia}`);

//Menor valor de faturamento: R$ 373.78
//Maior valor de faturamento: R$ 48924.24
//Média mensal: R$ 20865.27
//Dias com faturamento superior à média: 10

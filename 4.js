// Definindo os valores de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calculando o valor total de faturamento
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);

// Calculando o percentual de representação de cada estado
const percentuais = {};
for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    percentuais[estado] = percentual;
}

// Exibindo os resultados
console.log("Percentual de representação por estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}

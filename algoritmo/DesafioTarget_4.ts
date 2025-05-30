/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
    • SP – R$67.836,43
    • RJ – R$36.678,66
    • MG – R$29.229,88
    • ES – R$27.165,48
    • Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

// Dados de faturamento por estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Calcular o total
let faturamentoTotal = 0;

faturamentoTotal = faturamentoTotal + faturamentoSP;
faturamentoTotal = faturamentoTotal + faturamentoRJ;
faturamentoTotal = faturamentoTotal + faturamentoMG;
faturamentoTotal = faturamentoTotal + faturamentoES;
faturamentoTotal = faturamentoTotal + faturamentoOutros;

// Calcular o percentual de cada estado
let percentualSP = (faturamentoSP / faturamentoTotal) * 100;
let percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
let percentualMG = (faturamentoMG / faturamentoTotal) * 100;
let percentualES = (faturamentoES / faturamentoTotal) * 100;
let percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Mostrar os resultados
console.log(`Percentual SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual Outros: ${percentualOutros.toFixed(2)}%`);
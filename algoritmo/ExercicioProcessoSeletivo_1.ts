/*
    Anos bissextos (2 pontos)

    No Cálculo Jurídico nós trabalhamos muito com cálculos da área do Direito Previdenciário, e atendendemos milhares de escritórios de advocacia no Brasil inteiro. Quando um advogado recebe um novo cliente a primeira pergunta a ser respondida é: quando o cliente pode se aposentar? Para determinar isso é necessário juntar vários dados para saber por quanto tempo o cliente contribui para o INSS, com qual valor, qual a idade dele etc.

    Numa das partes desse cálculo é necessário saber quantos dias existem em cada mês e em cada ano. Nesta questão desconsidere o uso de bibliotecas prontas como MomentJS pois precisamos de uma solução mais performática implementada "do zero".

    A lógica do cálculo de dias de cada mês e ano é a seguinte: - O mês de fevereiro tem 29 dias se: - o ano for divisível por 4 e; - exceção: se o ano for divisível por 100; - exceção da exceção: se o ano for divisível por 400; - por exemplo, os anos de 1992 e 1996 tem 29 dias em fevereiro, 1900 e 2100 não tem, mas 2000 tem. - De janeiro (1) a julho (7) os meses ímpares (1, 3, 5 e 7) tem 31 dias, enquanto os pares (4, 6) tem 30 dias (exceto fevereiro); - De agosto (8) a dezembro (12) os meses pares (8, 10, 12) tem 31 dias, enquanto os ímpares (9, 11) tem 30 dias. - Os anos de 365 dias são os em que fevereiro tem 28 dias, e os de 366 dias são os em que fevereiro tem 29 dias.

    Curiosidade: os meses de julho e agosto são compridos (tem 31 dias) como homenagem a Júlio César e Otávio Augusto, que foram emperadores do império romano há cerca de 2000 anos atrás. Eles eram parentes também.

    Para resolver esta questão edite o arquivo solution.ts. A contagem de pontos desta questão ocorrerá da seguinte forma:

    1 ponto por implementar getMonthDays() para retornar a quantidade de dias de um mês - o resultado deve estr entre 28 e 31;
    1 ponto por implementar getYearDays() para retornar a quantidade de dias de um ano - o resultado deve estar entre 365 e 366.
*/

export enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec }

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function getMonthDays(month: Month, year: number): number {
    // TODO: implementar a lógica para o retorno da quantidade de dias do mês
    if (month === Month.Feb) {
        return isLeapYear(year) ? 29 : 28;
    }

    // Janeiro (0) até Julho (6)
    if (month >= Month.Jan && month <= Month.Jul) {
        return month % 2 === 0 ? 31 : 30;
    }

    // Agosto (7) até Dezembro (11)
    return month % 2 === 0 ? 30 : 31;
}

export function getYearDays(year: number): number {
    // TODO: implementar a lógica para o retorno da quantidade de dias do ano
    return isLeapYear(year) ? 366 : 365;
}

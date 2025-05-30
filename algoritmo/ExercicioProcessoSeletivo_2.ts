/*
    Máscaras no formulário (3 pontos)

    Para o cadastro dos clientes do Cálculo Jurídico precisamos de um formulário com dados pessoais. Por isso nesta questão você deve adicionar máscaras de telefone e CPF no formulário que aparece na aba resultado. Para as máscaras trazerem uma boa experiência ao usuário foram determinados os seguintes requisitos:

    A máscara de CPF deve surgir progressivamente conforme o usuário digita, de forma que o cursor sempre fique no último caractere da string.
    Isso facilita o uso da tecla backspace pois o último caractere do lado direito é sempre um número, como no exemplo abaixo.

    -	-	-	-
    (vazio)	012	012.345	012.345.678
    0	012.3	012.345.6	012.345.678-9
    01	012.34	012.345.67	012.345.678-90


    A máscara do telefone só pode "saltar" quando houver o nono dígito:

    -	-	-	-
    (vazio)	(11) 9	(11) 9876	(11) 9876-543
    (1	(11) 98	(11) 9876-5	(11) 9876-5432
    (11	(11) 987	(11) 9876-54	(11) 98765-4321


    Para resolver esta questão edite o arquivo solution.ts. A contagem de pontos desta questão ocorrerá da seguinte forma:

    1 ponto por implementar filterDigits() de forma que o modelo do telefone o CPF só tenha dígitos (mantendo o tipo string), limitados a 11;
    1 ponto por implementar maskCpf() para ter uma máscara progressiva de CPF no formato XXX.XXX.XXX-XX;
    1 ponto por implementar maskPhone() para ter uma máscara progressiva de telefone no formato (XX) XXXX-XXXX (8 dígitos) e (XX) XXXXX-XXXX (9 dígitos);
    Obs.: não é necessário validar nenhum dado digitado nesta questão.
*/

// Essa função remove todos os caracteres que não são números da string recebida
// e limita o número de dígitos conforme o parâmetro maxDigits.
export function filterDigits(maxDigits: number, viewString: string): string {
    // Substitui qualquer caractere que não seja número por ''
    const digitsOnly = viewString.replace(/\D/g, '');

    // Retorna apenas os primeiros maxDigits dígitos
    return digitsOnly.slice(0, maxDigits);
}

// Aplica uma máscara de CPF no formato XXX.XXX.XXX-XX de forma progressiva
export function maskCpf(value: string): string {
    // Mantém apenas os números digitados (até 11)
    const digits = filterDigits(11, value);

    // Até 3 dígitos: ainda sem pontos
    if (digits.length <= 3)
        return digits;

    // De 4 a 6 dígitos: insere o primeiro ponto após o 3º dígito
    if (digits.length <= 6)
        return `${digits.slice(0, 3)}.${digits.slice(3)}`;

    // De 7 a 9 dígitos: insere dois pontos
    if (digits.length <= 9)
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;

    // De 10 a 11 dígitos: insere dois pontos e um traço
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

// Aplica uma máscara de telefone no formato:
// (XX) XXXX-XXXX  → se tiver 8 dígitos no número
// (XX) XXXXX-XXXX → se tiver 9 dígitos no número
export function maskPhone(value: string): string {
    // Mantém apenas os números (até 11 dígitos: 2 DDD + 9 número)
    const digits = filterDigits(11, value);

    // Até 2 dígitos: estamos começando a digitar o DDD
    if (digits.length <= 2)
        return `(${digits}`;

    // De 3 a 6 dígitos: DDD completo e começando o número
    if (digits.length <= 6)
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

    // De 7 a 10 dígitos: DDD e número parcialmente com traço
    if (digits.length <= 10)
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;

    // Com 11 dígitos: número com nono dígito (formato celular)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

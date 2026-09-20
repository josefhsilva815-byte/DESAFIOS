/*
    Dada uma matriz de entrada de sete números inteiros, representando 
    o tempo de uma semana, onde cada número inteiro é a quantidade de 
    horas gastas no seu telefone naquele dia, determine se é muito tempo 
    de tela com base nessas restrições:

    1 - Se algum dia tem 10 horas ou mais, é demais.
    2 - Se a média de quaisquer três dias seguidos for maior ou igual 
        a 8 horas, é demais.
    3 - Se a média dos sete dias for maior ou igual a 6 horas, é demais.
    
    TESTES:
    1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])  -> false
    2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])  -> false
    3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])  -> false
    4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) -> true
    5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) -> true
    6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])  -> true
    7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])  -> true
*/

function tooMuchScreenTime(hours) {
    const maisDe10Hrs = hours.some(d => d >= 10);
    const diasSeguidos = hours.map((d, i) => {
        const next = i + 1 === hours.length ? 0 : i + 1;
        const back = i - 1 < 0 ? hours.length - 1 : i - 1;
        return Math.floor((hours[back] + d + hours[next]) / 3)
    });
    const media3Dias = diasSeguidos.some(d => d >= 8);
    const media7Dias = Math.floor(hours.reduce((md, d) => md + d, 0) / 7) >= 6;

    return maisDe10Hrs || media3Dias || media7Dias
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]))
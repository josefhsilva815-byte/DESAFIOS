/*
    Dada uma matriz de números de pistas e uma matriz de células, 
    determine se as células satisfazem a pista do nonograma.

    1 - A pista é uma matriz de números que representam o comprimento 
        de células preenchidas consecutivas, em ordem. Por exemplo, uma 
        pista de[3, 2] significa que deve haver 3 células preenchidas 
        consecutivas seguidas por 2 células preenchidas consecutivas, 
        separadas por pelo menos uma célula vazia.
    2 - A linha é um vetor de 1 (preenchida) e 0 (vazia).

    TESTES:
    1. isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])                                  -> true
    2. isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])                                  -> false
    3. isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])                   -> false
    4. isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0])             -> true
    5. isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) -> true
    6. isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0])                   -> false
*/

function isValidNonogram(clue, cells) {
    const comprimentoCelula = [];
    let repNum = [];

    // Transformar 'clue' em um comprimento celular
    for (let i = 0; i < clue.length; i++) {
        if (i > 0) comprimentoCelula.push(0);
        const numCell = [];
        for (let j = clue[i]; j > 0; j--) {
            comprimentoCelula.push(1)
            numCell.push(1);
        }
        repNum.push(numCell);
    }

    // Comparar o comprimento celular com o 'cells'
    const saoIguais = (list, ref) => list.every((e, i) => e === ref[i])

    // Verificar se tem 0 separando as células
    // Verificar se o número de 1s for igual ao de 'clue'
    const contUns = () => {
        let cont = 0;
        const ums = [];
        cells.forEach((num, i) => {
            if (num) {
                cont++;
            }
            if ((!num && cont) || (num && i === cells.length - 1)) {
                ums.push(cont);
                cont = 0
            }
        })
        return ums
    }
    console.log(contUns())

    return saoIguais(contUns(), clue)
}

console.log(isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]));
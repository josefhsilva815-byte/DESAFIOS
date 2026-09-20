/*
    Dada uma matriz de inteiros de 1 an , inclusive, retorne 
    uma matriz de todos os inteiros ausentes entre 1 en (onden 
    é o maior número na matriz dada).

    1 - A matriz fornecida pode não estar classificada e pode conter duplicatas.
    2 - A matriz retornada deve estar em ordem crescente.
    3 - Se nenhum número inteiro estiver faltando, retorne uma matriz vazia.
    
    TESTES:
    1.  findMissingNumbers([1, 3, 5])                                                 -> [2, 4]
    2.  findMissingNumbers([1, 2, 3, 4, 5])                                           -> []
    3.  findMissingNumbers([1, 10])                                                   -> [2, 3, 4, 5, 6, 7, 8, 9]
    4.  findMissingNumbers([10, 1, 10, 1, 10, 1])                                     -> [2, 3, 4, 5, 6, 7, 8, 9]
    5.  findMissingNumbers([3, 1, 4, 1, 5, 9])                                        -> [2, 6, 7, 8]
    6.  findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) -> [11]
*/

function findMissingNumbers(arr) {
    const listNums = [];
    arr.forEach((n) => {
        if (!listNums.includes(n)) listNums.push(n);
    });
    listNums.sort((a, b) => a - b);

    const result = [];
    for (let x = listNums[0]; x < listNums[listNums.length - 1]; x++) {
        if (!listNums.includes(x)) {
            result.push(x)
        }
    }
    return result.sort((a, b) => a - b) || [];
}

console.log(findMissingNumbers([1, 3, 5])) // [2, 4]
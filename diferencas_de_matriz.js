/*
    Dadas duas matrizes com valores de strings, retorne uma nova matriz 
    contendo todos os valores que aparecem em apenas uma das matrizes.
    A matriz retornada deve ser classificada em ordem alfabética.
    
    TESTES:
    1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])                                  -> ["cherry"]
    2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])                                  -> ["cherry"]
    3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])                   -> ["eight", "four", "six", "two"]
    4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) -> ["five", "one", "seven", "three"]
    5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])                               -> ["freeCodeCamp", "rocks"]
*/

function arrayDiff(arr1, arr2) {
    const diferencas = [];

    diferencas.push(...arr1.filter(palavra => !arr2.includes(palavra)))
    diferencas.push(...arr2.filter(palavra => !arr1.includes(palavra)))

    return diferencas.sort();
}

arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])
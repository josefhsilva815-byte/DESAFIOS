/*
    Dada uma string que representa um numeral romano, retorne seu 
    valor inteiro.
    Os algarismos romanos consistem nos seguintes símbolos e valores:

    Símbolo	Valor:
        I - 1
        V - 5
        X - 10
        L - 50
        C - 100
        D - 500
        M - 1000

    Os numerais são lidos da esquerda para a direita. Se um numeral 
    menor aparecer antes de um maior, o valor será subtraído. Caso 
    contrário, valores são adicionados.
    
    TESTES:
    1. parseRomanNumeral("III")   -> 3
    2. parseRomanNumeral("IV")    -> 4
    3. parseRomanNumeral("XXVI")  -> 26
    4. parseRomanNumeral("XCIX")  -> 99
    5. parseRomanNumeral("CDLX")  -> 460
    6. parseRomanNumeral("DIV")   -> 504
    7. parseRomanNumeral("MMXXV") -> 2025
*/

function parseRomanNumeral(numeral) {
    const nums = numeral.split("");
    const valores = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (valores[nums[i]] < valores[nums[i + 1]]) {
            total += valores[nums[i + 1]] - valores[nums[i]]
            i++
        } else {
            total += valores[nums[i]]
        }
    }
    return total;
}

parseRomanNumeral("IV")
/*
    A sequência de Tribonacci é uma série de números onde cada número é a soma dos 
    três anteriores. Ao começar com0 ,0 e1 , os primeiros 10 números na 
    sequência são 0, 0, 1, 1, 2, 4, 7, 13, ..., 44.
    Dada uma matriz contendo os três primeiros números de uma sequência de Tribonacci 
    e um número inteiro representando o comprimento da sequência, retorne uma 
    matriz contendo a sequência do comprimento fornecido.

    1 - Sua função deve manipular sequências de qualquer comprimento 
        maior ou igual a zero.
    2 - Se o comprimento for zero, retorne uma matriz vazia.
    
    OBS: Os números iniciais fazem parte da sequência.
    
    TESTES:
    1. tribonacciSequence([0, 0, 1], 20)      -> [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]
    2. tribonacciSequence([21, 32, 43], 1)    -> [21]
    3. tribonacciSequence([0, 0, 1], 0)       -> []
    4. tribonacciSequence([10, 20, 30], 2)    -> [10, 20]
    5. tribonacciSequence([10, 20, 30], 3)    -> [10, 20, 30]
    6. tribonacciSequence([123, 456, 789], 8) -> [123, 456, 789, 1368, 2613, 4770, 8751, 16134]
*/

function tribonacciSequence(startSequence, length) {
    const sequencia = [...startSequence];
    const calculo = () => sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2] + sequencia[sequencia.length - 3];

    if (!length) { return [] }
    if (length <= sequencia.length) {
        return sequencia.slice(0, length)
    }

    while (sequencia.length < length) {
        sequencia.push(calculo())
    }

    return sequencia;
}

console.log(tribonacciSequence([0, 0, 1], 10))
// [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
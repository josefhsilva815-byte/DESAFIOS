/*
    1. Dada uma matriz de inteiros e uma matriz de operadores de 
    string, aplique as operações aos números sequencialmente da 
    esquerda para a direita. Repita as operações conforme necessário 
    até que todos os números sejam usados. Retorne o resultado final.
    
    EXEMPLO:
        Por exemplo, dados[1, 2, 3, 4, 5] e['+', '*'] , retornam o 
        resultado da avaliação 1 + 2 * 3 + 4 * 5 da esquerda para a 
        direita ignorando a ordem padrão das operações.

    Os operadores válidos são: + , - , * , / e % .
    
    TESTES:
    1 - evaluate([5, 6, 7, 8, 9], ['+', '-'])          -> 3
    2 - evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) -> 38
    3 - evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])    -> 60
    4 - evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])  -> 30
    5 - evaluate([33, 11, 29, 13], ['/', '-'])         -> -2
*/

function evaluate(numbers, operators) {
  const result = [];
  for (let [num, op] = [0, 0]; num < numbers.length; num++) {
    if (op === operators.length) { op = 0 }
    if (num === numbers.length - 1) {
      result.push(numbers[num])
    } else {
      result.push(numbers[num], operators[op])
    }
    op++;
  }

  let expressao = [...result];
  for (let calc = 0; calc < numbers.length; calc++) {
    expressao.splice(0, 3, eval(expressao.slice(0, 3).join("")))
  }
  console.log(expressao)
  return expressao[0]
}

console.log(evaluate([33, 11, 29, 13], ['/', '-']))
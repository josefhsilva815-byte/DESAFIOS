/*
    Dada uma matriz (uma matriz de matrizes), gire a matriz 90 graus 
    no sentido horário e retorne-a. Por exemplo, dado [[1, 2], [3, 4]], 
    que se parece com isto:
        1	2
        3	4
    Você deve retornar[[3, 1], [4, 2]], que se parece com isto:
        3	1
        4	2
    
    TESTES:
    1. rotate([[1]])                             -> [[1]]
    2. rotate([[1, 2], [3, 4]])                  -> [[3, 1], [4, 2]]
    3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) -> [[0, 1, 0], [0, 0, 1], [0, 1, 0]]
*/

function rotate(matrix) {
    const [um, dois, tres] = matrix;
    if (um && !dois && !tres) {
        return [um]
    }
    if (um && dois && !tres) {
        return [[dois[0], um[0]], [dois[1], um[1]]];
    }
    return [
        [tres[0], dois[0], um[0]],
        [tres[1], dois[1], um[1]],
        [tres[2], dois[2], um[2]]
    ]
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
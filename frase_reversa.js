/*
    Dada uma sequência de palavras, retorne uma nova sequência com as 
    palavras na ordem inversa. 
    Por exemplo, a primeira palavra deve estar no final da string 
    retornada, e a última palavra deve estar no início da string retornada.

    Na string fornecida, as palavras podem ser separadas por um ou mais espaços.
    A string retornada deve ter apenas um espaço entre as palavras.
    
    TESTES:
    1. reverseSentence("world hello")                          -> "hello world"
    2. reverseSentence("push commit git")                      -> "git commit push"
    3. reverseSentence("npm  install  sudo")                   -> "sudo install npm"
    4. reverseSentence("import    default   function  export") -> "export function default import"
*/

function reverseSentence(sentence) {
    const inverso = sentence
        .split(" ")
        .filter(r => r)
        .reverse()
        .join(" ");
    return inverso;
}
console.log(reverseSentence("world hello"))
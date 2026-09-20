/*
    Dada uma palavra ou frase e uma sequência de letras minúsculas, 
    determine se a palavra ou frase usa todas as letras do conjunto 
    fornecido pelo menos uma vez e nenhuma outra letra.
    1 - Ignore caracteres não alfabéticos na palavra ou frase.
    2 - Ignore a caixa de letras na palavra ou frase.
    
    TESTES:
    1. isPangram("hello", "helo")                                                              -> true
    2. isPangram("hello", "hel")                                                               -> false
    3. isPangram("hello", "helow")                                                             -> false
    4. isPangram("hello world", "helowrd")                                                     -> true
    5. isPangram("Hello World!", "helowrd")                                                    -> true
    6. isPangram("Hello World!", "heliowrd")                                                   -> false
    7. isPangram("freeCodeCamp", "frcdmp")                                                     -> false
    8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") -> true
*/

function isPangram(sentence, letters) {
    const letras = [];
    sentence.split("").forEach(l => {
        if (!letras.includes(l.toLowerCase()) && /[A-Z]/gi.test(l)) {
            letras.push(l.toLowerCase())
        }
    })
    letras.sort()
    const verificarLetras = [...letters].every(l => letras.includes(l));
    return verificarLetras && letras.length === letters.length;
}

console.log(isPangram("freeCodeCamp", "frcdmp"))
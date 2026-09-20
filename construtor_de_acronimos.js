/*
    Dada uma string contendo uma ou mais palavras, retorne um 
    acrônimo das palavras usando as seguintes restrições:

    A sigla deve consistir na primeira letra de cada palavra em 
    maiúscula, salvo indicação em contrário.
    A sigla deve ignorar a primeira letra dessas palavras, 
    a menos que sejam a primeira palavra da sequência 
    fornecida: a ,for ,an ,and ,by , eof .
    As letras da sigla devem ser devolvidas na ordem em que 
    são fornecidas.
    A sigla não deve conter espaços.
    
    TESTES:
    1. buildAcronym("Search Engine Optimization")                                                             -> "SEO"
    2. buildAcronym("Frequently Asked Questions")                                                             -> "FAQ"
    3. buildAcronym("National Aeronautics and Space Administration")                                          -> "NASA"
    4. buildAcronym("Federal Bureau of Investigation")                                                        -> "FBI"
    5. buildAcronym("For your information")                                                                   -> "FYI"
    6. buildAcronym("By the way")                                                                             -> "BTW"
    7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") -> "AUHWPOTIMSH"
*/

function buildAcronym(str) {
    const words = str.split(" ");
    const ignore = ["a", "for", "an", "and", "by", "of"];
    const anagrama = words.map(w => {
        if (!ignore.includes(w)) {
            return w[0].toUpperCase()
        }
    }).join("");

    return anagrama;
}

buildAcronym("Search Engine Optimization")
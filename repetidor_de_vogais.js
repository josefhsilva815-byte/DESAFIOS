/*
    Dada uma string, retorne uma nova versão da string onde cada vogal 
    é duplicada mais uma vez do que a vogal anterior que você encontrou. 
    Por exemplo, a primeira vogal da frase deve permanecer inalterada. 
    A segunda vogal deve aparecer duas vezes seguidas. A terceira vogal 
    deve aparecer três vezes seguidas, e assim por diante.

    As letrasa ,e ,i ,o , eu , em maiúsculas ou minúsculas são consideradas vogais.
    A vogal original deve manter seu caso.
    As vogais repetidas devem ser minúsculas.
    Todos os caracteres não vocálicos devem manter seu caso original.
    
    TESTES:
    1. repeatVowels("hello world")                        -> "helloo wooorld"
    2. repeatVowels("freeCodeCamp")                       -> "freeeCooodeeeeCaaaaamp"
    3. repeatVowels("AEIOU")                              -> "AEeIiiOoooUuuuu"
    4. repeatVowels("I like eating ice cream in Iceland") -> "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"
*/

function repeatVowels(str) {
    const text = [...str];

    const vogais = text.reduce((acc, c, i) => {
        if (/[aeiou]/gi.test(c)) {
            return [...acc, { c, i }]
        }
        return acc
    }, []);

    vogais.forEach((v, i) => {
        const letra = text[v.i].toLowerCase();
        for (let x = i; x > 0; x--) {
            text[v.i] += letra
        }
    });

    return text.join("");
}

console.log(repeatVowels("hello world"))
/*
    Dado um parágrafo, retorne uma matriz das três palavras 
    que ocorrem com mais frequência.

    As palavras no parágrafo serão separadas por espaços.
    Ignore o caso no parágrafo fornecido. Por exemplo, trateHello ehello como a mesma palavra.
    Ignore a pontuação no parágrafo fornecido. A pontuação consiste em vírgulas (),, pontos (.) e pontos de exclamação (!).
    A matriz retornada deve ter todas as palavras em minúsculas.
    A matriz retornada deve estar em ordem decrescente, com a palavra que ocorre com mais frequência primeiro.
    Testes:
    Esperando:1. deve retornar .getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding")["coding", "python", "in"]
    Esperando:2. deve retornar .getWords("I like coding. I like testing. I love debugging!")["i", "like", "coding"]
    Esperando:3. deve retornar .getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!")["debug", "test", "deploy"]
*/

function getWords(paragraph) {
    const listWords = paragraph
        .replace(/[.,!]/g, "")
        .split(" ")
        .filter(n => n);

    const words = [];
    listWords.filter(w => {
        if (!words.includes(w.toLowerCase())) words.push(w.toLowerCase());
    });

    const contWords = words.map(word => {
        const cont = listWords.filter(words => word.toLowerCase() === words.toLowerCase()).length
        return { word, cont }
    })
    contWords.sort((a, b) => b.cont - a.cont);

    return [contWords.slice(0, 3).map(w => w.word)];
}

console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"))
/*
    Dado um número de segundos, retorne a duração em inglês falado.

    1 - Divida a duração em horas, minutos e segundos.
    2 - Pule quaisquer valores zero.
    3 - Use singular ou plural conforme apropriado ("1 hour","2 hours" ).
    4 - Se presente, junte as duas últimas unidades com"and", 
        e a segunda e a terceira últimas unidades com uma 
        vírgula ("1 hour, 2 minutes and 3 seconds").

    TESTES:
    1. getSpokenDuration(3723)  -> "1 hour, 2 minutes and 3 seconds"
    2. getSpokenDuration(7295)  -> "2 hours, 1 minute and 35 seconds"
    3. getSpokenDuration(8521)  -> "2 hours, 22 minutes and 1 second"
    4. getSpokenDuration(435)   -> "7 minutes and 15 seconds"
    5. getSpokenDuration(14455) -> "4 hours and 55 seconds"
    6. getSpokenDuration(72000) -> "20 hours"
    7. getSpokenDuration(1)     -> "1 second"
*/

function getSpokenDuration(seconds) {
    const sec = seconds % 60;
    const min = Math.floor((seconds / 60) % 60);
    const hrs = Math.floor((seconds / 60) / 60);

    // hr, min, sec |
    // min, hr      | min, sec
    // sec, hr      | sec, min

    const verificar = (num, text) => num > 0 ? (num === 1 ? num + ` ${text}` : num + ` ${text}s`) : "";
    return `${verificar(hrs, "hour")}${(hrs && min && sec ? ", " : (hrs && min) ? " and " : "")}${verificar(min, "minute")}${(hrs && min && sec ? " and " : (hrs && min) ? "" : (sec && (min || hrs)) ? " and " : "")}${verificar(sec, "second")}`
}

console.log(getSpokenDuration(72000))
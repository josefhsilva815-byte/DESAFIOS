/*
    Dada a temperatura atual de uma sala e uma temperatura alvo, 
    retorne uma string indicando como ajustar a temperatura ambiente com base nessas restrições:

    1 - Retorne "heat" se a temperatura atual estiver abaixo do alvo.
    2 - Retorne "cool" se a temperatura atual estiver acima do alvo.
    3 - Retorne "hold" se a temperatura atual for igual ao alvo.

    TESTES:
    1. adjustThermostat(68, 72)"heat"
    2. adjustThermostat(75, 72)"cool"
    3. adjustThermostat(72, 72)"hold"
    4. adjustThermostat(-20.5, -10.1)"heat"
    5. adjustThermostat(100, 99.9)"cool"
    6. adjustThermostat(0.0, 0.0)"hold"
*/

function adjustThermostat(temp, target) {
    return temp === target ? "hold" : temp > target ? "cool" : "heat";
}

console.log(adjustThermostat(68, 72))
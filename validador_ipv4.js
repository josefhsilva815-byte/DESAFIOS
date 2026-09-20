/*
    Validador IPv4
    Dada uma string, determine se é um endereço IPv4 válido. Um endereço IPv4 válido consiste em quatro números inteiros separados por pontos (.). Cada número deve satisfazer as seguintes condições:

    É entre 0 e 255 inclusive.
    Não possui zeros à esquerda (por exemplo 0 é permitido, 01 não).
    Somente caracteres numéricos são permitidos.

    TESTES:
    1. isValidIPv4("192.168.1.1")    -> true
    2. isValidIPv4("0.0.0.0")        -> true
    3. isValidIPv4("255.01.50.111")  -> false
    4. isValidIPv4("255.00.50.111")  -> false
    5. isValidIPv4("256.101.50.115") -> false
    6. isValidIPv4("192.168.101.")   -> false
    7. isValidIPv4("192168145213")   -> false
*/

function isValidIPv4(ipv4) {
    const nums = ipv4.split(/\D/g);
    let result = true;

    if (nums.length !== 4) {
        result = false
    }
    nums.forEach(n => {
        if (!n) {
            result = false
        }
        if (n.length >= 2 && Number(n[0]) === 0) {
            result = false
        }
        if (Number(n) < 0 || Number(n) > 255) {
            result = false
        }
    })

    return result;
}

console.log(isValidIPv4("255.00.50.111"))
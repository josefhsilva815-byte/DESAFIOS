/*
    Dada uma string, determine se todos os caracteres da string são únicos.
    Letras maiúsculas e minúsculas devem ser consideradas caracteres diferentes.
    
    TESTES:
    1. allUnique("abc")           -> true
    2. allUnique("aA")            -> true
    3. allUnique("QwErTy123!@")   -> true
    4. allUnique("~!@#$%^&*()_+") -> true
    5. allUnique("hello")         -> false
    6. allUnique("freeCodeCamp")  -> false
    7. allUnique("!@#*$%^&*()aA") -> false
*/

function allUnique(str) {
    const letras = [...str];
    const repetidas = letras.some(l => {
        if (letras.filter(lt => lt === l).length != 1) {
            return true
        }
    })
    return !repetidas;
}

allUnique("abc")
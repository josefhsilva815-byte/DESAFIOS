/*
    Dada uma string que contém parênteses aninhados corretamente, 
    retorne a versão decodificada da string usando as seguintes regras:

    1 - Todos os caracteres dentro de cada par de parênteses 
        devem ser invertidos.
    2 - Os parênteses devem ser removidos do resultado final.
    3 - Se os parênteses estiverem aninhados, o par mais interno 
        deverá ser invertido primeiro e, em seguida, seu resultado deverá ser incluído na reversão do par externo.
    4 - Suponha que todos os parênteses estejam equilibrados 
        e aninhados corretamente.
    
    TESTES:
    1. decode("(f(b(dc)e)a)")                   -> "abcdef"
    2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") -> "Can you read this?"
    3. decode("f(Ce(re))o((e(aC)m)d)p")         -> "freeCodeCamp"
*/

function decode(s) {
  // Função de inverter texto
  const inverter = str => `${str}`.replace(/[(,)]/g, "").split("").reverse().join("");

  // Função separar parênteses
  const numPts = str => str.match(/[(]/g).length;

  // Localizar os parenteses aninhados
  // Inverter eles
  // Subir um nivel
  // Inverter
  // Subir um nivel
  // Inverter

  const decodificar = str => {
    let word = [...str];
    for(let quant = 0; quant < numPts(str); quant++){      
      word.forEach((l, i) => {
        if(/[(]/.test(l) && !/[(]/.test(word.slice(i+1))) {

          word.splice(
            /* Começo     */ i,
            /* Quantidade */ word.slice(i+1).indexOf(")")+2,
            /* Novo Valor */ inverter(word.slice(i , word.slice(i+1).indexOf(")")+i+2))
          )

          /* Verificando posições */
          // console.log(`
          // Comece: ${i}
          // consteúdo: ${word.slice(i , word.slice(i+1).indexOf(")")+i+2)}
          // Até: ${word.slice(i+1).indexOf(")")+i+2}
          // Quant: ${word.slice(i+1).indexOf(")")+2}`)
        }
      })
    }
    return word.join("")
  };

  return decodificar(s)
}

console.log(decode("f(Ce(re))o((e(aC)m)d)p"))
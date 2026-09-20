/*
    Dada uma stringrgb(r, g, b) de cores CSS, retorne seu equivalente hexadecimal.
    Aqui estão alguns exemplos de saídas para uma determinada entrada:

    Entrada	Saída
    "rgb(255, 255, 255)"	"#ffffff"
    "rgb(1, 2, 3)"	"#010203"
    Coloque todas as letras em minúsculas.
    Retorne a# seguido por seis caracteres. Não use nenhum valor abreviado.

    TESTES:
    1. rgbToHex("rgb(255, 255, 255)") -> "#ffffff"
    2. rgbToHex("rgb(1, 11, 111)")    -> "#010b6f"
    3. rgbToHex("rgb(173, 216, 230)") -> "#add8e6"
    4. rgbToHex("rgb(79, 123, 201)")  -> "#4f7bc9"
*/

function rgbToHex(rgb) {
  const [r, g, b] = rgb.replace(/[()A-Z]/gi, "").split(",");

  const red = Number(r).toString(16).padStart(2,0);
  const green = Number(g).toString(16).padStart(2,0);
  const blue = Number(b).toString(16).padStart(2,0);
  const RGB = `#${red}${green}${blue}`
  return RGB.toLowerCase();
}

console.log(rgbToHex("rgb(1, 2, 3)"))
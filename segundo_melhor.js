/*
    Dada uma matriz de números inteiros representando o preço de 
    diferentes laptops e um número inteiro representando seu orçamento, 
    retorne:
    1 - O segundo laptop mais caro se estiver dentro do seu orçamento, ou
    2 - O laptop mais caro que está dentro do seu orçamento, ou
    3 - Se não houver laptops dentro do seu orçamento, 0
    
    OBS: Preços duplicados devem ser ignorados
    
    TESTES:
    1. getLaptopCost([1500, 2000, 1800, 1400], 1900)             -> 1800
    2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)       -> 1800
    3. getLaptopCost([2099, 1599, 1899, 1499], 2200)             -> 1899
    4. getLaptopCost([2099, 1599, 1899, 1499], 1000)             ->    0
    5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) -> 1400
*/

function getLaptopCost(laptops, budget) {

  const listaOrd = laptops.sort();
  const dentroOrc = listaOrd.filter(lap => lap <= budget);

  if(dentroOrc.includes(listaOrd[listaOrd.length-2])) {
    return listaOrd[listaOrd.length-2]
  }
  if(dentroOrc.length) {
    return dentroOrc[dentroOrc.length-1]
  }

  return 0
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900))
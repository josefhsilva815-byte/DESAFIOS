/*
    Desenvolva uma função em Javascript que calcule a quantidade 
    ideal e o custo total de tinta necessária para pintar uma 
    determinada área em metros quadrados.
    O programa deve visar o menor custo financeiro para o 
    cliente, misturando galões e latas se necessário.
    
    Regras de Negócio e Dados
    Cobertura: Cada 1 litro de tinta cobre 20 m².
    Margem de Segurança: Adicione 10% de folga na área total antes do cálculo.
    Galão de Tinta: Possui 3,6 litros, cobre 72m² e custa R$ 85,00.
    Lata de Tinta: Possui 900 ml (0,9 litros), cobre 18M² e custa R$ 45,00.
    Arredondamento: Considere apenas a venda de tintas em embalagens cheias.
    
    Entrada
    areaTotal: Um número decimal representando a área a ser pintada em m².
    
    Saída Resultado:
    Um objeto JavaScript ou impressão no console contendo:
    A quantidade de galões a comprar.
    A quantidade de latas a comprar.
    O valor total da compra em reais formatado (R$).
    
    Ex:
    return {
      galões: 0,
      latas: 0,
      valor final: 'R$ 0,00'
    }
*/

function calcQuantDeTinta(areaTotal) {
    const area = Number((areaTotal * 1.1).toFixed(2));

    const calcLitroParaMetroQuadrado = a => a * 20;

    const galao = {
        litragem: 3.6,
        area: 72,
        unidade: 85.00
    };
    const lata = {
        litragem: 0.9,
        area: 18,
        unidade: 45.00
    };

    const galoes = Math.ceil(Number((area / galao.area).toFixed(2)));
    const latas = Math.ceil(Number(((area % galao.area) / lata.area).toFixed(2)));
    const valor_final = "R$ "+(galoes*galao.unidade + latas*lata.unidade).toFixed(2);


    return {
        galoes,
        latas,
        valor_final
    }
}

console.log(calcQuantDeTinta(7000))
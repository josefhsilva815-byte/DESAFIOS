/*
  Desenvolva um algoritmo em Javascript que receba o número de convidados de um evento e calcule:
  a quantidade ideal, 
  a divisão de embalagens
  e o custo total de salgados, doces e bebidas. 
  O programa deve visar o menor custo financeiro para o cliente, 
  priorizando a compra de pacotes grandes (atacado) e usando 
  unidades menores (varejo) apenas para cobrir o restante, desde 
  que seja financeiramente vantajoso.

  Regras de Negócio e Dados:
    Salgados (Consumo: 12 unidades por pessoa)
    Cento de Salgados (Pacote com 100): Custa R$ 80,00
    Salgado Unitário: Custa R$ 1,20
    <>
    OBS: Se o valor dos salgados avulsos ultrapassar R$ 80,00, compensa comprar mais um cento inteiro ====================================
-
    Doces (Consumo: 5 unidades por pessoa)
    Milheiro de Doces (Pacote com 1000): Custa R$ 350,00
    Cento de Doces (Pacote com 100): Custa R$ 45,00
    Doce Unitário: Custa R$ 0,60
    <>
    OBS: O algoritmo deve combinar milheiros, centos e unidades para dar o menor preço ===================================================
-   
    Bebidas (Consumo: 400 ml por pessoa + 15% de folga no volume total)
    Garrafa de 2 Litros (2000 ml): Custa R$ 9,00
    Lata de 350 ml: Custa R$ 3,50
    <>
    OBS: Se o valor das latas necessárias para o resto ultrapassar R$ 9,00, substitua-as por mais uma garrafa de 2L ======================
- 
  Entrada:
    quantidadeConvidados: Um número inteiro representando o total de pessoas na festa.
-
  Saída:
    Um objeto JavaScript detalhado contendo as quantidades físicas de 
    cada item e o valor total geral da festa formatado em reais (R$).
- 
  Exemplo:
  {
    "detalhes": {
      "salgados": { "centos": 6, "avulsos": 0, "custo": "R$ 480,00" },
      "doces": { "milheiros": 0, "centos": 2, "avulsos": 50, "custo": "R$ 120,00" },
      "bebidas": { "garrafas2L": 11, "latas": 3, "custo": "R$ 109,50" }
    },
    "custoTotalGeral": "R$ 709,50"
  }
*/


function calcularBuffet(quantidadeConvidados = 0) {
  const salgado = {
    porPessoa: (n) => n * 12,
    centro: {
      quantidade: 100,
      custo: 80
    },
    unitario: 1.2
  }
  const doce = {
    porPessoa: (n) => n * 5,
    milheiro: {
      quantidade: 1000,
      custo: 350
    },
    centro: {
      quantidade: 100,
      custo: 45
    },
    unitario: 0.6
  }
  const bebida = {
    porPessoa: (n) => Number(((n * 0.4) * 1.15).toFixed(3)),
    garrafa: {
      ltr: 2,
      custo: 9
    },
    lata: {
      ltr: 0.35,
      custo: 3.5
    }
  }


  const salgados = () => {
    /* Regras de Negócio:
        Salgados (Consumo: 12 unidades por pessoa)
        Centro de Salgados (Pacote com 100): Custa R$ 80,00
        Salgado Unitário: Custa R$ 1,20
        <>
        OBS: Se o valor dos salgados avulsos ultrapassar R$ 80,00, compensa comprar mais um cento inteiro         
    */
    const quantSalgados = salgado.porPessoa(quantidadeConvidados);
    let centros = quantSalgados >= salgado.centro.quantidade ? Math.floor(quantSalgados / salgado.centro.quantidade) : 0;
    let avulsos = quantSalgados % salgado.centro.quantidade;

    while (Math.ceil(avulsos * salgado.unitario) >= salgado.centro.custo) {
      avulsos -= Math.floor(salgado.centro.custo / salgado.unitario);
      centros++;
    }

    let custo = (centros * salgado.centro.custo) + (avulsos * salgado.unitario);

    return { centros, avulsos, custo }
  };

  const doces = () => {
    /* Regras de Negócio:
        Doces (Consumo: 5 unidades por pessoa)
        Milheiro de Doces (Pacote com 1000): Custa R$ 350,00
        Centro de Doces (Pacote com 100): Custa R$ 45,00
        Doce Unitário: Custa R$ 0,60
        <>
        OBS: O algoritmo deve combinar milheiros, centos e unidades para dar o menor preço
    */
    const quantDoces = doce.porPessoa(quantidadeConvidados);
    let milheiros = quantDoces >= doce.milheiro.quantidade ? Math.floor(quantDoces / doce.milheiro.quantidade) : 0;
    let centros = (quantDoces % doce.milheiro.quantidade) >= doce.centro.quantidade ? Math.floor((quantDoces % doce.milheiro.quantidade) / doce.centro.quantidade) : 0;
    let avulsos = (quantDoces % doce.milheiro.quantidade) % doce.centro.quantidade;

    while (Math.ceil(avulsos * doce.unitario) >= doce.centro.custo) {
      avulsos -= Math.floor(doce.centro.custo / doce.unitario);
      centros++;
    }

    let custo = (milheiros * doce.milheiro.custo) + (centros * doce.centro.custo) + (avulsos * doce.unitario);

    return { milheiros, centros, avulsos, custo }
  };

  const bebidas = () => {
    /* Regras de Negócio:
        Bebidas (Consumo: 400 ml por pessoa + 15% de folga no volume total)
        Garrafa de 2 Litros (2000 ml): Custa R$ 9,00
        Lata de 350 ml: Custa R$ 3,50
        <>
        OBS: Se o valor das latas necessárias para o resto ultrapassar R$ 9,00, substitua-as por mais uma garrafa de 2L
    */
    const quantBebidas = bebida.porPessoa(quantidadeConvidados);
    let garrafas = Math.floor(quantBebidas / bebida.garrafa.ltr);
    let latas = Math.ceil((quantBebidas % bebida.garrafa.ltr) / bebida.lata.ltr);

    while (Math.ceil(latas * bebida.lata.custo) >= bebida.garrafa.custo) {
      latas -= Math.ceil(bebida.garrafa.custo / bebida.lata.custo);
      garrafas++;
    }

    let custo = (garrafas * bebida.garrafa.custo) + (latas * bebida.lata.custo);

    return { garrafas, latas, custo }
  };

  return {
    detalhes: {
      salgados: { ...salgados(), custo: "R$ " + salgados().custo.toFixed(2) },
      doces: { ...doces(), custo: "R$ " + doces().custo.toFixed(2) },
      bebidas: { ...bebidas(), custo: "R$ " + bebidas().custo.toFixed(2) }
    },
    custoTotalGeral: "R$ " + (salgados().custo + doces().custo + bebidas().custo).toFixed(2)
  }
}

console.log(calcularBuffet(5));
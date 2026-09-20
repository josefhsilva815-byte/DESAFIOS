/*
    Dada uma sequência de nome e sobrenome de uma pessoa, 
    calcule seu número da sorte usando as seguintes regras:

    1 - O primeiro e o último nome são separados por um espaço
    2 - Encontre a contagem de vogais e consoantes para cada nome
    3 - Multiplique as contagens menores de vogais e consoantes entre 
        si e depois pelo comprimento do nome menor
    4 - Faça o mesmo para as duas contagens maiores e o nome maior
    5 - Subtraia o valor menor do maior para obter o número da sorte
    6 - Se o valor final for zero (0), retorne 13.

    TESTES:
    1. getLuckyNumber("John Doe")            -> 21
    2. getLuckyNumber("Olivia Lewis")        -> 52
    3. getLuckyNumber("James Wilson")        -> 18
    4. getLuckyNumber("Elizabeth Hernandez") -> 81
    5. getLuckyNumber("Mike Walker")         -> 32
    6. getLuckyNumber("Chloe Perez")         -> 13
*/

function getLuckyNumber(name) {
  const [firstName, lastName] = name.trim().split(" ");

  // Funções para contar Vogais e Consoantes
  const numVogs = n => n.match(/[aeiou]/gi).length;
  const numCons = n => n.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

  // Encontrando os menores e maiores valores
  // Vogais
  const [menorNumVogs, maiorNumVogs] = numVogs(firstName) > numVogs(lastName) ? [numVogs(lastName), numVogs(firstName)] : [numVogs(firstName), numVogs(lastName)];
  
  // Consoantes
  const [menorNumCons, maiorNumCons] = numCons(firstName) > numCons(lastName) ? [numCons(lastName), numCons(firstName)] : [numCons(firstName), numCons(lastName)];

  // Nomes
  const [menorNome, maiorNome] = firstName.length > lastName.length ? [lastName, firstName] : [firstName, lastName];

  // Calculando os menores e maiores valores
  const calcValores = (a,b,c) => a * b * c;

  const totalMenoresValores = calcValores(menorNumVogs, menorNumCons, menorNome.length);
  const totalMaioresValores = calcValores(maiorNumVogs, maiorNumCons, maiorNome.length);

  const numSorte = totalMaioresValores - totalMenoresValores || 13;

  console.log(`
    ${menorNumVogs} x ${menorNumCons} x ${menorNome.length} = ${totalMenoresValores}
    ${maiorNumVogs} x ${maiorNumCons} x ${maiorNome.length} = ${totalMaioresValores}

    Número da Sorte: ${numSorte}
  `)

  return numSorte
}

console.log(getLuckyNumber("Chloe Perez"));
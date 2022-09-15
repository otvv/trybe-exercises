/*
*/

const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

const sortOddsAndEvens = () => {
  const oddsAndEvens = [ 13, 3, 4, 10, 7, 2 ];
  oddsAndEvens.sort((a, b) => { return (a - b) });
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}

sortOddsAndEvens();

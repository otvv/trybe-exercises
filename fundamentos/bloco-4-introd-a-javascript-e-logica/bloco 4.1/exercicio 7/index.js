/*
*/

(function main() {

  const chessPiece = 'Knight';

  if ((chessPiece === chessPiece.toLowerCase() || chessPiece === chessPiece.toUpperCase) || chessPiece === 'Horse') {
    console.log('L shape')

    return true;
  }
  else {

    console.error('invalid chess piece.');

    return false;
  }

})();
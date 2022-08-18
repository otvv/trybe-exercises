/*
*/

(function main() {

  const internalAngTriangl = 60
  const trianglSides = 3

  if (((internalAngTriangl * trianglSides) === 180)) {
    console.log('this is considered a valid triangle:', (internalAngTriangl * trianglSides), '°');

    return true;
  }
  else if ((internalAngTriangl * trianglSides) !== 180) {
    console.log('this is not considered a valid triangle:', (internalAngTriangl * trianglSides), '°');

    return false;
  }

})();
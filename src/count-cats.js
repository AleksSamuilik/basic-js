const CAT = "^^";

module.exports = function countCats( matrix ) {
  return matrix.map(subArray =>  subArray
    .reduce((result, current) => result + (current === CAT ? 1 : 0),0,),
    ).reduce((result, current) => result + current, 0);
};

// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];

    matrix.forEach((subarr, i) => {
      if((i+1)%2 === 0) matrix[i].concat(subarr.reverse())
      else matrix[i].concat(subarr);
  });
 

  return matrix.reduce((curr,prev) => curr.concat(prev));
}

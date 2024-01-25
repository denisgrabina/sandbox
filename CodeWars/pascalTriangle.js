function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const coefficient = result[i - 1][j - 1] + result[i - 1][j];
        row.push(coefficient);
      }
    }
    result.push(row);
  }

  const flattenedResult = result.flat();
  return flattenedResult;
}

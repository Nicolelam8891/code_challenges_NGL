const arrayMatrix = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

/* snail(arrayMatrix) 
=> [9, 8, 7, 4, 1, 2, 3, 6, 5] -> outcome */ 

const snailMatrix = (matrix) => {
  let outcome = []

  outcome.push(...matrix[0]) //[9, 8, 7]

  outcome.push(matrix[1][2]) //[9, 8, 7]

  const lastRow = matrix[2].reverse()
  outcome.push(...lastRow)
  console.log('lastRow', lastRow) //[1, 2, 3]

  outcome.push(matrix[1][0], matrix[1][1])
  console.log('matrix[1][1]',  matrix[1][1]) //5
  console.log('matrix[1][0]',  matrix[1][0]) //6

  return outcome
}

console.log(snailMatrix(arrayMatrix))
/* Sample input
[ 
  [ 11, 2, 4 ],
  [ 4, 5, 6 ],
  [ 10, 8, -12 ]
]

*/
const diagonalDifference = a => {
  const { t1, t2 } = a.reduce(
    (carry, row, index) => {
      const rowLength = row.length

      const t1Elm = row[index]
      const t2Elm = row[rowLength - 1 - index]

      const { t1: curT1, t2: curT2 } = carry
      const t1 = curT1 + t1Elm
      const t2 = curT2 + t2Elm
      return { t1, t2 }
    },
    { t1: 0, t2: 0 }
  )

  return Math.abs(t1 - t2)
}

const a = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
const result = diagonalDifference(a)
console.log(result)

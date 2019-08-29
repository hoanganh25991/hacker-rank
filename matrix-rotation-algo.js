/* Sample Input
[ [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ] ]
*/
const LoopMatrix = (matrix, m, n) => {
  let _i = m -1;
  let _j = n - 1;

  return {
    next: () => {
      // Cel val
      const i   = _i;
      const j   = _j;
      const val = matrix[_j][_i]

      const reachRowLimit = i > (m-1)
      if(reachRowLimit){
        _i = 0;
        _j = _j + 1;
      }

      if(_j)

      return {i, j, val}
    }
  }
}

row.reduce((carry, cel) => {})

const next = (matrix, m, n) => (_i, _j) => {
  let ni = _i - 1;
  let nj = _j;

  const reachBound = ni < 0
  if(reachBound){
    nj =
    ni = 0
  }

  const val = matrix[ni][nj]
  return {val, i: ni, j: nj}
}


const matrixRotation = (matrix, m, n, r) => {
	const next = matrix => {
		return matrix.reduce((carry, row, j) => {
		  row.reduce((_rcarry, val, i) => {
		    const aij = val

      }, carry)
		  return carry;
    }, {})
	}

	console.log("xx")
}

const matrix = [ 
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]

  const r = 1;	



matrixRotation(matrix, r)
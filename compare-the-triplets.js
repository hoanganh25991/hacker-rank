const solve = function(a0, a1, a2, b0, b1, b2) {
  const compare = (a, b) => {
    switch (true) {
      case a > b:
        return [1, 0]
      case a < b:
        return [0, 1]
      case a === b:
        return [0, 0]
    }
  }

  const points = [0, 0]
  const args = arguments
  const length = arguments.length / 2

  Array.apply(null, args).forEach((i, index) => {
    if (index >= length) return

    const a = args[index]
    const b = args[index + length]

    const [aPoint, bPoint] = compare(a, b)
    points[0] = points[0] + aPoint
    points[1] = points[1] + bPoint
  })

  return points
}

const result = solve(5, 6, 7, 3, 6, 10)
console.log(result)

const miniMaxSum = arr => {
  const total = arr.reduce((a, b) => a + b)
  const minElm = Math.min(...arr)
  const maxElm = Math.max(...arr)

  const minSum = total - maxElm
  const maxSum = total - minElm
  console.log(`${minSum} ${maxSum}`)
}

miniMaxSum([1, 2, 3, 4, 5])

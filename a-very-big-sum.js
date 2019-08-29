const aVeryBigSum = function(n, ar) {
  return ar.reduce((a, b) => a + b)
}

const result = aVeryBigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
console.log(result)

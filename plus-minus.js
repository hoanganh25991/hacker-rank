const plusMinus = arr => {
  const result = arr.reduce(
    (carry, elm) => {
      const increaseIndex = elm > 0 ? "positive" : elm < 0 ? "negative" : "zero"
      carry[increaseIndex] = carry[increaseIndex] + 1
      return carry
    },
    { positive: 0, negative: 0, zero: 0 }
  )

  Object.keys(result).forEach(key => console.log(result[key] / arr.length))
}

plusMinus([-4, 3, -9, 0, 4, 1])

const birthdayCakeCandles = ar => {
  const tallestCandles = ar.reduce(
    (carry, candle) => {
      const lastOne = carry[carry.length - 1]
      switch (true) {
        case candle > lastOne: {
          carry.pop()
          carry.push(candle)
          break
        }
        case candle === lastOne: {
          carry.push(candle)
          break
        }
        case candle < lastOne:
          break
      }
      return carry
    },
    [0]
  )

  return tallestCandles.length
}

const result = birthdayCakeCandles([3, 2, 1, 3])
console.log(result)

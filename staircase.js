const staircase = n => {
  const stairs = Array(n)
    .fill(null)
    .map((val, index) => {
      const stairNum = index + 1
      const space = Array(n - stairNum)
        .fill(" ")
        .join("")
      const stair = Array(stairNum)
        .fill("#")
        .join("")
      return `${space}${stair}`
    })
  console.log(stairs.join("\n"))
}

staircase(6)

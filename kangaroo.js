// Complete the kangaroo function below.
const kangaroo = (x1, v1, x2, v2) => {
  const log = (...args) => process.env.DEV_X === "true" && console.log(...args)
  const getDirection = distance => distance >= 0 ? 1 : -1;


  const startDistance = x2 - x1;
  const direction = getDirection(startDistance);
  log("[startDistance]", startDistance)
  log("[direction]", direction)

  let pointer = 1;
  let result;

  while (pointer >= 0) {
    const k01Position = x1 + pointer * v1;
    const k02Position = x2 + pointer * v2;

    const pointerDistance = k02Position - k01Position;
    const isCloser = (startDistance - pointerDistance) * direction > 0;
    const keepDirection = getDirection(startDistance) === getDirection(pointerDistance);

    log("[pointer]", pointer)
    log("[pointerDistance]", pointerDistance)
    log("[isCloser]", isCloser);

    if (pointerDistance === 0) {
      result = "YES";
      break;
    }

    if (!isCloser) {
      result = "NO";
      break;
    }

    if (!keepDirection) {
      result = "NO";
      break;
    }

    pointer++;
  }

  return result;
}

// console.log(kangaroo(21, 6, 47, 3))
console.log(kangaroo(43, 2, 70, 2))
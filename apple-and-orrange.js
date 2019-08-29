const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const _computeDistances = (fruits, treePoint) => fruits.map(fruit => treePoint + fruit);
  const _filterInRegion = (s, t, distances) => distances.filter(distance => distance >= s && distance <= t)


  return [
    { fruits: apples, treePoint: a },
    { fruits: oranges, treePoint: b },
  ].map(({ fruits, treePoint }) => {
    const distances = _computeDistances(fruits, treePoint);
    const distanceInRegions = _filterInRegion(s, t, distances);
    console.log(distanceInRegions.length);
  })
}

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;

  for (let [box, units] of boxTypes) {
    if (truckSize >= box) {
      truckSize -= box;
      res += box * units;
    } else {
      res += truckSize * units;
      break;
    }
  }

  return res;
}

// Time: O(nlog(n))
// Space: O(1)

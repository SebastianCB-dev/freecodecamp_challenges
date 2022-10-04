function pairwise(arr, arg) {
  let pairIndices = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Exclude pairs that contain previously paired elements
      if (arr[i] + arr[j] == arg
        && !pairIndices.includes(i)
        && !pairIndices.includes(j)) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11

console.log(pairwise([0, 0, 0, 0, 1, 1], 1))

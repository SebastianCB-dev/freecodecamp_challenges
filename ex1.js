function sym(...args) {
  const totalArrays = args.length;
  let result = deleteDuplicates(args[0]);
  for (let i = 0; i < totalArrays - 1; i++) {
    result = diferenceSymmetric(result, deleteDuplicates(args[i + 1]));
  }
  return result.sort();
}

function diferenceSymmetric(array1, array2) {
  let result = [];
  array1.forEach(number => {
    if (!array2.includes(number)) {
      result.push(number);
    }
  });
  array2.forEach(number => {
    if (!array1.includes(number)) {
      result.push(number);
    }
  });
  return [...new Set(result)];
}

function deleteDuplicates(array) {
  return [...new Set(array)];
}

// tests

//should return [3, 4, 5].
console.log(sym([1, 2, 3], [5, 2, 1, 4]))
//should contain only three elements.
console.log(sym([1, 2, 3], [5, 2, 1, 4]))
// should return [3, 4, 5].
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
//should contain only three elements.
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
//should return [3, 4, 5].
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]))
//should contain only three elements.
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]))
//should return [1, 4, 5].
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
//should contain only three elements.
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
//should return [1, 4, 5].
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))
//should contain only three elements.
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))
//should return [2, 3, 4, 6, 7].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
//should contain only five elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
//should return [1, 2, 4, 5, 6, 7, 8, 9]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
//should contain only eight elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))